package app.snabbit.service;

import app.snabbit.model.Booking;

import java.util.List;

public interface BookingService {
    Booking saveBooking(Booking booking);

    List<Booking> getbooking();

    Booking updateBooking(String bookingid,String status);
}
