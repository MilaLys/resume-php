<?php
/**
 * Created by PhpStorm.
 * User: Lusy
 * Date: 24-Sep-17
 * Time: 13:47
 */

$mysqli = new mysqli("localhost", "root", "root", "resume");
$id = intval($_GET['id']);

$query = $mysqli->query("SELECT * FROM `articles` WHERE `id`= $id");

$row = $query->fetch_assoc();
if (!empty($row)) {
    $mysqli->query("UPDATE `articles` SET `watched` = `watched`+1 WHERE `id`= $id");
}

echo json_encode($row);