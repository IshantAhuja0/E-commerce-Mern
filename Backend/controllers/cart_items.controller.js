import { CartItem } from "../models/cart_item.model.js";
import { Cart } from "../models/cart.model.js";


export const addToCart = async (req, res) => {
  const userId = req.user._id;
  const { productId, variantId, quantity, price } = req.body;
if(!productId||!variantId||!quantity||!price)
res.send("All fiels are required")
  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    let cartItem = await CartItem.findOne({
      cartId: cart._id,
      productId,
      variantId,
    });

    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      cartItem = await CartItem.create({
        cartId: cart._id,
        productId,
        variantId,
        quantity,
        price,
      });
    }

    return res.status(200).json(cartItem);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

// Get all items
export const getCartItems = async (req, res) => {
  const userId = req.user._id;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const items = await CartItem.find({ cartId: cart._id })
      .populate("productId")
      .populate("variantId");

    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

// Update quantity of a cart item
export const updateCartItem = async (req, res) => {
  const { cartItemId } = req.params;
  const { quantity } = req.body;

  try {
    const cartItem = await CartItem.findById(cartItemId);
    if (!cartItem) return res.status(404).json({ message: "Item not found" });

    cartItem.quantity = quantity;
    await cartItem.save();

    return res.status(200).json(cartItem);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

// Remove item from cart
export const removeCartItem = async (req, res) => {
  const { cartItemId } = req.params;

  try {
    await CartItem.findByIdAndDelete(cartItemId);
    return res.status(200).json({ message: "Item removed" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

// Clear entire cart
export const clearCart = async (req, res) => {
  const userId = req.user._id;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    await CartItem.deleteMany({ cartId: cart._id });
    return res.status(200).json({ message: "Cart cleared" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};
