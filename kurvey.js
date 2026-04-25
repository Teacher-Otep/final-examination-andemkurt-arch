// Requirement 4: Show section and update header text
function showSection(id) {
    // Hide everything: forms AND the home card
    const all = document.querySelectorAll('.content, .homecontent');
    all.forEach(s => s.style.display = 'none');

    // Show only the selected form/card
    const target = document.getElementById(id);
    if (target) target.style.display = 'block';

    // Requirement 4: Update header to show ONLY the relevant sentence
    const headerText = document.getElementById('dynamic-text');
    if (headerText) {
        const labels = {
            'create': "| Register New Student",
            'read': "| View Students",
            'update': "| Update Student Records",
            'delete': "| Remove Students Records"
        };
        // If 'home' is shown, we show all four; otherwise, just the one.
        headerText.innerHTML = labels[id] || `| Register New Student <br/> | View Students <br/> | Update Student Records <br/> | Remove Students Records`;
    }
}

// Function to reset back to Home (Call this after database actions)
function resetPortal() {
    showSection('home');
}

// Requirement 2: Logo Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const logoToggle = document.getElementById('logoToggle');
    const navContainer = document.getElementById('navContainer');

    if (logoToggle && navContainer) {
        logoToggle.addEventListener('click', () => {
            navContainer.classList.toggle('nav-hidden');
        });
    }
});

// Requirement 5: Spacebar Feedback (Visual shake)
document.querySelectorAll('.field').forEach(input => {
    input.addEventListener('keydown', function(e) {
        if (e.keyCode === 32 && (this.value.length === 0 || this.value.endsWith(' '))) {
            e.preventDefault();
            this.classList.add('shake');
            setTimeout(() => this.classList.remove('shake'), 400);
        }
    });
});