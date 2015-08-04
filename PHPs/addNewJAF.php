<?php
echo "going to submit a data set";


echo "type: " .$_POST["type"];
$type = $_POST["type"];
echo "</br> </br>";
echo "Designation: " .$_POST["designation"];
$designation = $_POST["designation"];
echo "</br> </br>";
echo "Mode: " .$_POST["mode"];
$mode = $_POST["mode"];
echo "</br> </br>";

echo "Place: " .$_POST["place"];
$place = $_POST["place"];
echo "</br> </br>";

echo "Domain: " .$_POST["domain"];
$domain = $_POST["domain"];
echo "</br> </br>";

echo "Last Day: " .$_POST["lastDay"];
$lastDay = $_POST["lastDay"];
echo "</br> </br>";

echo "lastMonth: " .$_POST["lastMonth"];
$lastMonth = $_POST["lastMonth"];
echo "</br> </br>";

echo "lastYear: " .$_POST["lastYear"];
$lastYear = $_POST["lastYear"];
echo "</br> </br>";

echo "vacancy: " .$_POST["vacancy"];
$vacancy = $_POST["vacancy"];
echo "</br> </br>";

echo "Tentative month: " .$_POST["tentativeMonth"];
$tentativeMonth = $_POST["tentativeMonth"];
echo "</br> </br>";

echo "Tentative Year: " .$_POST["tentativeYear"];
$tentativeYear = $_POST["tentativeYear"];
echo "</br> </br>";

echo "Discription: " .$_POST["discription"];
$discription = $_POST["discription"];
echo "</br> </br>";

echo "Qualification: " .$_POST["qualification"];
$qualification = $_POST["qualification"];
$qualificationString = json_encode($qualification);
echo $qualificationString;
echo "</br> </br>";


$skills = $_POST["skills"];
$skillsString = json_encode($skills);
echo $skillsString;
echo "</br> </br>";

echo "Other details: " .$_POST["otherDetails"];
$otherDetails = $_POST["otherDetails"];
echo "</br> </br>";

echo "issuer: " .$_POST["approver"];
$approver = $_POST["approver"];
echo "</br> </br>";

echo "coordinator: " .$_POST["coordinator"];
$coordinator = $_POST["coordinator"];
echo "</br> </br>";

echo "hrCoordinator: " .$_POST["hrCoordinator"];
$hrCoordinator = $_POST["hrCoordinator"];
echo "</br> </br>";

echo "Package: " .$_POST["package"];
$package = $_POST["package"];
echo "</br> </br>";

require_once('mysqliConnectHR.php');

$sql = "INSERT INTO announcedJAFs (id,type, status, designation, mode, domain, place, lastDate, numVacancy, tentativeStart, compensation,discription,qualification, skills, otherDetails, announcer, hrcoordinator, approver, coordinator ,regTime)
VALUES (NULL, '$type', 'active', '$designation','$mode','$domain','$place','$lastYear-$lastMonth-$lastDay','$vacancy','$tentativeYear-$tentativeMonth-01','$package','$discription','$qualificationString','$skillsString','$otherDetails','ABC','$hrCoordinator','$approver','$coordinator', NOW())";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

header('Location: ../HRPortal.html');
exit;

?> 
