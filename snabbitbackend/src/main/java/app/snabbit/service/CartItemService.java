package app.snabbit.service;

import app.snabbit.model.Cart;

import java.util.List;

public interface CartItemService {
    Cart saveCartItem(Cart cartItem);
    List<Cart> getAllCartItems();
    Cart deleteCartItemById(String uniqueid);
}
