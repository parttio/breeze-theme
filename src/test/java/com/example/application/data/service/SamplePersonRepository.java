package com.example.application.data.service;

import com.example.application.data.entity.SamplePerson;
import com.vaadin.exampledata.DataType;
import com.vaadin.exampledata.ExampleDataGenerator;
import java.time.LocalDateTime;

import java.util.List;
import java.util.stream.Stream;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SamplePersonRepository {
    
    static SamplePersonRepository instance = new SamplePersonRepository();

    public static SamplePersonRepository get() {
        if(instance.list == null) {
                    SamplePersonRepository samplePersonRepository = instance;
            int seed = 123;

            ExampleDataGenerator<SamplePerson> samplePersonRepositoryGenerator = new ExampleDataGenerator<>(
                    SamplePerson.class, LocalDateTime.of(2021, 9, 27, 0, 0, 0));
            samplePersonRepositoryGenerator.setData(SamplePerson::setId, DataType.ID);
            samplePersonRepositoryGenerator.setData(SamplePerson::setFirstName, DataType.FIRST_NAME);
            samplePersonRepositoryGenerator.setData(SamplePerson::setLastName, DataType.LAST_NAME);
            samplePersonRepositoryGenerator.setData(SamplePerson::setEmail, DataType.EMAIL);
            samplePersonRepositoryGenerator.setData(SamplePerson::setPhone, DataType.PHONE_NUMBER);
            samplePersonRepositoryGenerator.setData(SamplePerson::setDateOfBirth, DataType.DATE_OF_BIRTH);
            samplePersonRepositoryGenerator.setData(SamplePerson::setOccupation, DataType.OCCUPATION);
            samplePersonRepositoryGenerator.setData(SamplePerson::setImportant, DataType.BOOLEAN_10_90);
            samplePersonRepository.saveAll(samplePersonRepositoryGenerator.create(100, seed));
        }
        
        return instance;
    };
    
    private List<SamplePerson> list;

    public long count() {
        return (long) list.size();
    }

    public void saveAll(List<SamplePerson> create) {
        this.list = create;
    }

    public List<SamplePerson> findAll() {
        return list;
    }

}