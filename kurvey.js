/**
 * Function to switch between portal sections and 
 * dynamically update the header description.
 */
function showSection(id) {
    // Hide all main content and home content sections
    const all = document.querySelectorAll('.content, .homecontent');
    all.forEach(s => s.style.display = 'none');

    // Show the selected section
    const target = document.getElementById(id);
    if (target) {
        target.style.display = 'block';
    }

    // Dynamic Text Logic for the Header
    const headerText = document.getElementById('dynamic-text');
    if (!headerText) return;

    if (id === 'read') {
        headerText.innerHTML = "| View Students";
    } 
    else if (id === 'update') {
        headerText.innerHTML = "| Update Student Records";
    } 
    else if (id === 'delete') {
        headerText.innerHTML = "| Remove Students Records";
    } 
    else if (id === 'create') {
        headerText.innerHTML = "| Register New Student";
    }
    else {
        // Default home view shows all options
        headerText.innerHTML = "| Register New Student <br/> | View Students <br/> | Update Student Records <br/> | Remove Students Records";
    }
}

/**
 * Logo click logic to reset the view and navbar
 */
document.getElementById('logo').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    const home = document.getElementById('home');
    const contentSections = document.querySelectorAll('.content');
    const headerText = document.getElementById('dynamic-text');

    // Reset header text to full list
    if (headerText) {
        headerText.innerHTML = "| Register New Student <br/> | View Students <br/> | Update Student Records <br/> | Remove Students Records";
    }

    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'flex';
        showSection('home');
    } else {
        navbar.style.display = 'none';
        contentSections.forEach(c => c.style.display = 'none');
        if (home) home.style.display = 'block';
    }
});

/**
 * Clear Button Logic
 */
document.getElementById('clrbtn').addEventListener('click', function() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
    inputs.forEach(i => i.value = ''); 
});

/**
 * VIRTUAL FEEDBACK & SPACEBAR VALIDATION
 * Prevents users from entering empty spaces in text fields.
 */
function showFeedback(element) {
    element.classList.add('shake');
    const originalPlaceholder = element.placeholder;
    element.placeholder = "Input required (not spaces!)";
    
    setTimeout(() => {
        element.classList.add('error-border'); 
    }, 100);

    setTimeout(() => {
        element.classList.remove('shake');
        element.placeholder = originalPlaceholder;
    }, 400);
}

// Attach listeners to all text inputs
document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('keydown', function(e) {
        // Block space if input is empty
        if (e.keyCode === 32 && this.value.length === 0) {
            e.preventDefault();
            showFeedback(this);
        }
        
        // Block double spaces (e.g., "John  Doe")
        if (e.keyCode === 32 && this.value.endsWith(' ')) {
            e.preventDefault();
            showFeedback(this);
        }
    });

    // Remove red border when user types valid characters
    input.addEventListener('input', function() {
        if (this.value.length > 0) {
            this.classList.remove('error-border');
        }
    });
});