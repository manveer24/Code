<?php
// Database credentials
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$database = "regi"; // Replace with your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve data from form
    $parentName = $_POST["parentName"];
    $email = $_POST["email"];
    $childName = $_POST["childName"];
    $dob = $_POST["dob"];
    $program = $_POST["subjects"];
    
    
    // SQL query to insert data into the table
    $sql = "INSERT INTO registrations (parentName, email, childName, dob, program) 
            VALUES ('$parentName', '$email', '$childName', '$dob', '$program')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();
?>
