<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $newName = $_POST['name'];
    $newAddress = $_POST['address'];
    $newContact = $_POST['contact'];

  
    $sql = "UPDATE students SET 
            name = '$newName', 
            address = '$newAddress', 
            contact_number = '$newContact' 
            WHERE id = $id";

    if (mysqli_query($conn, $sql)) {
      
        header("Location: ../index.php?status=success");
        exit();
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }
}
?>