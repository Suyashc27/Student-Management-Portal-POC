package com.poc.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.poc.app.entities.Subject;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Integer>{

//	List<Subject> findByStandardId(int standard_id);
}
