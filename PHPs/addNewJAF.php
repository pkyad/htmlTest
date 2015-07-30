<?php
echo "going to submit a data set";

require_once('mysqliConnect.php');

$sql = "INSERT INTO jafs (id, firstName, lastName, email, gender, dob, mobile, department, program, college,cpi, twelthMarks, tenthMarks, interest, password,regTime)
VALUES (NULL, 'John', 'Doe', 'john@example.com', 'm','1992-06-15', '9702438730', 'Aerospace', '4-Yr, B.Tech', 'IITB', '6.4', '83', '87', 'IT', 'janhvi', NOW())";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 
