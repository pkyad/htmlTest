<?php

$servername = "localhost";
$username = "root";
$password = "janhvi";
$dbname = "HR";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


echo '<div class="alert alert-success fade in" style="margin-top:20px;">
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    <strong>Success!</strong> Connected to the database.
</div>';
// Create table

$sql = "DROP TABLE announcedJAFs";
if ($conn->query($sql) === TRUE) {
    echo "Droped the table accounts";
} else {
    echo "Error deleting table: " . $conn->error;
}

// sql to create table
$sql = "CREATE TABLE announcedJAFs (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
status ENUM('active', 'inactive') NOT NULL,
designation VARCHAR(100) NOT NULL,
mode ENUM('oncampus', 'offcampus') NOT NULL,
domain VARCHAR(20) NOT NULL,
place VARCHAR(20) NOT NULL,
lastDate DATE NOT NULL,
numVacancy INT NOT NULL,
tentativeStart DATE NOT NULL,
compensation VARCHAR(30) NOT NULL,
resposibilities VARCHAR(500) NOT NULL,
qualification VARCHAR(100) NOT NULL,
skills VARCHAR(200) NOT NULL,
otherDetails VARCHAR(500) NOT NULL,
announcer VARCHAR(15) NOT NULL,
hrcoordinater VARCHAR(15) NOT NULL,
approver VARCHAR(15) NOT NULL,
coordinator VARCHAR(15) NOT NULL,
regTime TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table accounts created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}



mysqli_close($conn);

header('Location: setup.html');
exit;

?>
