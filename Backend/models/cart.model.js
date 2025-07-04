import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true, 
    },
  },
  {
    timestamps: true,
  }
);

export const Cart = mongoose.model('Cart', cartSchema);
