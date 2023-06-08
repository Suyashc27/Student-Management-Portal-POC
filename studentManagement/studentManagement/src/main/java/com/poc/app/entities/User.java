package com.poc.app.entities;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User implements UserDetails{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int user_id;
	
	@NotNull @NotEmpty
	private String username;
	
	private String role_type;
	
	private String first_name;
	
	private String last_name;
	
	private String contact;
	
	@Email(message = "Email is not in the valid format")
	private String email;
	
	private String dob;
	
	private String gender;
	
	@NotEmpty(message="Password cannot be empty")
	@Size(min=6,message = "Password should be minimum of 6 characters")
	private String password;
	
	private boolean isActive;
	
	@JsonIgnore
	@OneToOne(mappedBy = "user", cascade= CascadeType.ALL)
	private Student student;
	
	@JsonIgnore
	@OneToOne(mappedBy = "user", cascade= CascadeType.ALL)
	private Teacher teacher;
	
	
	@ManyToMany(cascade = CascadeType.MERGE,fetch= FetchType.EAGER)
	@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user", referencedColumnName = "user_id"), inverseJoinColumns = @JoinColumn(name = "role", referencedColumnName = "id"))
	private Set<Roles> roles = new HashSet<>();

	
	public Collection<? extends GrantedAuthority> getAuthorities() {
	List<SimpleGrantedAuthority> authories=this.roles.stream().map((role)-> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
		return authories;
	}

	
	
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}




	public User(int user_id, @NotNull @NotEmpty String username, String role_type, String first_name, String last_name,
			String contact, @Email(message = "Email is not in the valid format") String email, String dob,
			String gender,
			@NotEmpty(message = "Password cannot be empty") @Size(min = 6, message = "Password should be minimum of 6 characters") String password,
			boolean isActive, Student student, Teacher teacher, Set<Roles> roles) {
		super();
		this.user_id = user_id;
		this.username = username;
		this.role_type = role_type;
		this.first_name = first_name;
		this.last_name = last_name;
		this.contact = contact;
		this.email = email;
		this.dob = dob;
		this.gender = gender;
		this.password = password;
		this.isActive = isActive;
		this.student = student;
		this.teacher = teacher;
		this.roles = roles;
	}




	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", username=" + username + ", role_type=" + role_type + ", first_name="
				+ first_name + ", last_name=" + last_name + ", contact=" + contact + ", email=" + email + ", dob=" + dob
				+ ", gender=" + gender + ", password=" + password + ", isActive=" + isActive + ", student=" + student
				+ ", teacher=" + teacher + ", roles=" + roles + "]";
	}




	public int getUser_id() {
		return user_id;
	}




	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}




	public String getRole_type() {
		return role_type;
	}




	public void setRole_type(String role_type) {
		this.role_type = role_type;
	}




	public String getFirst_name() {
		return first_name;
	}




	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}




	public String getLast_name() {
		return last_name;
	}




	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}




	public String getContact() {
		return contact;
	}




	public void setContact(String contact) {
		this.contact = contact;
	}




	public String getEmail() {
		return email;
	}




	public void setEmail(String email) {
		this.email = email;
	}




	public String getDob() {
		return dob;
	}




	public void setDob(String dob) {
		this.dob = dob;
	}




	public String getGender() {
		return gender;
	}




	public void setGender(String gender) {
		this.gender = gender;
	}




	public boolean isActive() {
		return isActive;
	}




	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}




	public Student getStudent() {
		return student;
	}




	public void setStudent(Student student) {
		this.student = student;
	}




	public Teacher getTeacher() {
		return teacher;
	}




	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}




	public Set<Roles> getRoles() {
		return roles;
	}




	public void setRoles(Set<Roles> roles) {
		this.roles = roles;
	}




	public void setUsername(String username) {
		this.username = username;
	}




	public void setPassword(String password) {
		this.password = password;
	}


	@Override
	public String getPassword() {
		return this.password;
	}


	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return this.username;
	}


	@Override
	public boolean isAccountNonExpired() {
		
		return true;
	}


	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}


	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}


	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}


	



}
