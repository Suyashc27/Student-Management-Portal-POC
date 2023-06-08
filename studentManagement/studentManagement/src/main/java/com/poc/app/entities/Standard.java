package com.poc.app.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Standard {
	
	@Id
	private int standard_id;
	
	private int studentCapacity;
	
	@JsonIgnore
	@OneToOne(mappedBy = "standard",cascade= CascadeType.ALL)
	private Teacher teacher;
	
	@JsonIgnore
	@OneToMany(mappedBy = "standard",cascade= CascadeType.ALL)
	private List<Homework> homework;
	
	@JsonIgnore
	@OneToMany(mappedBy = "standard",cascade= CascadeType.ALL)
	private List<Student> student;
	
	@JsonIgnore
	@OneToMany(mappedBy = "standard",cascade= CascadeType.ALL)
	private List<Subject> subjects;

	public int getStandard_id() {
		return standard_id;
	}

	public void setStandard_id(int standard_id) {
		this.standard_id = standard_id;
	}

	public int getStudentCapacity() {
		return studentCapacity;
	}

	public void setStudentCapacity(int studentCapacity) {
		this.studentCapacity = studentCapacity;
	}

	public Teacher getTeacher() {
		return teacher;
	}

	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}

	public List<Homework> getHomework() {
		return homework;
	}

	public void setHomework(List<Homework> homework) {
		this.homework = homework;
	}

	public List<Student> getStudent() {
		return student;
	}

	public void setStudent(List<Student> student) {
		this.student = student;
	}

	public List<Subject> getSubjects() {
		return subjects;
	}

	public void setSubjects(List<Subject> subjects) {
		this.subjects = subjects;
	}

	@Override
	public String toString() {
		return "Standard [standard_id=" + standard_id + ", studentCapacity=" + studentCapacity + ", teacher=" + teacher
				+ ", homework=" + homework + ", student=" + student + ", subjects=" + subjects + "]";
	}

	public Standard(int standard_id, int studentCapacity, Teacher teacher, List<Homework> homework,
			List<Student> student, List<Subject> subjects) {
		super();
		this.standard_id = standard_id;
		this.studentCapacity = studentCapacity;
		this.teacher = teacher;
		this.homework = homework;
		this.student = student;
		this.subjects = subjects;
	}

	public Standard() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	
	
	

}
