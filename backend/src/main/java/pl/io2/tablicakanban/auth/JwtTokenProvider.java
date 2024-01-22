package pl.io2.tablicakanban.auth;

import java.security.Key;
import java.util.Date;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;
import pl.io2.tablicakanban.dto.UserLoginDetails;

@Component
public class JwtTokenProvider {
    private static String jwtSecret;
    private static int jwtExpirationMs;

    @Value("${pl.io2.tablicakanban.app.jwtSecret}")
    @SuppressWarnings("java:S2696")
    public void setJwtSecret(String jwtSecret) {
        JwtTokenProvider.jwtSecret = jwtSecret;
    }

    @Value("${pl.io2.tablicakanban.app.jwtExpirationMs}")
    @SuppressWarnings("java:S2696")
    public void setJwtExpirationMs(int jwtExpirationMs) {
        JwtTokenProvider.jwtExpirationMs = jwtExpirationMs;
    }

    @PostConstruct
    public void init() {
        System.out.println(jwtSecret + " | " + jwtExpirationMs);
    }

    public String generateJwtToken(UserLoginDetails userLoginDetails) {
        return Jwts.builder()
                .setSubject((userLoginDetails.getUsername()))
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .signWith(key(), SignatureAlgorithm.HS256)
                .compact();
    }

    private Key key() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
    }

    public String getUserNameFromJwtToken(String token) {
        return Jwts.parserBuilder().setSigningKey(key()).build()
                .parseClaimsJws(token).getBody().getSubject();
    }

    public boolean hasTokenExpired(String authToken) {
        boolean result = true;
        try {
            Date expirationDate = Jwts.parserBuilder().setSigningKey(key()).build()
                    .parseClaimsJws(authToken).getBody().getExpiration();
            Date currentDate = new Date();
            if (expirationDate.compareTo(currentDate) >= 0) {
                result = false;
            }
        } catch (MalformedJwtException e) {
            System.out.println("Invalid JWT token: " + e.getMessage());
        } catch (ExpiredJwtException e) {
            System.out.println("JWT token is expired: " + e.getMessage());
        }
        return result;
    }

    public boolean validateJwtToken(String authToken) {
        try {
            Jwts.parserBuilder().setSigningKey(key()).build().parse(authToken);
            return true;
        } catch (MalformedJwtException e) {
            System.out.println("Invalid JWT token: " + e.getMessage());
        } catch (ExpiredJwtException e) {
            System.out.println("JWT token is expired: " + e.getMessage());
        } catch (UnsupportedJwtException e) {
            System.out.println("JWT token is unsupported: " + e.getMessage());
        } catch (IllegalArgumentException e) {
            System.out.println("JWT claims string is empty: " + e.getMessage());
        }
        return false;
    }
}