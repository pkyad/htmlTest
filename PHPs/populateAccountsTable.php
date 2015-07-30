<?php
echo "going to submit a data set";

require_once('mysqliConnect.php');

$sql = "INSERT INTO accounts (id, firstName, lastName, email, gender, dob, mobile,address,pincode,city,state, department, program, college,cpi, twelthMarks, tenthMarks, interest, password,regTime)
VALUES (NULL, 'Pradeep', 'Yadav', 'pradeep@example.com', 'm','1992-06-15', '9702138730', 'H. No. 111', '234156', 'patna','bihar','Aerospace', '4-Yr, B.Tech', 'IITB', '6.4', '83', '87', 'IT', 'pass1', NOW());";

$sql .= "INSERT INTO accounts (id, firstName, lastName, email, gender, dob, mobile, address,pincode,city,state, department, program, college,cpi, twelthMarks, tenthMarks, interest, password,regTime)
VALUES (NULL, 'Sandeep', 'Kumar', 'sandeep@example.com', 'm','1991-08-15', '9702436750', 'H. No. 51', '1100001', 'Delhi','Delhi','Mechanical', '4-Yr, M.Tech', 'NITK', '9.4', '93', '67', 'Manufacturing', 'pass2', NOW());";

$sql .= "INSERT INTO accounts (id, firstName, lastName, email, gender, dob, mobile,address,pincode,city,state, department, program, college,cpi, twelthMarks, tenthMarks, interest, password,regTime)
VALUES (NULL, 'Rahul', 'Singh', 'rahul_singh@example.com', 'm','1982-06-15', '9702138730', 'H. No. 541', '400076', 'Mumbai','MH','Aerospace', '4-Yr, B.Tech', 'IITB', '7.5', '83', '87', 'IT', 'pass1', NOW());";

$sql .= "INSERT INTO accounts (id, firstName, lastName, email, gender, dob, mobile,address,pincode,city,state, department, program, college,cpi, twelthMarks, tenthMarks, interest, password,regTime)
VALUES (NULL, 'Sonal', 'Kumari', 'sonal_kumari@example.com', 'f','1989-08-15', '9876543210', 'H. No. 121', '234156', 'patna','bihar','Civil', '4-Yr, B.Tech', 'IIT Kanpur', '6.4', '23', '67', 'Manufacturing', 'pass2', NOW());";

$sql .= "INSERT INTO accounts (id, firstName, lastName, email, gender, dob, mobile, address,pincode,city,state,department, program, college,cpi, twelthMarks, tenthMarks, interest, password,regTime)
VALUES (NULL, 'Sohan', 'Kumar', 'pradeep@example.com', 'm','1990-04-15', '68756231452', 'H. No. 761', '841101', 'Sonpur','bihar','Aerospace', '4-Yr, B.Tech', 'IITB', '8.4', '83', '89', 'IT', 'pass1', NOW());";

$sql .= "INSERT INTO accounts (id, firstName, lastName, email, gender, dob, mobile, address,pincode,city,state,department, program, college,cpi, twelthMarks, tenthMarks, interest, password,regTime)
VALUES (NULL, 'Divyam', 'Rastogi', 'divyam_rastogi@example.com', 'm','1991-08-15', '89562315486', 'H. No. 451', '234156', 'patna','bihar','Computer Science', '4-Yr, M.Tech', 'NITK', '7.34', '93', '67', 'Manufacturing', 'pass2', NOW());";

$sql .= "INSERT INTO accounts (id, firstName, lastName, email, gender, dob, mobile, address,pincode,city,state,department, program, college,cpi, twelthMarks, tenthMarks, interest, password,regTime)
VALUES (NULL, 'Deepika', 'Rai', 'deepika@example.com', 'f','1992-11-1', '6542838730', 'H. No. 32', '262002', 'Lucknow','UP','Finance', '4-Yr, M. Fi', 'U. Porto', '6.84', '73', '90', 'Consultancy', 'pass3', NOW())";

if ($conn->multi_query($sql) === TRUE) {
    echo "New records created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 
