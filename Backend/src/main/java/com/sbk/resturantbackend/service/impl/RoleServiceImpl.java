package com.sbk.resturantbackend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sbk.resturantbackend.model.Role;
import com.sbk.resturantbackend.repository.RoleRepository;
import com.sbk.resturantbackend.service.RoleService;

@Service(value = "roleService")
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleDao;

    @Override
    public Role findByName(String name) {
        Role role = roleDao.findRoleByName(name);
        return role;
    }
}
