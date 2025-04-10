package app.snabbit.repository;

import app.snabbit.model.Cart;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CartItemRepositoryImpl implements CartItemRepository{
    private JdbcTemplate jdbcTemplate;
    public CartItemRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    @Override
    public List<Cart> findall() {
        String sql = "SELECT * FROM cart";
        return jdbcTemplate.query(sql, (rs, rowNum) ->
                new Cart(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getString("imageUrl"),
                        rs.getInt("price"),
                        rs.getString("time"),
                        rs.getString("uniqueid")
                ));
    }
    @Override
    public Cart save(Cart cartItem) {
        String sql = "INSERT INTO cart (name, imageUrl, price, time,uniqueid) VALUES (?, ?, ?, ?,?)";
        jdbcTemplate.update(sql,
                cartItem.getName(),
                cartItem.getImageUrl(),
                cartItem.getPrice(),
                cartItem.getTime(),
                cartItem.getUniqueid());
        return cartItem;
    }
    @Override
    public Cart delete(String uniqueid) {
        String sql = "DELETE FROM cart WHERE uniqueid = ?";
        jdbcTemplate.update(sql, uniqueid);
        return null;
    }
}
