package com.sbk.resturantbackend.service;

import java.util.List;

import com.sbk.resturantbackend.model.ClassResources;

public interface ClassResourcesService {
    public ClassResources save(ClassResources classResources);
    public ClassResources getById(int classId);
    public List<ClassResources> get();
    public boolean delete(int classId);
    public ClassResources update(int classId, ClassResources classResources);
}
