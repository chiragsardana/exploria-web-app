package com.sbk.resturantbackend.service;

import java.util.List;

import com.sbk.resturantbackend.model.Resturant;



public interface ResturantService {
    public Resturant save(Resturant resturant);
    public List<Resturant> getAllResturants();
    public Resturant getResturantById(long id);
    public Resturant updateResturantById(long id, Resturant resturant);
    public boolean deleteResturantById(long id);
    public List<Resturant> getResturantsByRating(double min, double max);
    public List<Resturant> getAllRestaurantBySearch(String search);
}
