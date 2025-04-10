package app.snabbit.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="service")
public class ServiceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("id")
    private int id;
    @JsonProperty("uniqueid")
    private String uniqueid;

    @JsonProperty("name")
    private String name;

    @JsonProperty("details")
    private String details;

    @JsonProperty("imageUrl")
    private String imageUrl;

    @JsonProperty("price")
    private int price;
    @JsonProperty("time")
    private String time;


    public ServiceEntity() {}

    public ServiceEntity(int id, String name, String details, String imageUrl, int price, String time,String uniqueid) {
        this.id = id;
        this.name = name;
        this.details = details;
        this.imageUrl= imageUrl;
        this.price = price;
        this.time = time;
        this.uniqueid =uniqueid;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = this.id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
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
    public void setUniqueid(String uniqueid) {
        this.uniqueid = uniqueid;
    }
}
