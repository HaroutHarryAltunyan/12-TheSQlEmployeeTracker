INSERT INTO department (name) VALUES 
('HR'),
('Engineering'),
('Sales');

INSERT INTO role (title, salary, department_id) VALUES 
('Manager', 80000, 1),
('Software Engineer', 100000, 2),
('Sales Associate', 60000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('Alice', 'Johnson', 1, NULL),
('Bob', 'Smith', 2, 1),
('Charlie', 'Brown', 3, 1);