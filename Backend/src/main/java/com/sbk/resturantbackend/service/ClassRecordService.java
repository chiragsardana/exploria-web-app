package com.sbk.resturantbackend.service;

import java.util.List;

import com.sbk.resturantbackend.model.ClassRecord;

public interface ClassRecordService {
    public ClassRecord save(ClassRecord ClassRecord);
    public ClassRecord getById(int classId);
    public List<ClassRecord> get();
    public boolean delete(int classId);
    public ClassRecord update(int classId, ClassRecord ClassRecord);
}
