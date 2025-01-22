package com.example.portfolio.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")  // Allow frontend to access backend
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Allow methods as needed
                .allowedHeaders("*")
                .allowCredentials(true);  // Allows credentials (cookies, authentication headers, etc.)
    }
}