package pl.io2.tablicakanban.controllers;

import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.io2.tablicakanban.auth.JwtTokenProvider;
import pl.io2.tablicakanban.dto.UserLoginDetails;

@Transactional
@RestController
@RequestMapping("/auth")
public class AuthController {
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody UserLoginDetails userLoginDetails) {
        JwtTokenProvider jwtTokenProvider = new JwtTokenProvider();
        String jwt = jwtTokenProvider.generateJwtToken(userLoginDetails);
        return new ResponseEntity<>(jwt, HttpStatus.OK);
    }
}
