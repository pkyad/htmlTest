<?php
// Get a connection for the database
require_once('mysqliConnect.php');

// Create a query for the database
$query = "SELECT id, firstName, lastName, email, gender, dob, mobile, department, program, college, cpi, twelthMarks, tenthMarks, interest FROM accounts";

// Get a response from the database by sending the connection
// and the query
$response = @mysqli_query($conn, $query);

echo '<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="Pradeep" >
    <title>Login</title>
</head>

  <body>';

// If the query executed properly proceed
if($response){

echo '<table align="left"
cellspacing="5" cellpadding="8">

<tr>
<td align="left"><b>ID</b></td>
<td align="left"><b>First Name</b></td>
<td align="left"><b>Last Name</b></td>
<td align="left"><b>E-Mail</b></td>
<td align="left"><b>Gender</b></td>
<td align="left"><b>DOB</b></td>
<td align="left"><b>Mobile</b></td>
<td align="left"><b>Department</b></td>
<td align="left"><b>Program</b></td>
<td align="left"><b>College</b></td>
<td align="left"><b>CPI</b></td>
<td align="left"><b>12th</b></td>
<td align="left"><b>10th</b></td>
<td align="left"><b>Interest</b></td>
</tr>';

// mysqli_fetch_array will return a row of data from the query
// until no further data is available
while($row = mysqli_fetch_array($response)){

echo '<tr><td align="left">' . 
$row['id'] . '</td><td align="left">' . 
$row['firstName'] . '</td><td align="left">' .
$row['lastName'] . '</td><td align="left">' . 
$row['email'] . '</td><td align="left">' .
$row['gender'] . '</td><td align="left">' . 
$row['dob'] . '</td><td align="left">' .
$row['mobile'] . '</td><td align="left">' . 
$row['department'] . '</td><td align="left">' . 
$row['program'] . '</td><td align="left">' .
$row['college'] . '</td><td align="left">' .
$row['cpi'] . '</td><td align="left">' .
$row['twelthMarks'] . '</td><td align="left">' .
$row['tenthMarks'] . '</td><td align="left">' .
$row['interest'] . '</td><td align="left">';

echo '</tr>';
}

echo '</table>';

} else {

echo "Couldn't issue database query<br />";

echo mysqli_error($conn);

}

// Close connection to the database
mysqli_close($conn);

echo ' </body>
</html>';

?>
