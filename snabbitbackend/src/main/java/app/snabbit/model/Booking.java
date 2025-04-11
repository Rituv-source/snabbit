package app.snabbit.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="booking")
public class Booking {
    @Id
    @JsonProperty("uniqueid")
    private String uniqueid;
    @JsonProperty("id")
    private int id;
    @JsonProperty("name")
    private String name;
    @JsonProperty("price")
    private int price;
    @JsonProperty("useremail")
    private String useremail;
    public Booking() {}
    public Booking(String uniqueid, int id, String name, int price, String useremail) {
        this.uniqueid = uniqueid;
        this.id = id;
        this.name = name;
        this.price = price;
        this.useremail = useremail;
    }
    public String getUniqueid() {
        return uniqueid;
    }
    public void setUniqueid(String uniqueid) {
        this.uniqueid = uniqueid;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
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
    public String getUserEmail() {
        return useremail;
    }
    public void setUserEmail(String useremail) {
        this.useremail = useremail;
    }

}
