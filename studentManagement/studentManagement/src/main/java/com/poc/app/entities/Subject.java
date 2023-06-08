package com.poc.app.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Subject {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int subject_id;
	
	private String subject_name;
	
	@ManyToOne
	@JoinColumn(name = "standard_id", referencedColumnName = "standard_id")
	private Standard standard;

	public int getSubject_id() {
		return subject_id;
	}

	public void setSubject_id(int subject_id) {
		this.subject_id = subject_id;
	}

	public String getSubject_name() {
		return subject_name;
	}

	public void setSubject_name(String subject_name) {
		this.subject_name = subject_name;
	}

	public Standard getStandard() {
		return standard;
	}

	public void setStandard(Standard standard) {
		this.standard = standard;
	}

	@Override
	public String toString() {
		return "Subject [subject_id=" + subject_id + ", subject_name=" + subject_name + ", standard=" + standard + "]";
	}

	public Subject(int subject_id, String subject_name, Standard standard) {
		super();
		this.subject_id = subject_id;
		this.subject_name = subject_name;
		this.standard = standard;
	}

	public Subject() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
