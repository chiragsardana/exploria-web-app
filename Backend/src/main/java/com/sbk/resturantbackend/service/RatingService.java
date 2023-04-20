package com.sbk.resturantbackend.service;

import java.util.List;

import com.sbk.resturantbackend.model.Rating;



public interface RatingService {
    
    public Rating save(Rating rating);
    
    public List<Rating> getAllRating();

    public Rating getRatingById(long id);
    public Rating updateRatingById(long id, Rating rating);
    public boolean deleteRatingById(long id);

    public List<Rating> getAllRatingByDishId(long dish_id);
    public List<Rating> getAllRatingByResturantId(long resturant_id);

    public List<Rating> getAllRatingByUserId(String user_id);
}
