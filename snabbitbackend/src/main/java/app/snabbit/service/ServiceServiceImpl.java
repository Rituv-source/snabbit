package app.snabbit.service;

import app.snabbit.model.ServiceEntity;
import app.snabbit.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceServiceImpl implements ServiceService {

    private final ServiceRepository serviceRepository;

    @Autowired
    public ServiceServiceImpl(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    @Override
    public List<ServiceEntity> getAllServices() {
        return serviceRepository.findAll();
    }

    @Override
    public ServiceEntity deleteServiceByUniqueId(String uniqueid) {
        try {
            return serviceRepository.delete(uniqueid);
        }  catch (Exception e) {
            throw new RuntimeException("Error deleting cart item: " + e.getMessage());
        }
    }

    @Override
    public List<ServiceEntity> getAllServicesAdmin() {
        return serviceRepository.findAllAdmin();
    }

    @Override
    public ServiceEntity savaServiceEntity(ServiceEntity serviceEntity) {
        return serviceRepository.save(serviceEntity);
    }

    @Override
    public ServiceEntity deleteServiceById(int id) {
        return serviceRepository.deleteById(id);
    }
}
