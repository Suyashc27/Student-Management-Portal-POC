package com.poc.app.controller;

import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.poc.app.entities.JwtAuthRequest;
import com.poc.app.entities.JwtAuthResponse;
import com.poc.app.entities.Roles;
import com.poc.app.entities.Student;
import com.poc.app.entities.Teacher;
import com.poc.app.entities.User;
import com.poc.app.exceptions.ApiException;
import com.poc.app.repository.UserRepository;
import com.poc.app.security.CustomUserDetailService;
import com.poc.app.security.JwtTokenHelper;

@RestController
@RequestMapping("/api/v1/auth/")
@CrossOrigin
public class AuthController {

	@Autowired
	private JwtTokenHelper jwtTokenHelper;
	
	@Autowired
	private CustomUserDetailService userDetailsService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/login")
	public ResponseEntity<JwtAuthResponse> createToken(
			@RequestBody JwtAuthRequest request) throws Exception
	{
		System.out.println("request"+request);
		this.authenticate(request.getUsername(),request.getPassword());
		
		UserDetails userDetails = this.userDetailsService.loadUserByUsername(request.getUsername());
		String token = this.jwtTokenHelper.generateToken(userDetails);
		
	    String username = this.jwtTokenHelper.getUsernameFromToken(token);
	    
	    User user = userRepository.findByUsername(username).get();
	    Student student = user.getStudent();
	    
	    Teacher teacher = user.getTeacher();
	    
	    System.out.println(user.getFirst_name());
	    
//	    String password = userDetails.getPassword();
	   	    
	    System.out.println(userDetails.getUsername());
		
	    JwtAuthResponse response = new JwtAuthResponse();
		response.setToken(token);
		response.setUsername(username);
//		response.setPassword(password);
		response.setUser(user);
		response.setStudent(student);
		response.setTeacher(teacher);
		
		Set<Roles> roleSet = user.getRoles();
	    
// need to be checked	
		
	    for (Roles roles : roleSet) {
			System.out.println(roles.getName());
			response.setRole(roles.getName());
					}
		
		
		return new ResponseEntity<JwtAuthResponse>(response,HttpStatus.OK);
	}
	
	private void authenticate(String username, String password) throws Exception {
		
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
	    
		try {
			this.authenticationManager.authenticate(authenticationToken);
		} catch (BadCredentialsException e) {
			System.out.println("Invalid Details");
			throw new Exception("Invalid username or password");
		}
	   
	  
	}
}
