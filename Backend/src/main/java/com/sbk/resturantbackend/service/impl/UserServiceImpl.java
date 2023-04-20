package com.sbk.resturantbackend.service.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.sbk.resturantbackend.exception.NoUserExistException;
import com.sbk.resturantbackend.exception.UserAlreadyExistException;
import com.sbk.resturantbackend.model.Role;
import com.sbk.resturantbackend.model.User;
import com.sbk.resturantbackend.model.UserDto;
import com.sbk.resturantbackend.repository.UserRepository;
import com.sbk.resturantbackend.service.RoleService;
import com.sbk.resturantbackend.service.UserService;

@Service(value = "userService")
public class UserServiceImpl implements UserDetailsService, UserService {

    @Autowired
    private RoleService roleService;

    @Autowired
    private UserRepository userDao;

    @Autowired
    private BCryptPasswordEncoder bcryptEncoder;

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userDao.findByUsername(username);
        if(user == null){
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), getAuthority(user));
    }

    private Set<SimpleGrantedAuthority> getAuthority(User user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        user.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getName()));
        });
        return authorities;
    }

    public List<User> findAll() {
        List<User> list = new ArrayList<>();
        userDao.findAll().iterator().forEachRemaining(list::add);
        return list;
    }

    @Override
    public User findOne(String username) {
        return userDao.findByUsername(username);
    }

    @Override
    public User save(UserDto user)throws UserAlreadyExistException {

        System.out.println("USER DTO STARTTED!");
        if(userDao.findByUsername(user.getUsername()) != null){
            System.out.println("Already Exists!");
            throw new UserAlreadyExistException("User Already Exists");
            // return userDao.findByUsername(user.getUsername());
        }

        User nUser = user.getUserFromDto();
        nUser.setPassword(bcryptEncoder.encode(user.getPassword()));

        Role role = roleService.findByName("USER");
        Set<Role> roleSet = new HashSet<>();
        roleSet.add(role);

        if(nUser.getEmail().split("@")[1].equals("abcg.com")){
            role = roleService.findByName("ADMIN");
            roleSet.add(role);
        }

        nUser.setRoles(roleSet);
        System.out.println("User is "+nUser.getRoles()+" "+nUser.getUsername()+" and "+ userDao.findByUsername(nUser.getUsername()));
        // if(findOne(user.getUsername()) != null){
        //     return nUser;
        // }
        // System.out.println(userDao.findByUsername(nUser.getUsername()).getUsername() + " is UserName");
        // if(userDao.findByUsername(nUser.getUsername()) !=null && userDao.findByUsername(nUser.getUsername()).getUsername() == nUser.getUsername()) {
        //     return nUser;
        // }
            
        return userDao.save(nUser);
    }
}
