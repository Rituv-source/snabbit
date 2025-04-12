package app.snabbit.controller;

import app.snabbit.model.Booking;
import app.snabbit.model.Cart;
import app.snabbit.model.Login;
import app.snabbit.model.ServiceEntity;
import app.snabbit.service.BookingService;
import app.snabbit.service.CartItemService;
import app.snabbit.service.LoginService;
import app.snabbit.service.ServiceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ServiceController {

    private final ServiceService serviceService;
    private final CartItemService cartItemService;
    private final LoginService loginService;
    private final BookingService bookingService;

    public ServiceController(ServiceService serviceService, CartItemService cartItemService, LoginService loginService, BookingService bookingService) {
        this.serviceService = serviceService;
        this.cartItemService = cartItemService;
        this.loginService = loginService;
        this.bookingService = bookingService;
    }

    @GetMapping("/service")
    public List<ServiceEntity> getAllService() {
        return serviceService.getAllServices();
    }
    @PostMapping("/service")
    public ServiceEntity saveService(@RequestBody ServiceEntity serviceEntity)
    {
        return serviceService.savaServiceEntity(serviceEntity);
    }
    @GetMapping("/admin/service")
    public List<ServiceEntity> getAllServiceAdmin() {
        return serviceService.getAllServicesAdmin();
    }
    @DeleteMapping("/service/{id}")
    public ServiceEntity deleteServiceAdmin(@PathVariable("id") int id) {
        return serviceService.deleteServiceById(id);
    }
    @DeleteMapping("/admin/service/{uniqueid}")
    public ServiceEntity deleteService(@PathVariable("uniqueid") String uniqueid) {
        return serviceService.deleteServiceByUniqueId(uniqueid);
    }
    @GetMapping("/cart")
    public List<Cart> getAllCartItem()
    {
        return cartItemService.getAllCartItems();
    }
    @PostMapping("/cart")
    public Cart addToCart(@RequestBody Cart cartItem) {
        return cartItemService.saveCartItem(cartItem);
    }
    @DeleteMapping("/cart/{uniqueid}")
    public Cart deleteCartItem(@PathVariable("uniqueid") String uniqueid) {
        return cartItemService.deleteCartItemById(uniqueid);
    }

    @GetMapping("/login")
    public List<Login> getAllLogin()
    {
        return loginService.getAllLogin();
    }
    @PostMapping("/admin/booking")
    public Booking saveBooking(@RequestBody Booking booking)
    {
        return bookingService.saveBooking(booking);
    }
    @GetMapping("/admin/booking")
    public List<Booking> getAllBooking()
    {
        return bookingService.getbooking();
    }
    @PutMapping("/admin/booking/{bookingid}")
    public Booking updateBooking(@PathVariable("bookingid") String bookingid, @RequestBody Map<String, String> payload) {
        String status = payload.get("status");
        return bookingService.updateBooking(bookingid, status);
    }


}
