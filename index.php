<!DOCTYPE html>
<html lang="en">
<head>
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
        <h1 class="contenttitle">Register Student</h1>
        <form action="includes/insert.php" method="POST">
            <label class="label">Surname</label>
            <input type="text" name="surname" class="field" pattern=".*\S.*" title="Surname cannot be empty or just spaces" required>
            
            <label class="label">Name</label>
            <input type="text" name="name" class="field" pattern=".*\S.*" title="Name cannot be empty or just spaces" required>

            <label class="label">Middle Name</label>
            <input type="text" name="middlename" class="field" placeholder="Optional">

            <label class="label">Address</label>
            <input type="text" name="address" class="field" pattern=".*\S.*" title="Address cannot be empty or just spaces">

            <label class="label">Mobile Number</label>
            <input type="number" name="contact" class="field">
            
            <div id="btncontainer">
                <button type="button" id="clrbtn" class="btns">Clear Fields</button>
                <button type="submit" id="savebtn" class="btns">Save</button>
            </div>
        </form>
    </section>

    <section id="read" class="content" style="display:none;">
        <h1 class="contenttitle">View Registered Students</h1>
        <div id="student-table-container">
            <?php include 'includes/fetch_students.php'; ?>
        </div>
    </section>

    <section id="update" class="content" style="display:none;">
        <h1 class="contenttitle">Update Records</h1>
        <form action="includes/update_logic.php" method="POST">
            <label class="label">Select Student ID</label>
            <input type="number" name="id" class="field" placeholder="Enter ID to update..." required>
            
            <label class="label">New Name</label>
            <input type="text" name="name" class="field" placeholder="Enter new name..." pattern=".*\S.*" title="Input cannot be just spaces">

            <label class="label">New Address</label>
            <input type="text" name="address" class="field" placeholder="Enter new address..." pattern=".*\S.*" title="Input cannot be just spaces">

            <button type="submit" class="btns" id="savebtn" style="width: 100%; margin-top: 20px;">
                Apply Changes
            </button>
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

    <script>
        // Auto-hide success status
        if (window.location.search.includes('status=success')) {
            setTimeout(() => {
                window.history.replaceState({}, document.title, window.location.pathname);
            }, 3000);
        }
    </script>
</body>
</html>