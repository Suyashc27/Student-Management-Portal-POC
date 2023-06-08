package com.poc.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.ManyToAny;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int student_id;
	
	@NotNull
	private int roll_no;
		
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_id" ,referencedColumnName = "user_id")
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "standard_id",referencedColumnName = "standard_id")
	private Standard standard;

	public int getStudent_id() {
		return student_id;
	}

	public void setStudent_id(int student_id) {
		this.student_id = student_id;
	}

	public int getRoll_no() {
		return roll_no;
	}

	public void setRoll_no(int roll_no) {
		this.roll_no = roll_no;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Standard getStandard() {
		return standard;
	}

	public void setStandard(Standard standard) {
		this.standard = standard;
	}

	@Override
	public String toString() {
		return "Student [student_id=" + student_id + ", roll_no=" + roll_no + ", user=" + user + ", standard="
				+ standard + "]";
	}

	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Student(int student_id, @NotNull int roll_no, User user, Standard standard) {
		super();
		this.student_id = student_id;
		this.roll_no = roll_no;
		this.user = user;
		this.standard = standard;
	}



	
	
	
}
