<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    $new_surname = $_POST['new_surname'];
    $new_name = $_POST['new_name'];
    $new_address = $_POST['new_address'];
    $new_contact = $_POST['new_contact'];

    // 1. Check if the ID actually exists
    $checkID = "SELECT * FROM students WHERE id = '$id'";
    $resultID = mysqli_query($conn, $checkID);

    if (mysqli_num_rows($resultID) > 0) {
        
        // 2. Duplicate Check: Using 'contact_number' to match your database
        $checkDuplicate = "SELECT * FROM students WHERE (surname = '$new_surname' AND name = '$new_name' AND contact_number = '$new_contact') AND id != '$id'";
        $resultDuplicate = mysqli_query($conn, $checkDuplicate);

        if (mysqli_num_rows($resultDuplicate) > 0) {
            echo "<script>alert('Error: Another student already has these exact details!'); window.location.href='../index.php';</script>";
        } else {
            // 3. Update Query: Using 'contact_number' column name
            $query = "UPDATE students SET surname='$new_surname', name='$new_name', address='$new_address', contact_number='$new_contact' WHERE id='$id'";
            
            if (mysqli_query($conn, $query)) {
                echo "<script>alert('Record Updated Successfully!'); window.location.href='../index.php';</script>";
            } else {
                echo "Error: " . mysqli_error($conn);
            }
        }
    } else {
        echo "<script>alert('Student ID not found!'); window.location.href='../index.php';</script>";
    }
}
?>