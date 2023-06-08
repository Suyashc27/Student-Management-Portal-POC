package com.poc.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.poc.app.entities.Student;
@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>{


}
