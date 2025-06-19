package com.anuvrtti.compliance.controller;

import com.anuvrtti.compliance.model.Users;
import com.anuvrtti.compliance.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/login")
public class UsersController {
    
    @Autowired
    private UsersService usersService;

    @PostMapping("/login")
    public ResponseEntity<List<Users>> getAllProducts() {
        List<Product> products = usersService.getAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

}
