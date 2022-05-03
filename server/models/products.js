import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: { type: String },
    image_url: { type: String },
    size: { type: String },
    description: { type: String },
    tags: { type: Array },
    likesCount: {
      type: Number,
      default: 0,
    },
    new: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Product = mongoose.model('Gallery', productSchema);

export default Product;
