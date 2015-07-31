<?php

require_once('mysqliConnect.php');

$sql = "DROP TABLE accounts";
if ($conn->query($sql) === TRUE) {
    echo "Droped the table accounts";
} else {
    echo "Error deleting table: " . $conn->error;
}

// sql to create table
$sql = "CREATE TABLE accounts (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstName VARCHAR(30) NOT NULL,
lastName VARCHAR(30) NOT NULL,
email VARCHAR(50) NOT NULL,
gender ENUM('m', 'f'),
dob DATE NOT NULL,
mobile VARCHAR(12) NOT NULL,
address VARCHAR(200) NOT NULL,
pincode VARCHAR(10) NOT NULL,
city VARCHAR(20) NOT NULL,
state VARCHAR(20) NOT NULL,
department VARCHAR(30) NOT NULL,
program VARCHAR(30) NOT NULL,
college VARCHAR(30) NOT NULL,
cpi FLOAT(10) NOT NULL,
twelthMarks VARCHAR(10) NOT NULL,
tenthMarks VARCHAR(10) NOT NULL,
interest VARCHAR(30) NOT NULL,
password VARCHAR(20) NOT NULL,
regTime TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table accounts created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();

header('Location: setup.html');
exit;
?> 
