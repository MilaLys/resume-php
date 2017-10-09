<?php

// Connect to DB
$mysqli = new mysqli("localhost", "root", "root", "resume");
$row = $mysqli->query("SELECT COUNT(`id`) FROM portfolio")->fetch_array(MYSQLI_NUM);
$count = $row[0];
$pageCount = floor($count / 6);

if ($count % 6 > 0) {
    $pageCount++;
}

echo json_encode(array('pages' => $pageCount));