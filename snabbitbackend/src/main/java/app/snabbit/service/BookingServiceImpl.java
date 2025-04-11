package app.snabbit.service;

import app.snabbit.model.Booking;
import app.snabbit.repository.BookingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingServiceImpl implements BookingService {
    private BookingRepository bookingRepository;
    public BookingServiceImpl(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }
    @Override
    public Booking addBooking(Booking booking) {
        return bookingRepository.add(booking);
    }

    @Override
    public List<Booking> getbooking() {
        return bookingRepository.getAll();
    }
}
