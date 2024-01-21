package pl.io2.tablicakanban.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.io2.tablicakanban.model.User;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {
    void deleteUserById(Long id);

    Optional<User> findUserById(Long id);

    Optional<User> findUserByUsername(String username);
}
