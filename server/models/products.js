import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

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

productSchema.plugin(mongoosePaginate);

const Product = mongoose.model('Gallery', productSchema);

export default Product;
