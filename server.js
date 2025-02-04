const inquirer = require("inquirer");
const pool = require("./connection");

async function mainMenu() {
    const { action } = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
                "Exit"
            ]
        }
    ]);

    switch (action) {
        case "View all departments":
            return viewDepartments();
        case "View all roles":
            return viewRoles();
        case "View all employees":
            return viewEmployees();
        case "Add a department":
            return addDepartment();
        case "Add a role":
            return addRole();
        case "Add an employee":
            return addEmployee();
        case "Update an employee role":
            return updateEmployeeRole();
        case "Exit":
            return process.exit();
    }
}

async function viewDepartments() {
    try {
        const { rows } = await pool.query("SELECT * FROM department");
        console.table(rows);
    } catch (err) {
        console.error(err);
    }
    mainMenu();
}

async function viewRoles() {
    try {
        const { rows } = await pool.query(`
            SELECT role.id, role.title, department.name AS department, role.salary 
            FROM role 
            JOIN department ON role.department_id = department.id
        `);
        console.table(rows);
    } catch (err) {
        console.error(err);
    }
    mainMenu();
}

async function viewEmployees() {
    try {
        const { rows } = await pool.query(`
            SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, 
                COALESCE(m.first_name || ' ' || m.last_name, 'None') AS manager 
            FROM employee e
            JOIN role ON e.role_id = role.id
            JOIN department ON role.department_id = department.id
            LEFT JOIN employee m ON e.manager_id = m.id
        `);
        console.table(rows);
    } catch (err) {
        console.error(err);
    }
    mainMenu();
}

async function addDepartment() {
    const { name } = await inquirer.prompt([
        { type: "input", name: "name", message: "Enter department name:" }
    ]);

    try {
        await pool.query("INSERT INTO department (name) VALUES ($1)", [name]);
        console.log("Department added!");
    } catch (err) {
        console.error(err);
    }
    mainMenu();
}

async function addRole() {
    const { title, salary, department_id } = await inquirer.prompt([
        { type: "input", name: "title", message: "Enter role title:" },
        { type: "input", name: "salary", message: "Enter role salary:" },
        { type: "input", name: "department_id", message: "Enter department ID:" }
    ]);

    try {
        await pool.query("INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)", [title, salary, department_id]);
        console.log("Role added!");
    } catch (err) {
        console.error(err);
    }
    mainMenu();
}

async function addEmployee() {
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
        { type: "input", name: "first_name", message: "Enter first name:" },
        { type: "input", name: "last_name", message: "Enter last name:" },
        { type: "input", name: "role_id", message: "Enter role ID:" },
        { type: "input", name: "manager_id", message: "Enter manager ID (or press Enter for none):" }
    ]);

    try {
        await pool.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)", 
        [first_name, last_name, role_id, manager_id || null]);
        console.log("Employee added!");
    } catch (err) {
        console.error(err);
    }
    mainMenu();
}

async function updateEmployeeRole() {
    const { employee_id, new_role_id } = await inquirer.prompt([
        { type: "input", name: "employee_id", message: "Enter employee ID:" },
        { type: "input", name: "new_role_id", message: "Enter new role ID:" }
    ]);

    try {
        await pool.query("UPDATE employee SET role_id = $1 WHERE id = $2", [new_role_id, employee_id]);
        console.log("Employee role updated!");
    } catch (err) {
        console.error(err);
    }
    mainMenu();
}

mainMenu();