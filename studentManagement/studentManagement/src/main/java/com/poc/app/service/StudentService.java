package com.poc.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.poc.app.entities.Homework;
import com.poc.app.entities.Standard;
import com.poc.app.entities.Student;
import com.poc.app.entities.Subject;
import com.poc.app.entities.Teacher;
import com.poc.app.repository.StandardRepository;
import com.poc.app.repository.StudentRepository;
import com.poc.app.repository.SubjectRepository;
import com.poc.app.repository.TeacherRepository;
import com.poc.app.repository.UserRepository;

@Service
public class StudentService {

	@Autowired
	UserRepository userRepository;

	@Autowired
	StudentRepository studentRepository;

	@Autowired
	TeacherRepository teacherRepository;

	@Autowired
	SubjectRepository subjectRepository;
	@Autowired
	StandardRepository standardRepository;

	public ResponseEntity<List<Subject>> getSubjectByStandardId(int standard_id) {

		Standard standard = standardRepository.findById(standard_id).orElse(null);

		return ResponseEntity.status(HttpStatus.OK).body(standard.getSubjects());

	}

	public ResponseEntity<String> getClassTeacherByStandardId(int standard_id) {

		Standard standard = standardRepository.findById(standard_id).orElse(null);

		if (standard.getTeacher().getUser().isActive()) {
			String first_name = standard.getTeacher().getUser().getFirst_name();
			String last_name = standard.getTeacher().getUser().getLast_name();
			return ResponseEntity.status(HttpStatus.OK).body(first_name + " " + last_name);
		}

		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Class Teacher does not exist");
	}

	public ResponseEntity<List<Homework>> getHomeworkByStandardId(int standard_id) {

		Standard standard = standardRepository.findById(standard_id).orElse(null);
		return ResponseEntity.status(HttpStatus.OK).body(standard.getHomework());

	}

}
