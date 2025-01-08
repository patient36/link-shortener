import Url from "./model.js";
import express from "express";
import qrcode from "qrcode"
import { nanoid } from "nanoid";

const urlRouter = express.Router()

urlRouter.get('/:alias/:short', async (req, res) => {
    try {
        const alias = req.params.alias || 'url';
        const short = `${process.env.BASE_URL}${alias}/${req.params.short}`;

        const url = await Url.findOne({ short });

        if (!url) return res.status(404).json({ error: 'URL not found' });
        res.status(200).json({ url });
    } catch (error) {
        console.error('Error fetching URL:', error);
        res.status(500).json({ error: error.message });
    }
});


urlRouter.post('/shorten', async (req, res) => {
    try {
        const original = req.body.original
        const alias = req.body.alias || "url"

        const existing = await Url.findOne({ original, alias })
        if (existing) return res.status(200).json({ url: existing })

        const qrCode = await qrcode.toDataURL(original)
        const short = `${process.env.BASE_URL}${alias}/${nanoid(6)}`
        const url = new Url({ original, short, qrCode, alias })
        
        await url.save()
        res.status(200).json({ url })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

export default urlRouter