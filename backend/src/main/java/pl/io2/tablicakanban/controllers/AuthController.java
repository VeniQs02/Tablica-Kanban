package pl.io2.tablicakanban.controllers;

import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.io2.tablicakanban.auth.JwtTokenProvider;
import pl.io2.tablicakanban.dto.UserBrowserLocalStorage;
import pl.io2.tablicakanban.dto.UserLoginDetails;
import pl.io2.tablicakanban.model.User;
import pl.io2.tablicakanban.services.UserService;

import java.util.Optional;

@Transactional
@RestController
@RequestMapping("/auth")
public class AuthController {
    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody UserLoginDetails userLoginDetails) {
        Optional<User> optionalUser = userService.findUserByUsername(userLoginDetails.getUsername());
        if (optionalUser.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        User user = optionalUser.get();
        if (!user.getPassword().equals(userLoginDetails.getPassword())) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        JwtTokenProvider jwtTokenProvider = new JwtTokenProvider();
        String jwt = jwtTokenProvider.generateJwtToken(userLoginDetails);
        UserBrowserLocalStorage userLocalStorage = new UserBrowserLocalStorage();
        userLocalStorage.setJwtToken(jwt);
        userLocalStorage.setUsername(user.getUsername());
        userLocalStorage.setFirstName(user.getFirstName());
        userLocalStorage.setLastName(user.getLastName());
        userLocalStorage.setEmail(user.getEmail());
        return new ResponseEntity<>(userLocalStorage, HttpStatus.OK);
    }

    @PostMapping("/expire")
    public ResponseEntity<?> hasUserTokenExpired(@RequestBody String userToken) {
        JwtTokenProvider jwtTokenProvider = new JwtTokenProvider();
        boolean hasTokenExpired = jwtTokenProvider.hasTokenExpired(userToken);
        if (hasTokenExpired) {
            return new ResponseEntity<>(hasTokenExpired, HttpStatus.UNAUTHORIZED);
        } else {
            return new ResponseEntity<>(hasTokenExpired, HttpStatus.OK);
        }
    }
}
