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
import com.poc.app.repository.SubjectRepository;
import com.poc.app.repository.TeacherRepository;
import com.poc.app.repository.UserRepository;
import com.poc.app.service.AdminService;
import com.poc.app.service.SubjectService;
import com.poc.app.service.TeacherService;
@CrossOrigin
@RestController
@PreAuthorize("hasRole('TEACHER')")
public class TeacherController {
	@Autowired
	TeacherService teacherService;
	
	@Autowired
	AdminService adminService;
	
	@Autowired
	SubjectService subjectService;
	
//	@GetMapping("/teacher/getSubject")
//	public ResponseEntity<List<Subject>> getSubject() {
//		return teacherService.getSubject();
//	}
//	
//	@GetMapping("/teacher/getStudent")
//	public ResponseEntity<Object> getStudent() {
//		return teacherService.getStudent();
//	}
	
	
	//myprofile details

	@GetMapping("/teacher/getStudent/{standard_id}")
	public ResponseEntity<List<Student>> getStudentByStandardId(@PathVariable int standard_id) {
		return teacherService.getStudentByStandardId(standard_id);
	}
	
//	@PostMapping("/teacher/saveHomework/{standard_id}/{homeworkAssignment}")
//	public ResponseEntity<String> saveHomework(@PathVariable int standard_id, String homeworkAssignment){
//		return teacherService.saveHomework(standard_id,homeworkAssignment);
//	}
	
	@PostMapping("/teacher/saveHomework/{standard_id}")
	public ResponseEntity<Homework> saveHomework(@PathVariable int standard_id, @RequestBody Homework homework){
		return teacherService.saveHomework(standard_id,homework);
	}

}
