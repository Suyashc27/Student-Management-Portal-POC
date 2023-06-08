package com.poc.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.poc.app.entities.Roles;
import com.poc.app.entities.Standard;
import com.poc.app.entities.Student;
import com.poc.app.entities.Subject;
import com.poc.app.entities.Teacher;
import com.poc.app.entities.User;
import com.poc.app.repository.HomeworkRepository;
import com.poc.app.repository.RolesRepository;
//import com.poc.app.repository.StandardRepository;
import com.poc.app.repository.StudentRepository;
import com.poc.app.repository.SubjectRepository;
import com.poc.app.repository.TeacherRepository;
import com.poc.app.repository.UserRepository;

@Service
public class AdminService {
	@Autowired
	UserRepository userRepository;

	@Autowired
	StudentRepository studentRepository;

	@Autowired
	TeacherRepository teacherRepository;

	@Autowired
	SubjectRepository subjectRepository;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	RolesRepository rolesRepository;
	

	public ResponseEntity<String> saveStudent(Student student) {
		User user = student.getUser();
		String email = user.getEmail();
		String password = user.getPassword();
		String username = user.getUsername();
		if (userRepository.existsByEmail(email) || userRepository.existsByUsername(username)) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Student already exists");
		} else {

			user.setPassword(passwordEncoder.encode(password));

			Roles role = this.rolesRepository.findById(2).get();
			user.getRoles().add(role);
			user.setRole_type("STUDENT");
			user.setActive(true);
			userRepository.save(user);
			studentRepository.save(student);
			return ResponseEntity.status(HttpStatus.CREATED).body("Student record saved");
		}
	}

	public ResponseEntity<List<Student>> getStudent() {
		
		
		List<Student> studentList = studentRepository.findAll();
		List<Student> finalList=new ArrayList<Student>();
		
		for(Student s:studentList) {
			if(s.getUser().isActive())
			{
				finalList.add(s);
			}
		}
		if (studentList.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		
		
			return ResponseEntity.of(Optional.of(finalList));
		
	}

	public void deleteStudent(int student_id) {
        Student student = studentRepository.findById(student_id).get();
        User user =  student.getUser();
        //User user = userRepository.findById(user_id).get();
        user.setActive(false);
        
        userRepository.save(user);
    }

	public Student updateStudent(Student student, int student_id) {
		
		if (studentRepository.existsById(student_id)) {
			User user = student.getUser();

			Student updatedStudent = studentRepository.findById(student_id).get();
			int user_id = updatedStudent.getUser().getUser_id();

			student.setStudent_id(student_id);
			student.getUser().setUser_id(user_id);
			user.setRole_type("STUDENT");
			user.setActive(true);
			
			Roles role = this.rolesRepository.findById(2).get();
			user.getRoles().add(role);
			return studentRepository.save(student);

		} else {
			System.out.println("Data Not Found");
		}
		return null;
	}

//	public Student getStudentById(int student_id) {
//		return studentRepository.findById(student_id).get();
//	}

	public ResponseEntity<Object> getStudentById(int student_id) {
		// StudentInfo student = studentInfoRepo.findById(id).get();
		if (studentRepository.existsById(student_id)) {
			Student student = studentRepository.findById(student_id).get();
			if(student.getUser().isActive()) {
				return ResponseEntity.status(HttpStatus.OK).body(student);
			}
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("STUDENT  with id " + student_id + " DOES NOT EXIST");
	}

	// ----------------------------------------------------------------------
	public ResponseEntity<String> saveTeacher(Teacher teacher) {
		User user = teacher.getUser();
//		Standard standard = teacher.getStandard();
		String email = user.getEmail();
		String password = user.getPassword();
		
		String username = user.getUsername();
		if (userRepository.existsByEmail(email) || userRepository.existsByUsername(username)) {
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Teacher already exists");
		} else {

			user.setActive(true);
			user.setPassword(passwordEncoder.encode(password));
			user.setRole_type("TEACHER");
			Roles role = this.rolesRepository.findById(3).get();
			user.getRoles().add(role);
			userRepository.save(user);
//			standardRepository.save(standard);
			teacherRepository.save(teacher);
			return ResponseEntity.status(HttpStatus.OK).body("Teacher record saved");
		}
	}

//	public List<Teacher> getTeacher() {
//		return teacherRepository.findAll();
//	}

	public ResponseEntity<List<Teacher>> getTeacher() {
		List<Teacher> teacherList = teacherRepository.findAll();
		List<Teacher> finalList=new ArrayList<>();
		for(Teacher t:teacherList) {
			if(t.getUser().isActive()) {
				finalList.add(t);
			}
		}
		if (teacherList.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.of(Optional.of(finalList));
	}

	 public void deleteTeacher(int teacher_id) {
	        Teacher teacher = teacherRepository.findById(teacher_id).get();
	        User user =  teacher.getUser();
	        //User user = userRepository.findById(user_id).get();
	        user.setActive(false);
	        
	        userRepository.save(user);
	    }
	
	
	public Teacher updateTeacher(Teacher teacher, int teacher_id) {
		
		if(teacherRepository.existsById(teacher_id)) {
			
			User user = teacher.getUser();
            
            Teacher existingTeacher = teacherRepository.findById(teacher_id).get();
            int user_id = existingTeacher.getUser().getUser_id();
            
            teacher.setTeacher_id(teacher_id);
            teacher.getUser().setUser_id(user_id);
            teacher.getUser().setActive(true);
            user.setRole_type("TEACHER");
            user.setActive(true);
            
            Roles role = this.rolesRepository.findById(3).get();
			user.getRoles().add(role);
            
            System.out.println(teacher);
            teacherRepository.save(teacher);
            
        }
        else {
            System.out.println("Data not Found");
        }
        return null;
	}

//	public Teacher getTeacherById(int teacher_id) {
//		return teacherRepository.findById(teacher_id).get();
//	}

	public ResponseEntity<Object> getTeacherById(int teacher_id) {
		
		if (teacherRepository.existsById(teacher_id)) {
			Teacher teacher = teacherRepository.findById(teacher_id).get();
			if(teacher.getUser().isActive()) {
			return ResponseEntity.status(HttpStatus.OK).body(teacher);
			}
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("TEACHER  with id " + teacher_id + " DOES NOT EXIST");
	}

	public Subject saveSubject(Subject subject) {
		return subjectRepository.save(subject);
	}

	public void deleteSubject(int subject_id) {
		subjectRepository.deleteById(subject_id);
	}

}
