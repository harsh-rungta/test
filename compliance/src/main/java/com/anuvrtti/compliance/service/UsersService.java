package com.anuvrtti.compliance.service;

import com.anuvrtti.compliance.model.Users;
import com.anuvrtti.compliance.repo.UsersRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class UsersService {
    
    @Autowired
    private UsersRepo usersRepo;



}
