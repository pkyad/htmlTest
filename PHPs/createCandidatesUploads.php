<?php

require_once('mysqliConnect.php');

$sql = "DROP TABLE uploads";
if ($conn->query($sql) === TRUE) {
    echo "Droped the table uploads";
} else {
    echo "Error deleting table: " . $conn->error;
}

// sql to create table
$sql = "CREATE TABLE uploads (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
imageData BLOB NOT NULL,
imageName VARCHAR(50) NOT NULL,
imageType VARCHAR(5) NOT NULL,
imageSize INT(8) NOT NULL,


resumeData BLOB,
resumeDame VARCHAR(50),
resumeType VARCHAR(5),
resumeSize INT(8),

doc1Data BLOB,
doc1Name VARCHAR(50),
doc1Type VARCHAR(5),
doc1Size INT(8),

doc2Data BLOB,
doc2Name VARCHAR(50),
doc2Type VARCHAR(5),
doc2Size INT(8),

doc3Data BLOB,
doc3Name VARCHAR(50),
doc3Type VARCHAR(5),
doc3Size INT(8),

regTime TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table uploads created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();

header('Location: setup.html');
exit;
?> 
