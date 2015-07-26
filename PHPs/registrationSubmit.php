<?php
$servername = "localhost";
$username = "root";
$password = "janhvi";
$dbname = "candidatesDb";

$number = 9702438730;
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO accounts (id, firstName, lastName, email, gender, dob, mobile, department, program, college,cpi, twelthMarks, tenthMarks, interest, password,regTime)
VALUES (NULL, 'John', 'Doe', 'john@example.com', 'm','1992-06-15', $number, 'Aerospace', '4-Yr, B.Tech', 'IITB', '6.4', '83', '87', 'IT', 'janhvi', NOW())";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 
