<?php
echo "came in the registrationSubmit </br> </br>";
echo "Name: " .$_POST["firstName"];
echo "</br> </br>";
echo "Last name: " .$_POST["lastName"];
echo "</br> </br>";
echo "email: " .$_POST["email"];
echo "</br> </br>";
echo "Mobile: " .$_POST["mobile"];
echo "</br> </br>";
echo "Department: " .$_POST["department"];
echo "</br> </br>";
echo "college: " .$_POST["institute"];
echo "</br> </br>";
echo "DOB Date: " .$_POST["dobDay"];
echo "</br> </br>";
echo "Program: " .$_POST["program"];
echo "</br> </br>";
echo "Month: " .$_POST["dobMonth"];
echo "</br> </br>";
echo "Year: " .$_POST["dobYear"];
echo "</br> </br>";
echo "CPI: " .$_POST["cpi"];
echo "</br> </br>";
echo "PWD: " .$_POST["pwd"];
echo "</br> </br>";
echo "PWD: " .$_POST["pwd2"];
echo "</br> </br>";
echo "Interest: " .$_POST["domain"];
echo "</br> </br>";
echo "Photo: " .$_FILES["photo"]['name'];
echo "</br> </br>";
echo "resume: " .$_FILES["resume"]['name'];
echo "</br></br>";
echo "File name" .$_FILES['photo']['name'];
echo "</br></br>";



?> 
