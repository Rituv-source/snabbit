package app.snabbit.service;

import app.snabbit.model.Cart;
import app.snabbit.repository.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartItemServiceImpl implements CartItemService {
    private final CartItemRepository cartItemRepository;

    @Autowired
    public CartItemServiceImpl (CartItemRepository cartItemRepository)
    {
        this.cartItemRepository = cartItemRepository;
    }

    @Override
    public List<Cart> getAllCartItems() {
        return cartItemRepository.findall();
    }
    @Override
    public Cart saveCartItem(Cart cartItem) {
        return cartItemRepository.save(cartItem);
    }

    @Override
    public Cart deleteCartItemById(String uniqueid)
    {
        try {
            return cartItemRepository.delete(uniqueid);
        } catch (Exception e) {
            throw new RuntimeException("Error deleting cart item: " + e.getMessage());
        }
    }
}
