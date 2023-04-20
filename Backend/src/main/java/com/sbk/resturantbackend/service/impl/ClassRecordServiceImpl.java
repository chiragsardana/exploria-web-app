package com.sbk.resturantbackend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sbk.resturantbackend.exception.ResourceNotFoundException;
import com.sbk.resturantbackend.model.ClassRecord;
import com.sbk.resturantbackend.repository.ClassRecordRepository;
import com.sbk.resturantbackend.service.ClassRecordService;


@Service
public class ClassRecordServiceImpl implements ClassRecordService{
    private  ClassRecordRepository classRecordRepository;

    public ClassRecordServiceImpl(ClassRecordRepository classRecordRepository) {
        this.classRecordRepository = classRecordRepository;
    }

    @Override
    public ClassRecord save(ClassRecord ClassRecord) {
        // TODO Auto-generated method stub
        return classRecordRepository.save(ClassRecord);
    }

    @Override
    public ClassRecord getById(int classId) {
        // TODO Auto-generated method stub
        return classRecordRepository.findById(classId).orElseThrow(()-> new ResourceNotFoundException("Class Record ", "Id", classRecordRepository));
    }

    @Override
    public List<ClassRecord> get() {
        // TODO Auto-generated method stub
        return classRecordRepository.findAll();
    }

    @Override
    public boolean delete(int classId) {
        // TODO Auto-generated method stub
        ClassRecord classRecord = getById(classId);
        classRecordRepository.delete(classRecord);
        if(classRecordRepository.existsById(classId)){
            return false;
        }
        return true;
    }

    @Override
    public ClassRecord update(int classId, ClassRecord classRecord) {
        // TODO Auto-generated method stub
        classRecord.setClassId(classId);
        return classRecordRepository.save(classRecord);
    }
    
}
