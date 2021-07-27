import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Item = new Schema(
    {
        name: { type: String, required: true },
        category: { type: String, required: true },
        imgURL: { type: String, required: true },
        benefits: { type: String, required: true },
        quantity: { type: String, required: true },
        price: { type: String, required: true },
        shelfLife: { type: String, required: true },
        daysHeld: { type: String, required: true }
    },
    { timestamps: true }
)
export default mongoose.model('item', Item)