<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Kurvey Student Portal</title>
    <link rel="stylesheet" href="kurvey.css">
</head>
<body>
    <div class="main-wrapper">
        <header class="branding-header">
            <div class="logo-container" id="logoToggle" style="cursor: pointer;">
                <img src="logo.svg" alt="K" class="logo-icon">
                <div class="logo-text">
                    <h1 style="margin: 0; color: #58a6ff; letter-spacing: 5px;">K.KURVEY</h1>
                    <div id="dynamic-text-container">
                        <p id="line-create">| Register New Student</p>
                        <p id="line-read">| View Students</p>
                        <p id="line-update">| Update Student Records</p>
                        <p id="line-delete">| Remove Students Records</p>
                    </div>
                </div>
            </div>
        </header>

        <div id="navContainer" class="nav-links">
            <button class="navbarbuttons" onclick="showSection('create')">Create</button>
            <button class="navbarbuttons" onclick="showSection('read')">Read</button>
            <button class="navbarbuttons" onclick="showSection('update')">Update</button>
            <button class="navbarbuttons" onclick="showSection('delete')">Delete</button>
        </div>

        <section id="home" class="homecontent">
            <h1>K.Kurvey Management</h1>
            <p>Integrative Programming Portal</p>
        </section>

        <section id="create" class="content" style="display:none;">
            <h1 class="contenttitle">New Registration</h1>
            <form action="includes/insert.php" method="POST">
                <label class="label">Surname</label>
                <input type="text" name="surname" class="field" placeholder="Enter Surname..." required>
                <label class="label">First Name</label>
                <input type="text" name="name" class="field" placeholder="Enter First Name..." required>
                <label class="label">Middle Name</label>
                <input type="text" name="middlename" class="field" placeholder="Enter Middle Name...">
                <label class="label">Address</label>
                <input type="text" name="address" class="field" placeholder="Enter Address..." required>
                <label class="label">Mobile Number</label>
                <input type="number" name="contact" class="field" placeholder="Enter Contact Number..." required>
                <button type="submit" class="btns" id="savebtn">Submit Record</button>
            </form>
        </section>

        <section id="read" class="content" style="display:none;">
            <h1 class="contenttitle">Student List</h1>
            <div id="student-table-container">
                <?php include 'includes/fetch_students.php'; ?>
            </div>
        </section>

        <section id="update" class="content" style="display:none;">
            <h1 class="contenttitle">Update Records</h1>
            <form action="includes/update_logic.php" method="POST">
                <label class="label">Student ID to Update</label>
                <input type="number" name="id" class="field" required>
                <label class="label">New Surname</label>
                <input type="text" name="new_surname" class="field" required>
                <label class="label">New First Name</label>
                <input type="text" name="new_name" class="field" required>
                <label class="label">New Middle Name</label>
                <input type="text" name="new_middlename" class="field">
                <label class="label">New Address</label>
                <input type="text" name="new_address" class="field" required>
                <label class="label">New Mobile Number</label>
                <input type="number" name="new_contact" class="field" required>
                <button type="submit" class="btns">Apply Changes</button>
            </form>
        </section>

        <section id="delete" class="content" style="display:none;">
            <h1 class="contenttitle">Remove Records</h1>
            <form action="includes/delete_logic.php" method="POST">
                <label class="label">Enter Student ID</label>
                <input type="number" name="id" class="field" required>
                <button type="submit" class="btns delete-btn">Confirm Deletion</button>
            </form>
        </section>
    </div>
    <script src="kurvey.js"></script>
</body>
</html>