package com.poc.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.poc.app.entities.Homework;
import com.poc.app.entities.Standard;
import com.poc.app.entities.Student;
import com.poc.app.entities.Subject;
import com.poc.app.repository.HomeworkRepository;
import com.poc.app.repository.StandardRepository;
import com.poc.app.repository.StudentRepository;
import com.poc.app.repository.SubjectRepository;

@Service
public class TeacherService {
	
	@Autowired
	SubjectRepository subjectRepository;
	
	@Autowired
	StudentRepository studentRepository;
	
	@Autowired
	StandardRepository standardRepository;
	
	@Autowired
	HomeworkRepository homeworkRepository;
	
//	public List<Subject> getSubject() {
//		return subjectRepository.findAll();
//	}
	
	
//	public ResponseEntity<List<Subject>> getSubject() {
//		List<Subject> subjectList = subjectRepository.findAll();
//        if (subjectList.isEmpty()) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//        }
//        return ResponseEntity.of(Optional.of(subjectList));
//		
//	}
//
//	public ResponseEntity<Object> getStudent() {
//		List<Student> studentList = studentRepository.findAll();
//        if (studentList.isEmpty()) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//        }
//        return ResponseEntity.of(Optional.of(studentList));
//	}
	
	public ResponseEntity<List<Student>> getStudentByStandardId(int standard_id) {
		
		Standard standard = standardRepository.findById(standard_id).orElse(null);
		
		List<Student> finalstudents = new ArrayList<>();
		List<Student> students = standard.getStudent();
		for(Student s:students) {
			if(s.getUser().isActive()) {
				finalstudents.add(s);
			}
		}
		
        return ResponseEntity.status(HttpStatus.OK).body(finalstudents);
		
		
	}
	
	
	
	
	public ResponseEntity<Homework> saveHomework(int standard_id, Homework homework) {
		
		Standard standard = standardRepository.findById(standard_id).orElse(null);
		homework.setStandard(standard);
		homeworkRepository.save(homework);
		
		standardRepository.save(standard);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(homework);
		
		
	}
	
	
	
	

}
