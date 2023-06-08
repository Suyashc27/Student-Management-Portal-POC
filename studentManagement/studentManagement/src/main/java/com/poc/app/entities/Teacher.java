package com.poc.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotEmpty;

@Entity
public class Teacher {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int teacher_id;
	
	@NotEmpty
	private String qualification;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_id" ,referencedColumnName = "user_id")
	private User user;
	
	@OneToOne
	@JoinColumn(name = "standard_id",referencedColumnName = "standard_id")
	private Standard standard;

	public int getTeacher_id() {
		return teacher_id;
	}

	public void setTeacher_id(int teacher_id) {
		this.teacher_id = teacher_id;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
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
		return "Teacher [teacher_id=" + teacher_id + ", qualification=" + qualification + ", user=" + user
				+ ", standard=" + standard + "]";
	}

	public Teacher(int teacher_id, String qualification, User user, Standard standard) {
		super();
		this.teacher_id = teacher_id;
		this.qualification = qualification;
		this.user = user;
		this.standard = standard;
	}

	public Teacher() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	
	
	
}
