USE tbc;

-- Create the table if it doesn't exist
CREATE TABLE IF NOT EXISTS customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lastName VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL
);

-- Alter the table to add additional columns
ALTER TABLE customers 
ADD gender VARCHAR(10) AFTER firstName,
ADD custPhone VARCHAR(20) AFTER gender,
ADD email VARCHAR(255) AFTER custPhone,
ADD address VARCHAR(255) AFTER email,
ADD houseNumber VARCHAR(50) AFTER address,
ADD country VARCHAR(50) AFTER houseNumber,
ADD password VARCHAR(255) AFTER country,
ADD newsletter TINYINT(1) AFTER password,
ADD question TEXT AFTER newsletter;
