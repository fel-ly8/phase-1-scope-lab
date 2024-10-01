// 1. Declare customerName to be "bob" in global scope
var customerName = "bob";

// Function to return the customerName
function getCustomerName() {
    return customerName;
}

// 2. Function to upper-case the customerName and modify it
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();  // Modifies the global variable
}

// 3. Function to set the best customer
var bestCustomer;  // Declare variable in global scope

function setBestCustomer() {
    bestCustomer = 'not bob';  // Assigns value to the global variable bestCustomer
}

// 4. Function to overwrite the best customer
function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;  // Overwrites the global variable bestCustomer
}

// 5. Trying to change the least favorite customer (unsuccessfully)
const leastFavoriteCustomer = "someone else";  // Declared as a constant

function changeLeastFavoriteCustomer() {
    try {
        leastFavoriteCustomer = "new customer";  // This will throw an error because constants cannot be reassigned
    } catch (error) {
        console.error("Error: Cannot reassign least favorite customer");
    }
}


function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Jane Smith'; // This should throw an error
}



// Example usage:
console.log("Customer Name:", getCustomerName());  // Output: "bob

