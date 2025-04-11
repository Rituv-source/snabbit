package app.snabbit.repository;

import app.snabbit.model.Booking;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BookingRepositoryImpl implements BookingRepository {
    private JdbcTemplate jdbcTemplate;
    public BookingRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Booking add(Booking booking) {
        String sql = "INSERT INTO booking (uniqueid,useremail,name,price,id) VALUES (?, ?, ?, ?,?)";
        jdbcTemplate.update(sql,
                booking.getUniqueid(),
                booking.getUserEmail(),
                booking.getName(),
                booking.getPrice(),
                booking.getId());
        return booking;
    }

    @Override
    public List<Booking> getAll() {
        String sql = "SELECT * FROM booking";
        return jdbcTemplate.query(sql, (rs, rowNum) ->
                new Booking(rs.getString("uniqueid"), rs.getInt("id"), rs.getString("name"), rs.getInt("price"), rs.getString("useremail")));
    }
}
