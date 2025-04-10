package app.snabbit.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name="cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("id")
    private int id;
    @JsonProperty("name")
    private String name;
    @JsonProperty("imageUrl")
    private String imageUrl;
    @JsonProperty("price")
    private int price;
    @JsonProperty("time")
    private String time;
    @JsonProperty("uniqueid")
    private String uniqueid;
    public Cart() {
    }
    public Cart(int id, String name, String imageUrl, int price, String time,String uniqueid) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.time = time;
        this.uniqueid=uniqueid;
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

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getUniqueid() {
        return uniqueid;
    }
    public void serUniqueid(String uniqueid)
    {
        this.uniqueid=uniqueid;
    }
}
