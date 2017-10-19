<?php
/**
 * Created by PhpStorm.
 * User: Lusy
 * Date: 24-Sep-17
 * Time: 12:34
 */

$mysqli = new mysqli("localhost", "root", "root", "resume");
$query = $mysqli->query("SELECT * FROM `articles` ORDER BY `date` DESC");

$data = [];
while ($row = $query->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);