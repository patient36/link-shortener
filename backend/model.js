import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
    original: String,
    short: String,
    qrCode: String,
    alias: String,
    visits: { type: Number, default: 0 }
}, {
    timestamps: true
}
)

const Url = mongoose.model("Url", urlSchema)

export default Url