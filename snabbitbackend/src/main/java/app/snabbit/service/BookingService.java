package app.snabbit.service;

import app.snabbit.model.Booking;

import java.util.List;

public interface BookingService {
    Booking addBooking(Booking booking);

    List<Booking> getbooking();
}
