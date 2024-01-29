package pl.io2.tablicakanban.services;

import org.springframework.stereotype.Service;
import pl.io2.tablicakanban.dto.UserEmailChangeDTO;
import pl.io2.tablicakanban.dto.UserPasswordChangeDTO;
import pl.io2.tablicakanban.exceptions.UserNotFoundException;
import pl.io2.tablicakanban.model.User;
import pl.io2.tablicakanban.repository.UserRepo;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public User addUser(User user) {
        if(!validUser(user)) {
            return null;
        }
        return userRepo.save(user);
    }

    private boolean validUser(User user) {
        return Objects.isNull(findUserByUsername(user.getUsername()));
    }

    public List<User> findAllUsers() {
        return userRepo.findAll();
    }

    public User updateUser(User user) {
        return userRepo.save(user);
    }

    public User findUserById(Long id) {
        return userRepo.findUserById(id).orElseThrow(
                () -> new UserNotFoundException("User by id " + id + " was not found")
        );
    }

    public boolean changePassword(UserPasswordChangeDTO userPasswordChangeDTO) {
        boolean result = true;
        String username = userPasswordChangeDTO.getUsername();
        Optional<User> userByUsername = findUserByUsername(username);
        if (userByUsername.isPresent()) {
            User user = userByUsername.get();
            user.setPassword(userPasswordChangeDTO.getPassword());
            updateUser(user);
        } else {
            result = false;
        }
        return result;
    }

    public boolean changeEmail(UserEmailChangeDTO userEmailChangeDTO) {
        boolean result = true;
        String username = userEmailChangeDTO.getUsername();
        Optional<User> userByUsername = findUserByUsername(username);
        if (userByUsername.isPresent()) {
            User user = userByUsername.get();
            user.setEmail(userEmailChangeDTO.getEmail());
            updateUser(user);
        } else {
            result = false;
        }
        return result;
    }

    public Optional<User> findUserByUsername(String username) {
        return userRepo.findUserByUsername(username);
    }

    public void deleteUser(Long id) {
        userRepo.deleteUserById(id);
    }
}
