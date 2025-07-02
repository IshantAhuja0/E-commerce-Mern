import { Cart } from "../models/cart.model.js"


export const getOrCreateCart = async (req, res) => {
  const userId = req.user._id;

  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = await Cart.create({ userId });
    }

    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};
