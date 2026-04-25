function showSection(id) {
    // 1. Hide all main content and home content sections
    const all = document.querySelectorAll('.content, .homecontent');
    all.forEach(s => s.style.display = 'none');

    // 2. Show the selected section
    const target = document.getElementById(id);
    if (target) {
        target.style.display = 'block';
    }

    // 3. Dynamic Text Logic for the Header
    const headerText = document.getElementById('dynamic-text');
    if (!headerText) return;

    if (id === 'create') {
        headerText.innerHTML = "| Register New Student";
    } 
    else if (id === 'read') {
        headerText.innerHTML = "| View Students";
    } 
    else if (id === 'update') {
        headerText.innerHTML = "| Update Student Records";
    } 
    else if (id === 'delete') {
        headerText.innerHTML = "| Remove Students Records";
    }
    else if (id === 'home') {
        // Reset to the full list for Home view
        headerText.innerHTML = "| Register New Student <br/> | View Students <br/> | Update Student Records <br/> | Remove Students Records";
    }
}

/**
 * Logo click logic to reset the view and the text
 */
document.getElementById('logo').addEventListener('click', function() {
    // Return to home state
    showSection('home');
    
    // Ensure navbar is visible
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.display = 'flex';
    }
});

/**
 * Spacebar validation to keep the database clean
 */
document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('keydown', function(e) {
        // Block space if input is empty
        if (e.keyCode === 32 && this.value.length === 0) {
            e.preventDefault();
        }
        // Block double spaces
        if (e.keyCode === 32 && this.value.endsWith(' ')) {
            e.preventDefault();
        }
    });
});