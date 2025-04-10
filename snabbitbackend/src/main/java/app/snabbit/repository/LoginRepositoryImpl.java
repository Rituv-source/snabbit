package app.snabbit.repository;

import app.snabbit.model.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class LoginRepositoryImpl implements LoginRepository {
    private final JdbcTemplate jdbcTemplate;
    @Autowired
    public LoginRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    @Override
    public List<Login> findAll() {
        String sql = "SELECT * FROM login";
        return jdbcTemplate.query(sql, (rs, rowNum) ->
                new Login(
                        rs.getString("email"),
                        rs.getString("password")
                ));
    }
}
