<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    $surname = trim($_POST['surname']);
    $name = trim($_POST['name']);
    $middlename = trim($_POST['middlename']);
    $address = trim($_POST['address']);
    $contact = trim($_POST['contact']);

    
    if (empty($surname) || empty($name)) {
        echo "<script>
                alert('Error: Name and Surname cannot be empty or just spaces!');
                window.location.href='../index.php';
              </script>";
        exit();
    }
    
    
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