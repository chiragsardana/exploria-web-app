package com.sbk.resturantbackend.service;

import java.util.List;

import com.sbk.resturantbackend.exception.UserAlreadyExistException;
import com.sbk.resturantbackend.model.User;
import com.sbk.resturantbackend.model.UserDto;

public interface UserService {
    User save(UserDto user) throws UserAlreadyExistException;
    List<User> findAll();
    User findOne(String username);
}
