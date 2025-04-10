package app.snabbit.repository;

import app.snabbit.model.Cart;

import java.util.List;

public interface CartItemRepository {

    List<Cart> findall();
    Cart save(Cart cartItem);
    Cart delete(String uniqueid);
}
