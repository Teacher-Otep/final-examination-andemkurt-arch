<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $surname = $_POST['surname'];
    $name = $_POST['name'];
    $middlename = $_POST['middlename'];
    $address = $_POST['address'];
    $contact = $_POST['contact'];

    
    $sql = "INSERT INTO students (surname, name, middlename, address, contact_number) 
            VALUES ('$surname', '$name', '$middlename', '$address', '$contact')";

    if (mysqli_query($conn, $sql)) {
        header("Location: ../index.php?status=success");
        exit();
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
?>