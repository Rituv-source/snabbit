package app.snabbit.repository;

import app.snabbit.model.ServiceEntity;
import java.util.List;

public interface ServiceRepository {
    List<ServiceEntity> findAll();
    ServiceEntity delete(String uniqueid);
    ServiceEntity deleteById(int id);
    List<ServiceEntity> findAllAdmin();

}
