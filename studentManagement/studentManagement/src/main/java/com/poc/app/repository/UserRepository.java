package com.poc.app.repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.poc.app.entities.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

  
   Optional<User> findByUsername(String username);

   	boolean existsByEmail(String email);

   	boolean existsByUsername(String username);
   	
   	boolean existsByisActive(Boolean isActive);


}
