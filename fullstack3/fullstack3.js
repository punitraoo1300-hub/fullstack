const prompt = require("prompt-sync")();

// Array to store employees
let employees = [];

// Function to add employee
function addEmployee() {
    const id = prompt("Enter Employee ID: ");
    const name = prompt("Enter Employee Name: ");
    const role = prompt("Enter Employee Role: ");

    employees.push({ id, name, role });
    console.log("✅ Employee Added Successfully!\n");
}

// Function to view employees
function viewEmployees() {
    if (employees.length === 0) {
        console.log("⚠️ No employees found.\n");
        return;
    }

    console.log("\n📋 Employee List:");
    employees.forEach((emp, index) => {
        console.log(`${index + 1}. ID: ${emp.id}, Name: ${emp.name}, Role: ${emp.role}`);
    });
    console.log();
}

// Function to search employee
function searchEmployee() {
    const searchId = prompt("Enter Employee ID to search: ");
    const emp = employees.find(e => e.id === searchId);

    if (emp) {
        console.log(`🔍 Found: ID: ${emp.id}, Name: ${emp.name}, Role: ${emp.role}\n`);
    } else {
        console.log("❌ Employee not found.\n");
    }
}

// Function to delete employee
function deleteEmployee() {
    const deleteId = prompt("Enter Employee ID to delete: ");
    const index = employees.findIndex(e => e.id === deleteId);

    if (index !== -1) {
        employees.splice(index, 1);
        console.log("🗑️ Employee deleted successfully.\n");
    } else {
        console.log("❌ Employee not found.\n");
    }
}

// Main menu
function menu() {
    while (true) {
        console.log("===== Employee Management System =====");
        console.log("1. Add Employee");
        console.log("2. View Employees");
        console.log("3. Search Employee");
        console.log("4. Delete Employee");
        console.log("5. Exit");

        const choice = prompt("Enter your choice: ");

        switch (choice) {
            case "1":
                addEmployee();
                break;
            case "2":
                viewEmployees();
                break;
            case "3":
                searchEmployee();
                break;
            case "4":
                deleteEmployee();
                break;
            case "5":
                console.log("👋 Exiting...");
                return;
            default:
                console.log("❌ Invalid choice.\n");
        }
    }
}

// Run the app
menu();