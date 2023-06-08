package com.poc.app.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.poc.app.entities.User;
import com.poc.app.exceptions.ResourceNotFoundException;
import com.poc.app.repository.UserRepository;


@Service
public class CustomUserDetailService implements UserDetailsService{



   @Autowired
    private UserRepository userRepository;
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    	
    	User user = this.userRepository.findByUsername(username).orElseThrow(()-> new ResourceNotFoundException("User","username:"+username, 0));
    	return user;
       

        
    }

}

//.orElseThrow(()-> new ResourceNotFoundException("User", "email :"+username,0));