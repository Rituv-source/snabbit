package app.snabbit.repository;

import app.snabbit.model.ServiceEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Repository
public class ServiceRepositoryImpl implements ServiceRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public ServiceRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<ServiceEntity> findAll() {
        String sql = "SELECT id, name, details, imageUrl, price, time, uniqueid FROM service WHERE status = 0";
        return jdbcTemplate.query(sql, (rs, rowNum) ->
                new ServiceEntity(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getString("details"),
                        rs.getString("imageUrl"),
                        rs.getInt("price"),
                        rs.getString("time"),
                        rs.getString("uniqueid")
                ));
    }

    @Override
    public ServiceEntity delete(String uniqueid) {
        String sql ="UPDATE service SET status = CASE WHEN status = 1 THEN 0 ELSE 1 END WHERE uniqueid = ?";
        jdbcTemplate.update(sql, uniqueid);
        return null;
    }

    @Override
    public ServiceEntity deleteById(int id) {
        String  sql="DELETE FROM service WHERE id = ?";
        jdbcTemplate.update(sql, id);
        return null;
    }

    @Override
    public List<ServiceEntity> findAllAdmin() {
        String sql = "SELECT * FROM service";
        return jdbcTemplate.query(sql, (rs, rowNum) ->
                new ServiceEntity(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getString("details"),
                        rs.getString("imageUrl"),
                        rs.getInt("price"),
                        rs.getString("time"),
                        rs.getString("uniqueid")
                ));
    }

    @Override
    public ServiceEntity save(ServiceEntity serviceEntity) {
        String sql = "INSERT INTO service (name, details, imageUrl, price, time, uniqueid) VALUES (?, ?, ?, ?,?,?)";
        jdbcTemplate.update(sql,
                serviceEntity.getName(),
                serviceEntity.getDetails(),
                serviceEntity.getImageUrl(),
                serviceEntity.getPrice(),
                serviceEntity.getTime(),
                serviceEntity.getUniqueid());
        return serviceEntity;
    }
}
