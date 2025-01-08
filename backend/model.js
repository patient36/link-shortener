import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
    original: String,
    short: String,
    qrCode: String,
    alias: String,
    visits: Number
}, {
    timestamps: true
}
)

const Url = mongoose.model("Url", urlSchema)

export default Url