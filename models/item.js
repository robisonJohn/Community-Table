import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Item = new Schema(
    {
        name: { type: String, required: true },
        category: { type: String, required: true },
        imgURL: { type: String, required: true },
        description: { type: String, required: true },
        quantity: { type: String, required: true }
    },
    { timestamps: true }
)
export default mongoose.model('item', Item)