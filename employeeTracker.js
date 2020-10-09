var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // username
  user: "root",

  // password
  password: "Fullstack_20",
  database: "employeeTrackerDB",
});

connection.connect(function (err) {
  if (err) throw err;
  start();
});

// first, prompt user to ask what they would like to do
function start() {
  inquirer
    .prompt([
      {
        type: "rawlist",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "Add department",
          "Add role",
          "Add employee",
          "View departments",
          "View roles",
          "View employees",
          "Update employee role",
          "Exit",
        ],
      },
    ])
    .then(function (answer) {
      switch (answer.action) {
        case "Add department":
          addDepartment();
          break;
        case "Add role":
          addRole();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "View departments":
          viewDepartments();
          break;
        case "View roles":
          viewRoles();
          break;
        case "View employees":
          viewEmployees();
          break;
        case "Update employee role":
          updateEmployeeRole();
          break;
        case "Exit":
          exit();
          break;
      }
    });
}

// Function for user to ADD Department to their Database
function addDepartment() {
  inquirer
    .prompt({
      name: "newDepartment",
      type: "input",
      message: "Please enter the name of your new department",
    })
    .then(function (answer) {})

      }
    ])
    .then(answers => {
      // creat query connection to insert in to table
      var query = connection.query(
        "INSERT INTO department SET ?",
        {
          name: answers.newDept
        },
        function (err, res) {
          if (err) throw err;
          console.log(res.affectedRows + " New department inserted!\n");
          
          start();
        }
      );

    })
    .catch(error => {
      if (error.isTtyError) {
        console.log(error);
      } else {
        console.log(error);
      }
    });


}

// Function for user to ADD Role to their Database
function addRole() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "Please enter the title for the role",
      },
      {
        name: "salary",
        type: "input",
        message: "Please enter the salary for the role",
      },
      {
        name: "department_id",
        type: "input",
        message: "Please enter the department id for the role",
      },
    ])

    .then(function (answer) {});
}

// Function for user to ADD an Employee to their Database
function addEmployee() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "Please enter employees First Name",
      },
      {
        name: "last_name",
        type: "input",
        message: "Please enter employees Last Name",
      },
      {
        name: "role_id",
        type: "rawlist",
        message: "Please enter the employees Role ID",
        choices: ["eat", "sleep", "code", "repeat"],
      },

      {
        name: "manager_id",
        type: "input",
        message: "Please enter the Manager Id Number",
      },
    ])
    .then(function (answer) {});
}

// need to put error & console.log here

// DONE: Function to view Departments
function viewDepartments() {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;

    console.table(res);
    start();
  });
}

// view Employees ,Roles & Dept's

function view() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "viewAction",
        message: "What would you like to view?",
        choices: [
          "Employees",
          "Roles",
          "Departments",
          "Total total utilized budget",
          "View all"
        ]

      }
    ])
    .then(answers => {
      switch (answers.viewAction) {
        case "Employees":
          viewEmployees();
          break;
        case "Roles":
          viewRoles();
          break;
        case "Departments":
          viewDepartments();
          break;
          case "Total total utilized budget":
          viewBudget();
          break;
        default:
          exit();

      }
    })
    .catch(error => {
      if (error.isTtyError) {
        console.log(error);
      } else {
        console.log(error);
      }
    });

}
// function to veiw employees
function viewEmployees() {
  connection.query("SELECT employee.first_name, employee.last_name, employee.id, role.title, role.salary, role.department_id FROM employee INNER JOIN role on employee.role_id = role.department_id;", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    start();

  });

}
// if user wants to view what roles
function viewRoles() {
  connection.query("SELECT * FROM role", function (err, res) {
    //if (err) throw err;

    console.table(res);
    start()

  });

}

function viewDepartments() {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;

    console.table(res);
    start();
  });

}

//Function to update Employees & Roles
function update() {

connection.query("SELECT first_name FROM employee", function (err, res) {
     if (err) throw err;

       inquirer
       .prompt([
        {
        type: "list",
        name: "employee",
        message: "Select which employee to update", */
