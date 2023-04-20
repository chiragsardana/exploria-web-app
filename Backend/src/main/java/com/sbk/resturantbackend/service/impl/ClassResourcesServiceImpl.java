package com.sbk.resturantbackend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sbk.resturantbackend.exception.ResourceNotFoundException;
import com.sbk.resturantbackend.model.ClassResources;
import com.sbk.resturantbackend.repository.ClassResourcesRepository;
import com.sbk.resturantbackend.service.ClassResourcesService;

@Service
public class ClassResourcesServiceImpl implements ClassResourcesService{

    private ClassResourcesRepository classResourcesRepository;

    public ClassResourcesServiceImpl(ClassResourcesRepository classResourcesRepository) {
        this.classResourcesRepository = classResourcesRepository;
    }

    @Override
    public ClassResources save(ClassResources classResources) {
        // TODO Auto-generated method stub
        return classResourcesRepository.save(classResources);
    }

    @Override
    public ClassResources getById(int classId) {
        // TODO Auto-generated method stub
        return classResourcesRepository.findById(classId).orElseThrow(()-> new ResourceNotFoundException("Class Resource", "Id", classResourcesRepository));
    }

    @Override
    public boolean delete(int classId) {
        // TODO Auto-generated method stub
        ClassResources classResources = getById(classId);
        classResourcesRepository.delete(classResources);
        if(classResourcesRepository.existsById(classId)){
            return false;
        }
        return true;
    }

    @Override
    public ClassResources update(int classId, ClassResources classResources) {
        // TODO Auto-generated method stub
        classResources.setClassId(classId);

        return classResourcesRepository.save(classResources);
    }

    @Override
    public List<ClassResources> get() {
        // TODO Auto-generated method stub
        return classResourcesRepository.findAll();
    }
    
}
