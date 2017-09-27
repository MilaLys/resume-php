<?php

// Connect to DB
$mysqli = new mysqli("localhost", "root", "root", "resume");
$query = $mysqli->query("SELECT * FROM portfolio");

$data = [];
while ($row = $query->fetch_assoc()) {
   $data[]=$row;
}

echo json_encode($data);