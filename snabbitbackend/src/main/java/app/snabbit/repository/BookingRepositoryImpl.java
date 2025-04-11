package app.snabbit.repository;

import app.snabbit.model.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BookingRepositoryImpl implements BookingRepository {

    private final JdbcTemplate jdbcTemplate;
    @Autowired
    public BookingRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Booking save(Booking booking) {
        String sql = "INSERT INTO booking (uniqueid,useremail,name,price) VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sql,
                booking.getUniqueid(),
                booking.getUseremail(),
                booking.getName(),
                booking.getPrice());
        return booking;
    }

    @Override
    public List<Booking> getAll() {
        String sql = "SELECT * FROM booking";
        return jdbcTemplate.query(sql, (rs, rowNum) ->
                new Booking(rs.getInt("bookingid"),rs.getString("uniqueid"),  rs.getString("name"), rs.getInt("price"), rs.getString("useremail"),rs.getString("status")));
    }
}
