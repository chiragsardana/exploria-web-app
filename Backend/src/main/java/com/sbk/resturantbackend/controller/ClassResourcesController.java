package com.sbk.resturantbackend.controller;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sbk.resturantbackend.model.ClassResources;
import com.sbk.resturantbackend.service.ClassResourcesService;



@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/ClassResources")
public class ClassResourcesController {
    private ClassResourcesService classResourcesService;

    public ClassResourcesController(ClassResourcesService classResourcesService) {
        this.classResourcesService = classResourcesService;
    }


    @PostMapping("/save")
    public ResponseEntity<ClassResources> saveClassResources(@RequestBody ClassResources ClassResources){
        System.out.println("Class is SBK"+ClassResources);
        return new ResponseEntity<ClassResources>(classResourcesService.save(ClassResources), HttpStatus.CREATED);
    }

    @GetMapping("/get")
    public ResponseEntity<List<ClassResources>> get(){
        return new ResponseEntity<List<ClassResources>>(classResourcesService.get(),HttpStatus.OK);
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<ClassResources> getClassResourcesById(@PathVariable("id") Integer id){
        return new ResponseEntity<ClassResources>(classResourcesService.getById(id), HttpStatus.OK);
    }
    @DeleteMapping("/deleteById/{id}")
    public ResponseEntity<Boolean> deleteExpenseById(@PathVariable("id") Integer id){
        // System.out.println("The Id we are getting is "+id);
        return new ResponseEntity<Boolean>(classResourcesService.delete(id), HttpStatus.OK);
    }

    @PutMapping("/updateById/{id}")
    public ResponseEntity<ClassResources> updateExpenseById(@PathVariable("id") Integer id, @RequestBody ClassResources ClassResources){
        return new ResponseEntity<ClassResources>(classResourcesService.update(id, ClassResources), HttpStatus.OK);
    }


}
