<?php
// connection
include("connection.php");

//headers 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

// get variables from html
$name = $_POST["fname"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];

//execute the queries
$query = $mysqli->prepare("INSERT INTO users(name, email, phone, message ) VALUES(?, ?, ?, ?)");
$query->bind_param("ssss", $name, $email, $phone, $message);
$query->execute();
// $rs = mysqli_query($mysqli, $query);

//success message
$response = [];
$response["success"] = true;
echo json_encode($response);
?>