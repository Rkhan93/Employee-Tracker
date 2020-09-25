USE employeeTrackerDB;

INSERT INTO department (name)
VALUES ("Accounting"),
("Engineering"), 
("Legal"), 
("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Accountant", 100000.00, 1),
("Accountant", 80000.00, 1),
("Accountant Intern", 50000.00, 1),
("Lead QA Engineer", 150000.00, 2), 
("QA Engineer", 100000.00, 2),
("Lead Software Engineer", 175000.00, 2),
("Software Engineer", 150000.00, 2),
("Lawyer", 250000.00, 3),
("Secretary", 60000.00, 3),
("Sales Lead", 100000.00, 4),
("Sales Person", 60000.00, 4),
("Sales Intern", 12000.00, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Billy", "Joel", 1, null),
("Michael", "Jackson", 8, null);

-- This will update Billy Joel's manager to be Michael Jackson because Billy Joel's id is 1 and Michael Jackson's id is 2.
-- UPDATE employee SET manager_id = 2 WHERE id = 1;

-- UPDATE employee SET role_id = 9 WHERE id = 2;