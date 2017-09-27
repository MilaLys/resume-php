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


echo json_encode($row);