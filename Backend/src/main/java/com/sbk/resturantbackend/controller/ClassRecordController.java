package com.sbk.resturantbackend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sbk.resturantbackend.model.ClassRecord;
import com.sbk.resturantbackend.service.ClassRecordService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/ClassRecord")
public class ClassRecordController {
    private ClassRecordService classRecordService;

    public ClassRecordController(ClassRecordService classRecordService) {
        this.classRecordService = classRecordService;
    }
    @PostMapping("/save")
    public ResponseEntity<ClassRecord> saveClassRecord(@RequestBody ClassRecord ClassRecord){
        System.out.println("Class is SBK"+ClassRecord);
        return new ResponseEntity<ClassRecord>(classRecordService.save(ClassRecord), HttpStatus.CREATED);
    }

    @GetMapping("/get")
    public ResponseEntity<List<ClassRecord>> get(){
        return new ResponseEntity<List<ClassRecord>>(classRecordService.get(),HttpStatus.OK);
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<ClassRecord> getClassRecordById(@PathVariable("id") Integer id){
        return new ResponseEntity<ClassRecord>(classRecordService.getById(id), HttpStatus.OK);
    }
    @DeleteMapping("/deleteById/{id}")
    public ResponseEntity<Boolean> deleteExpenseById(@PathVariable("id") Integer id){
        // System.out.println("The Id we are getting is "+id);
        return new ResponseEntity<Boolean>(classRecordService.delete(id), HttpStatus.OK);
    }

    @PutMapping("/updateById/{id}")
    public ResponseEntity<ClassRecord> updateExpenseById(@PathVariable("id") Integer id, @RequestBody ClassRecord ClassRecord){
        return new ResponseEntity<ClassRecord>(classRecordService.update(id, ClassRecord), HttpStatus.OK);
    }
}
