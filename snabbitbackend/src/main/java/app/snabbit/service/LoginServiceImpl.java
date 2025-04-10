package app.snabbit.service;

import app.snabbit.model.Login;
import app.snabbit.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginServiceImpl implements LoginService {

    private final LoginRepository loginRepository;
    @Autowired
    public LoginServiceImpl(LoginRepository loginRepository)
    {
        this.loginRepository = loginRepository;
    }
    @Override
    public List<Login> getAllLogin() {
        return loginRepository.findAll();
    }
}
