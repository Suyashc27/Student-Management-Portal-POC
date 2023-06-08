package com.poc.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.poc.app.entities.Homework;

public interface HomeworkRepository extends JpaRepository<Homework, Integer>{

}
