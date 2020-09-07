<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

$pdo = new PDO(
    'mysql:host=cdricaoreactjs.mysql.db;dbname=cdricaoreactjs',
    'cdricaoreactjs', // Nom utilisateur
    '13031904Fufu', // Mot de passe utilisateur
    [
        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
        PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]
);

$data = json_decode(file_get_contents('php://input'), true);
echo '<pre>';
print_r($data);
echo '</pre>';

$prenom = $mail = $message = '';

extract($data);

$requete =
    'INSERT INTO form (username, mail, message) 
        VALUES (:prenom, :mail, :message)';
$stmt = $pdo->prepare($requete);
$stmt->execute([
    ':prenom' => $prenom,
    ':mail' => $mail,
    ':message' => $message
]);
