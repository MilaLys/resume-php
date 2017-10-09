<?php
$startFrom = intval($_GET['page']) * 6;

// Connect to DB
$mysqli = new mysqli("localhost", "root", "root", "resume");
$query = $mysqli->query("SELECT * FROM portfolio ORDER BY `order` ASC LIMIT $startFrom, 6");

$data = [];
while ($row = $query->fetch_assoc()) {
   $data[]=$row;
}

echo json_encode($data);