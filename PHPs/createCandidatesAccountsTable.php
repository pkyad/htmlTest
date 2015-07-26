<?php
$servername = "localhost";
$username = "root";
$password = "janhvi";
$dbname = "candidatesDb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "DROP TABLE accounts";
if ($conn->query($sql) === TRUE) {
    echo "Droped the table accounts";
} else {
    echo "Error creating table: " . $conn->error;
}

// sql to create table
$sql = "CREATE TABLE accounts (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstName VARCHAR(30) NOT NULL,
lastName VARCHAR(30) NOT NULL,
email VARCHAR(50) NOT NULL,
gender ENUM('m', 'f'),
dob DATE NOT NULL,
mobile INT UNSIGNED NOT NULL,
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
?> 
