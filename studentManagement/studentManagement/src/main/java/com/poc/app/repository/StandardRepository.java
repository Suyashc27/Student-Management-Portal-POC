package com.poc.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.poc.app.entities.Standard;

@Repository
public interface StandardRepository extends JpaRepository<Standard, Integer>{

}
