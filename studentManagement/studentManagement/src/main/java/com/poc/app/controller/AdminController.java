package com.poc.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.poc.app.entities.Homework;
import com.poc.app.entities.Student;
import com.poc.app.entities.Subject;
import com.poc.app.entities.Teacher;
import com.poc.app.entities.User;
import com.poc.app.service.AdminService;
import com.poc.app.service.StudentService;
import com.poc.app.service.TeacherService;

@RestController
@org.springframework.transaction.annotation.Transactional
@RequestMapping("/admin")
@CrossOrigin
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

	@Autowired
	AdminService adminService;

	@Autowired
	TeacherService teacherService;

	@Autowired
	StudentService studentService;

	@PostMapping("/addstudent")
	public ResponseEntity<String> saveStudent( @Valid @RequestBody Student student) {
		return adminService.saveStudent(student);
	}
	
	 @PreAuthorize("permitAll()") 
	@GetMapping("/getstudent")
	public ResponseEntity<List<Student>> getStudent() {
		return adminService.getStudent();
	}
	 @PreAuthorize("permitAll()")  
	@GetMapping("/getstudent/{student_id}")
	public ResponseEntity<Object> getStudentById(@PathVariable int student_id) {
		return adminService.getStudentById(student_id);
		
	}
	 
	@PutMapping("/updatestudent/{student_id}")
	public Student updateStudent(@Valid @RequestBody Student student, @PathVariable int student_id) {
		return adminService.updateStudent(student,student_id);
	}
	
	
	@DeleteMapping("/deletestudent/{student_id}")
    public void deleteStudent(@PathVariable int student_id) {
        adminService.deleteStudent(student_id);
    }
	//------------------------------------------------------------
	
	@PostMapping("/addteacher")
	public ResponseEntity<String> saveTeacher(@Valid @RequestBody Teacher teacher) {
		return adminService.saveTeacher(teacher);
	}
	
	@GetMapping("/getteacher")
	public ResponseEntity<List<Teacher>> getTeacher() {
		return adminService.getTeacher();
	}
	
	
	 
	@PutMapping("/updateteacher/{teacher_id}")
	public void updateTeacher(@Valid @RequestBody Teacher teacher, @PathVariable int teacher_id) {
		 adminService.updateTeacher(teacher, teacher_id);
	}
	 @PreAuthorize("permitAll()")  
	@GetMapping("/getteacher/{teacher_id}")
	public ResponseEntity<Object> getTeacherById(@PathVariable int teacher_id) {
		return adminService.getTeacherById(teacher_id);
		
	}
	 
	 @DeleteMapping("/deleteteacher/{teacher_id}")
	    public void deleteTeacher(@PathVariable int teacher_id) {
	        adminService.deleteTeacher(teacher_id);
			}
	
	//-------------------------------------------------------------
//	 @DeleteMapping("/deleteuser/{user_id}")
//	public void deleteStudent(@PathVariable int user_id) {
//		adminService.deleteStudent(user_id);
//	}
	 
	 
	
	@PostMapping("/addsubject")
	public Subject saveSubject(@RequestBody Subject subject) {
		return adminService.saveSubject(subject);
	}
	
	@DeleteMapping("/deletesubject/{subject_id}")
	public void deleteSubject(@PathVariable int subject_id) {
		 adminService.deleteSubject(subject_id);
	}
	//========================================================
	
}
