import Url from "./model.js";
import express from "express";
import qrcode from "qrcode"
import { nanoid } from "nanoid";

const urlRouter = express.Router()

urlRouter.get('/', async (req, res) => {
    // Get top 5 most visited links from our shortened links
    try {
        const urls = await Url.find().sort({ visits: -1 }).select("short original visits createdAt").limit(5);
        const metadata = urls.length > 0 ? `${urls.length} most visited link${urls.length > 1 ? 's' : ''}` : 'no links found'
        res.status(200).json({ metadata, urls });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


urlRouter.get('/:alias/:short', async (req, res) => {
    try {
        const alias = req.params.alias || 'url';
        const short = `${process.env.BASE_URL}${alias}/${req.params.short}`;

        const url = await Url.findOne({ short });
        if (!url) return res.status(404).json({ error: 'URL not found' });
        url.visits++;
        await url.save();
        res.status(200).redirect(url.original);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const isValidUrl = (url) => {
    try {
        const parsedUrl = new URL(url);

        if (!["http:", "https:"].includes(parsedUrl.protocol)) {
            return false;
        }

        if (parsedUrl.hostname === "localhost") {
            return false;
        }

        return true;
    } catch {
        return false;
    }
};


urlRouter.post('/shorten', async (req, res) => {
    try {
        const original = req.body.original
        const sentAlias = req.body.alias || "url"
        const alias = sentAlias.trim().toLowerCase().replace(/\s+/g, '-')
        if (!isValidUrl(original)) return res.status(400).json({ message: "Unable to shorten a broken URL. Check the URL and try again later." })

        const existing = await Url.findOne({ original, alias })
        if (existing) return res.status(200).json({ url: existing })

        const qrCode = await qrcode.toDataURL(original)
        const short = `${process.env.BASE_URL}${alias}/${nanoid(10)}`
        const url = new Url({ original, short, qrCode, alias })

        await url.save()
        res.status(200).json({ url })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

export default urlRouter