package app.snabbit.repository;

import app.snabbit.model.Booking;

import java.util.List;

public interface BookingRepository {
    Booking add(Booking booking);

    List<Booking> getAll();
}
