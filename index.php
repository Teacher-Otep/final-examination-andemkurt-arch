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
            <div class="logo-container">
                <img src="logo.svg" id="logo" alt="Kurvey Logo">
            </div>
            <div class="kurvey-text-box">
                <h1>K.KURVEY</h1>
                <p class="portal-tag" id="dynamic-text">
                    | Register New Student <br/>
                    | View Students <br/>
                    | Update Student Records <br/>
                    | Remove Students Records
                </p>
            </div>
        </header>

        <nav class="navbar">
            <button class="navbarbuttons" onclick="showSection('create')">Create</button>
            <button class="navbarbuttons" onclick="showSection('read')">Read</button>
            <button class="navbarbuttons" onclick="showSection('update')">Update</button>
            <button class="navbarbuttons" onclick="showSection('delete')">Delete</button>
        </nav>
    </div>

    <section id="home" class="homecontent" style="display: block;"> 
        <h1 style="color: #38bdf8; font-size: 1.5rem;">K.Kurvey Management</h1>
        <p style="color: #94a3b8; font-size: 0.9rem;">Integrative Programming Portal</p>
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
        <div id="table-container">
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

    <script src="kurvey.js"></script>
</body>
</html>