package app.snabbit.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name="booking")
public class Booking {
    @Id
    @JsonProperty("bookingid")
    private int bookingid;
    @JsonProperty("uniqueid")
    private String uniqueid;
    @JsonProperty("name")
    private String name;
    @JsonProperty("price")
    private int price;
    @JsonProperty("useremail")
    private String useremail;
    @JsonProperty("status")
    private String status;
    public Booking() {}
    public Booking(int bookingid,String uniqueid, String name, int price, String useremail,String status) {
        this.bookingid = bookingid;
        this.uniqueid = uniqueid;
        this.name = name;
        this.price = price;
        this.useremail = useremail;
        this.status=status;
    }
    public int getBookingid() {
        return bookingid;
    }
    public void setBookingid(int bookingid) {
        this.bookingid = bookingid;
    }
    public String getUniqueid() {
        return uniqueid;
    }
    public void setUniqueid(String uniqueid) {
        this.uniqueid = uniqueid;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getPrice() {
        return price;
    }
    public void setPrice(int price) {
        this.price = price;
    }
    public String getUseremail() {
        return useremail;
    }
    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
}
