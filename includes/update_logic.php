<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    $new_surname = trim($_POST['new_surname']);
    $new_name = trim($_POST['new_name']);
    $new_address = trim($_POST['new_address']);
    $new_contact = trim($_POST['new_contact']);

   
    if (empty($id) || empty($new_surname) || empty($new_name)) {
        echo "<script>alert('Error: ID, Name, and Surname are required to update!'); window.history.back();</script>";
        exit();
    }

    $checkID = "SELECT * FROM students WHERE id = '$id'";
    $resultID = mysqli_query($conn, $checkID);

    if (mysqli_num_rows($resultID) > 0) {
        $query = "UPDATE students SET surname='$new_surname', name='$new_name', address='$new_address', contact_number='$new_contact' WHERE id='$id'";
        
        if (mysqli_query($conn, $query)) {
            echo "<script>alert('Record Updated Successfully!'); window.location.href='../index.php';</script>";
        } else {
            echo "Error: " . mysqli_error($conn);
        }
    } else {
        echo "<script>alert('Error: Student ID not found!'); window.history.back();</script>";
    }
}
?>