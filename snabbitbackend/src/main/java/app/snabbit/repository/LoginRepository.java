package app.snabbit.repository;

import app.snabbit.model.Login;

import java.util.List;

public interface LoginRepository {

    List<Login> findAll();
}
