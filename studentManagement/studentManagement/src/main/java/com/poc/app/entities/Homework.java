package com.poc.app.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Homework {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int homework_id;
	
	private String assignment;
	
	private String homeworkdate;
	
	@ManyToOne
	@JoinColumn(name = "standard_id",referencedColumnName = "standard_id")
	private Standard standard;

	public int getHomework_id() {
		return homework_id;
	}

	public void setHomework_id(int homework_id) {
		this.homework_id = homework_id;
	}

	public String getAssignment() {
		return assignment;
	}

	public void setAssignment(String assignment) {
		this.assignment = assignment;
	}

	public String getHomeworkdate() {
		return homeworkdate;
	}

	public void setHomeworkdate(String homeworkdate) {
		this.homeworkdate = homeworkdate;
	}

	public Standard getStandard() {
		return standard;
	}

	public void setStandard(Standard standard) {
		this.standard = standard;
	}

	@Override
	public String toString() {
		return "Homework [homework_id=" + homework_id + ", assignment=" + assignment + ", homeworkdate=" + homeworkdate
				+ ", standard=" + standard + "]";
	}

	public Homework(int homework_id, String assignment, String homeworkdate, Standard standard) {
		super();
		this.homework_id = homework_id;
		this.assignment = assignment;
		this.homeworkdate = homeworkdate;
		this.standard = standard;
	}

	public Homework() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	
}
