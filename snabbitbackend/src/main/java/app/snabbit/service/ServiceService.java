package app.snabbit.service;

import app.snabbit.model.ServiceEntity;
import java.util.List;

public interface ServiceService {
    List<ServiceEntity> getAllServices();
    ServiceEntity deleteServiceByUniqueId(String uniqueid);
    ServiceEntity deleteServiceById(int id);
    List<ServiceEntity> getAllServicesAdmin();
}
