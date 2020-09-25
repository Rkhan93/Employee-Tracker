DROP DATABASE IF EXISTS employeeTrackerDB;

CREATE database employeeTrackerDB;

USE employeeTrackerDB;

CREATE TABLE department (
  id INTEGER NOT NULL auto_increment,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INTEGER NOT NULL auto_increment,
  title VARCHAR(30), 
  salary DECIMAL,
  department_id INTEGER NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INTEGER NOT NULL auto_increment,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INTEGER NULL,
  manager_id INTEGER NULL,
  PRIMARY KEY (id)
 
);
