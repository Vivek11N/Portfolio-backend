package com.example.portfolio.controller;

import com.example.portfolio.model.Portfolio;
import com.example.portfolio.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    @PostMapping("/contact")
    public Portfolio submitContactForm(@RequestBody Portfolio portfolio) {
        return portfolioService.savePortfolio(portfolio);
    }
}

