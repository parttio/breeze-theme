package com.example.application.data.service;

import com.example.application.data.entity.SamplePerson;
import java.util.Optional;


public class SamplePersonService {

    private SamplePersonRepository repository = SamplePersonRepository.get();

    public SamplePersonService() {
    }

    protected SamplePersonRepository getRepository() {
        return repository;
    }

    public Optional<SamplePerson> get(Integer get) {
        return Optional.of(repository.findAll().get(0));
    }

}
