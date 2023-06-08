package com.poc.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.poc.app.entities.Roles;
import com.poc.app.entities.Standard;
import com.poc.app.entities.User;
import com.poc.app.repository.RolesRepository;
import com.poc.app.repository.StandardRepository;
import com.poc.app.repository.StudentRepository;
import com.poc.app.repository.UserRepository;

@SpringBootApplication
public class StudentManagementApplication implements CommandLineRunner {

	@Autowired
	StandardRepository standardRepository;

	@Autowired
	StudentRepository studentRepository;

	@Autowired
	RolesRepository rolesRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(StudentManagementApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		if (userRepository.count() == 0 && standardRepository.count() == 0 && rolesRepository.count() == 0) {
			Standard standard = new Standard();
			standard.setStandard_id(1);
			standard.setStudentCapacity(10);
			standardRepository.save(standard);

			Standard standard1 = new Standard();
			standard1.setStandard_id(2);
			standard1.setStudentCapacity(20);
			standardRepository.save(standard1);

			Standard standard3 = new Standard();
			standard3.setStandard_id(3);
			standard3.setStudentCapacity(30);
			standardRepository.save(standard3);

			Standard standard4 = new Standard();
			standard4.setStandard_id(4);
			standard4.setStudentCapacity(40);
			standardRepository.save(standard4);

			Standard standard5 = new Standard();
			standard5.setStandard_id(5);
			standard5.setStudentCapacity(50);
			standardRepository.save(standard5);

			Standard standard6 = new Standard();
			standard6.setStandard_id(6);
			standard6.setStudentCapacity(60);
			standardRepository.save(standard6);

			Standard standard7 = new Standard();
			standard7.setStandard_id(7);
			standard7.setStudentCapacity(70);
			standardRepository.save(standard7);

			Standard standard8 = new Standard();
			standard8.setStandard_id(8);
			standard8.setStudentCapacity(80);
			standardRepository.save(standard8);

			Standard standard9 = new Standard();
			standard9.setStandard_id(9);
			standard9.setStudentCapacity(90);
			standardRepository.save(standard9);

			Standard standard10 = new Standard();
			standard10.setStandard_id(10);
			standard10.setStudentCapacity(100);
			standardRepository.save(standard10);

			System.out.println(this.passwordEncoder.encode("yash@123"));

			User user = new User();
			user.setFirst_name("Suyash");
			user.setLast_name("Choudhari");
			user.setDob("27/03/2000");
			user.setContact("9545530693");
			user.setGender("Male");
			user.setPassword(this.passwordEncoder.encode("admin"));
			user.setRole_type("ADMIN");
			user.setEmail("suyashc27@gmail.com");
			user.setUsername("admin@123");
			user.setActive(true);

			Roles role1 = new Roles("ROLE_ADMIN");

			Roles role2 = new Roles("ROLE_STUDENT");

			Roles role3 = new Roles("ROLE_TEACHER");

			rolesRepository.save(role1);
			rolesRepository.save(role2);
			rolesRepository.save(role3);

			Roles role = this.rolesRepository.findById(1).get();
			user.getRoles().add(role);
			userRepository.save(user);

			System.out.println(user.getUsername());
			System.out.println("Created Deafult");

		} else {
			System.out.println("Default Already created");
		}
	}

}
