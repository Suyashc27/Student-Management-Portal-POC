package com.poc.app.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.poc.app.entities.Homework;
import com.poc.app.entities.Student;
import com.poc.app.entities.Subject;
import com.poc.app.entities.Teacher;
import com.poc.app.entities.User;
import com.poc.app.repository.StudentRepository;
import com.poc.app.repository.UserRepository;
import com.poc.app.service.AdminService;
import com.poc.app.service.StudentService;
import com.poc.app.service.TeacherService;
@CrossOrigin
@RestController
@PreAuthorize("hasRole('STUDENT')")
public class StudentController {
	
	@Autowired
	StudentService studentService;
	
	@Autowired
	AdminService adminService;
	
	@Autowired
	TeacherService teacherService;

	@GetMapping("/student/getSubject/{standard_id}")
	public ResponseEntity<List<Subject>> getSubjectByStandardId(@PathVariable int standard_id) {
		return studentService.getSubjectByStandardId(standard_id);
	}
	
	
	@GetMapping("/student/getTeacher/{standard_id}")
	public ResponseEntity<String> getClassTeacherByStandardId(@PathVariable int standard_id) {
		return studentService.getClassTeacherByStandardId(standard_id);
	}
	
	@GetMapping("/student/getHomework/{standard_id}")
	public ResponseEntity<List<Homework>> getHomeworkByStandardId(@PathVariable int standard_id) {
		return studentService.getHomeworkByStandardId(standard_id);
	}
}
