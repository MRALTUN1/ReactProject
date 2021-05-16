package com.sample.controller;

import com.sample.entity.Bilyoner;
import com.sample.repository.BilyonerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON_VALUE)
public class SampleController {

    @Autowired
    BilyonerRepository bilyonerRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Bilyoner>> homePage() {
        List<Bilyoner> bilyoners =  bilyonerRepository.findAll();

        return ResponseEntity.ok(bilyoners);
    }

    @PostMapping(path = "/save",consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Bilyoner> findByFilter(@RequestBody Bilyoner bilyoner) {
        bilyonerRepository.save(bilyoner);
        return ResponseEntity.ok(bilyoner);
    }
}
