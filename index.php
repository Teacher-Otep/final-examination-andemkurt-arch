<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Kurvey Student Portal</title>
    <link rel="stylesheet" href="kurvey.css">
</head>
<body>
    <header class="branding-header">
    <div class="logo-container" id="logoToggle">
        <img src="logo.svg" alt="K" class="logo-icon"> 
        <div class="logo-text">
            <h1 style="margin: 0; color: #58a6ff; letter-spacing: 5px;">K.KURVEY</h1>
            <p id="dynamic-text" style="margin: 0; font-size: 0.8rem; color: #8b949e;">
                | Register New Student <br/> | View Students <br/> | Update Student Records <br/> | Remove Students Records
            </p>
        </div>
    </div>
</header>

<div id="navContainer">
    <button class="navbarbuttons" onclick="showSection('create')">Create</button>
    <button class="navbarbuttons" onclick="showSection('read')">Read</button>
    <button class="navbarbuttons" onclick="showSection('update')">Update</button>
    <button class="navbarbuttons" onclick="showSection('delete')">Delete</button>
</div>

<section id="home" class="homecontent" style="display: block;">
    <h1>K.Kurvey Management</h1>
    <p>Integrative Programming Portal</p>
</section>

<script src="kurvey.js"></script>
</body>
</html>