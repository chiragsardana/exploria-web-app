package com.sbk.resturantbackend.service;

import com.sbk.resturantbackend.model.Role;

public interface RoleService {
    Role findByName(String name);
}
