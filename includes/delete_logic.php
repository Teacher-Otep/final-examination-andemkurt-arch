<?php
include 'db.php';
if (isset($_POST['id'])) {
    $id = $_POST['id'];
    $sql = "DELETE FROM students WHERE id = $id";
    if ($conn->query($sql) === TRUE) {
        header("Location: ../index.php?status=deleted");
    }
}
?>