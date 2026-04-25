<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Kurvey Student Portal</title>
    <link rel="stylesheet" href="kurvey.css">
</head>
<body onload="resetPortal()">
    <div class="main-wrapper">
        <header class="branding-header">
            <div class="logo-container" id="logoToggle">
                <img src="logo.png" alt="K" class="logo-icon">
                <div class="logo-text">
                    <h1>K.KURVEY</h1>
                    <div id="dynamic-text" class="dynamic-text">
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
                <input type="text" name="surname" class="field" required>
                <label class="label">First Name</label>
                <input type="text" name="name" class="field" required>
                <label class="label">Middle Name</label>
                <input type="text" name="middlename" class="field">
                <label class="label">Address</label>
                <input type="text" name="address" class="field" required>
                <label class="label">Mobile Number</label>
                <input type="number" name="contact" class="field" required>
                <button type="submit" class="btns">Submit Record</button>
            </form>
        </section>
        
        </div>
    <script src="kurvey.js"></script>
</body>
</html>