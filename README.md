
# Front-End Web Development - Customer Contact Form

## Overview

This project is a simple customer contact form built using HTML, CSS, JavaScript, and SQL for form validation and database integration. It ensures the collection of valid user data before submission and stores that data in a structured database format.

## Files Included

1. **index.html**: The structure of the customer contact form, with fields for name, phone, email, and password.
2. **script.js**: JavaScript functions for form validation, ensuring correct input for each field (e.g., email, phone number, password).
3. **style.css**: Basic CSS to style the form, including background images and other visual aspects.
4. **init.sql**: SQL script to initialize the customer table in the database.
5. **alter.sql**: SQL script to alter the database if needed.
6. **README.md**: This file, providing an overview of the project.
7. **Full_Code_Explanation_Assignment.docx**: A detailed explanation of the form, the code, and how validation is implemented.

## Features

- **Customer ID Auto-generation**: Automatically generates a unique customer ID for each new entry.
- **Form Validation**: Ensures valid inputs for all required fields, such as names, email, phone numbers, and passwords.
- **Password Security**: Enforces a password policy with a minimum length of 16 characters, requiring uppercase letters, lowercase letters, numbers, and special symbols.
- **Dropdown List**: A dynamic dropdown list for selecting Canadian provinces.
- **Responsive Design**: The form uses Bootstrap for responsive design and styling.

## How to Run

1. **HTML Form**: Open `index.html` in any browser to view and interact with the form.
2. **JavaScript**: The form uses `script.js` for validation before submission.
3. **SQL**: Run `init.sql` to create the database table for customer data storage.
4. **Form Submission**: Once all fields are validated, the form data is submitted to `customers.php`, which connects to the SQL database.

## Installation

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/mrMehulbhargav/Customer_Contact_form
   ```
2. Open the `index.html` file to run the project locally.
3. Set up a MySQL or compatible database and run the `init.sql` file to create the necessary tables.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Bootstrap (CSS Framework)
- JavaScript for form validation
- SQL for database management

