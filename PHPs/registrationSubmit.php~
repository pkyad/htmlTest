<?php
echo "came in the registrationSubmit </br> </br>";
echo "Name: " .$_POST["firstName"];
$firstName = $_POST["firstName"];
echo "</br> </br>";
echo "Last name: " .$_POST["lastName"];
$lastName = $_POST["lastName"];
echo "</br> </br>";
echo "Gender: " .$_POST["gender"];
$gender = $_POST["gender"];
echo "</br> </br>";
echo "email: " .$_POST["email"];
$email = $_POST["email"];
echo "</br> </br>";
echo "Mobile: " .$_POST["mobile"];
$mobile = $_POST["mobile"];
echo "</br> </br>";
echo "Address: " .$_POST["address"];
$address = $_POST["address"];
echo "</br> </br>";
echo "Pincode: " .$_POST["pincode"];
$pincode = $_POST["pincode"];
echo "</br> </br>";
echo "City: " .$_POST["city"];
$city = $_POST["city"];
echo "</br> </br>";
echo "State: " .$_POST["state"];
$state = $_POST["state"];
echo "</br> </br>";
echo "Department: " .$_POST["department"];
$department = $_POST["department"];
echo "</br> </br>";
echo "college: " .$_POST["institute"];
$institute = $_POST["institute"];
echo "</br> </br>";
echo "DOB Date: " .$_POST["dobDay"];
$dobDay = $_POST["dobDay"];
echo "</br> </br>";
echo "Program: " .$_POST["program"];
$program = $_POST["program"];
echo "</br> </br>";
echo "Month: " .$_POST["dobMonth"];
$dobMonth = $_POST["dobMonth"];
echo "</br> </br>";
echo "Year: " .$_POST["dobYear"];
$dobYear = $_POST["dobYear"];
echo "</br> </br>";
echo "CPI: " .$_POST["cpi"];
$cpi = $_POST["cpi"];
echo "</br> </br>";
echo "12th: " .$_POST["12th"];
$twelth = $_POST["12th"];
echo "</br> </br>";
echo "10th: " .$_POST["10th"];
$tenth = $_POST["10th"];
echo "</br> </br>";
echo "PWD: " .$_POST["pwd"];
$pwd = $_POST["pwd"];
echo "</br> </br>";
echo "PWD 2: " .$_POST["pwd2"];
$pwd2 = $_POST["pwd2"];
echo "</br> </br>";
echo "Interest: " .$_POST["domain"];
$interest = $_POST["domain"];
echo "</br> </br>";


echo "Photo: " .$_FILES["photo"]['name'];
echo "</br> </br>";
echo "resume: " .$_FILES["resume"]['name'];
echo "</br></br>";
echo "File name" .$_FILES['photo']['name'];
echo "</br></br>";

require_once('mysqliConnect.php');

$sql = "INSERT INTO accounts (id, firstName, lastName, email, gender, dob, mobile,address,pincode,city,state, department, program, college,cpi, twelthMarks, tenthMarks,interest, password,regTime)
VALUES (NULL, '$firstName', '$lastName', '$email', '$gender','$dobYear-$dobMonth-$dobDay', '$mobile', '$address', '$pincode', '$city','$state','$department', '$program', '$institute', '$cpi', '$twelth', '$tenth', '$interest', '$pwd', NOW())";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

header('Location: ../careerPortal.html');
exit;

?> 
