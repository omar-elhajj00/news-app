<?php 
//connection
include("connection.php");

//headers 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

//define the variables
// $full_name=$_GET["name"];
// $email=$_GET["email"];
// $phone=$_GET["phone"];
// $message=$_GET["message"];

//queries
$query = $mysqli->prepare("SELECT (message) FROM users ");
$query->execute();
$array=$query->get_result();

$response = [];

while ($a = $array->fetch_assoc()) {
    $response[] = $a;
}

$json = json_encode($response);
echo $json;
?>
