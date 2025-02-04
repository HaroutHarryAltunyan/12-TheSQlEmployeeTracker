# Employee Tracker

## Description
The Employee Tracker is a command-line application that helps business owners manage their company's departments, roles, and employees. The application uses **Node.js**, **Inquirer**, and **PostgreSQL** to store and retrieve data efficiently.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Database Schema](#database-schema)
- [Demo](#demo)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/employee-tracker.git
   ```
2. Navigate to the project directory:
   ```sh
   cd employee-tracker
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up your database:
   - Open PostgreSQL and create the database:
     ```sql
     CREATE DATABASE employee_db;
     ```
   - Run the schema file to create tables:
     ```sh
     psql -U postgres -d employee_db -f schema.sql
     ```
   - Populate the database with sample data:
     ```sh
     psql -U postgres -d employee_db -f seeds.sql
     ```
5. Configure environment variables:
   - Create a `.env` file in the root directory and add your PostgreSQL credentials:
     ```sh
     DB_USER=your_postgres_username
     DB_PASS=your_postgres_password
     ```

## Usage
1. Start the application:
   ```sh
   node server.js
   ```
2. Follow the prompts to:
   - View departments, roles, and employees.
   - Add new departments, roles, and employees.
   - Update employee roles.

## Features
- View all departments, roles, and employees in a structured format.
- Add new departments, roles, and employees.
- Update employee roles easily.
- Uses PostgreSQL for secure data storage.
- Input validation to prevent incorrect entries.

## Database Schema
The database consists of three main tables:
- **Department**: Stores department information.
- **Role**: Stores job titles, salaries, and department relationships.
- **Employee**: Stores employee details and their assigned roles and managers.

## Demo
A walkthrough video demonstrating the application can be found [here

https://drive.google.com/file/d/1mXF3p-wFiXTdN7WSpK1IOSo5_FKEV41w/view

](#).

## Images of Walk Through 

![images 1.”](./Assets/Screenshot%202025-02-03%20at%204.37.09 PM.png)

![images 2.”](./Assets/Screenshot%202025-02-03%20at%204.37.17 PM.png)

## License
This project is licensed under the [MIT License](LICENSE).

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## Questions
For any questions, reach out to:
- GitHub: [your-username](https://github.com/your-username)
- Email: your-email@example.com

