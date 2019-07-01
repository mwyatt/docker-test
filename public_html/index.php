<?php // phpinfo() ?>
<?php

$host = 'mysql';
$user = 'root';
$pass = '123';
$conn = new mysqli($host, $user, $pass, 'test');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected to MySQL successfully!";
}

?>
