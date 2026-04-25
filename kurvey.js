// Function to switch between content sections (Create, Read, Update, Delete)
function showSection(id) {
    // Hide the home landing card and all other content forms 
    const allContent = document.querySelectorAll('.content, .homecontent');
    allContent.forEach(s => s.style.display = 'none'); [1]

    // Show only the requested section
    const target = document.getElementById(id); [1]
    if (target) {
        target.style.display = 'block'; [1]
    }

    // Update the dynamic text in the header to reflect the current section 
    const headerText = document.getElementById('dynamic-text');
    if (headerText) {
        const labels = {
            'create': "| Register New Student",
            'read': "| View Students",
            'update': "| Update Student Records",
            'delete': "| Remove Students Records"
        };
        headerText.innerHTML = labels[id] || "| Register New Student <br/> | View Students <br/> | Update Student Records <br/> | Remove Students Records"; [1]
    }
}

// Logo Toggle Logic: Specifically targets the navigation buttons container 
document.addEventListener('DOMContentLoaded', () => {
    const logoToggle = document.getElementById('logoToggle');
    const navContainer = document.getElementById('navContainer');

    if (logoToggle && navContainer) {
        logoToggle.addEventListener('click', () => {
            // Toggles the 'nav-hidden' class to slide buttons up/down 
            navContainer.classList.toggle('nav-hidden');
        });
    }
});

// Input validation: Prevents leading spaces or double spaces 
document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('keydown', function(e) {
        if (e.keyCode === 32 && (this.value.length === 0 || this.value.endsWith(' '))) {
            e.preventDefault();
        }
    });
});