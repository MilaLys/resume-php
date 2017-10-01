<?php
/**
 * Created by PhpStorm.
 * User: Lusy
 * Date: 01-Oct-17
 * Time: 12:19
 */

$mysqli = new mysqli("localhost", "root", "root", "resume");
$data = json_decode(file_get_contents('php://input'));
$name = $mysqli->real_escape_string($data->name);
$email = $mysqli->real_escape_string($data->email);
$message = $mysqli->real_escape_string($data->message);

$mysqli->query("INSERT INTO `messages` SET `name`='$name', `email`='$email', `message`='$message'");

