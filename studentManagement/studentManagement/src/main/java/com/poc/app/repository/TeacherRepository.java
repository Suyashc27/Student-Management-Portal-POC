package com.poc.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.poc.app.entities.Teacher;
@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Integer>{

}
