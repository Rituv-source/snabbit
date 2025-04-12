package app.snabbit.service;

import app.snabbit.model.Booking;
import app.snabbit.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingServiceImpl implements BookingService {
    private final BookingRepository bookingRepository;
    @Autowired
    public BookingServiceImpl(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }
    @Override
    public Booking saveBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    @Override
    public List<Booking> getbooking() {
        return bookingRepository.getAll();
    }

    @Override
    public Booking updateBooking(String bookingid,String status) {
        return bookingRepository.update(bookingid,status);
    }
}
