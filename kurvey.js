function showSection(id) {
    // Hide all cards
    const all = document.querySelectorAll('.content, .homecontent');
    all.forEach(s => s.style.display = 'none');

    // Show selected card
    const target = document.getElementById(id);
    if (target) target.style.display = 'block';

    // Requirement 4: Handle sentence visibility
    const lines = ['create', 'read', 'update', 'delete'];
    lines.forEach(line => {
        const el = document.getElementById('line-' + line);
        if (el) {
            el.style.display = (line === id) ? 'block' : 'none';
        }
    });
}

// Requirement 2: Logo Toggle
document.addEventListener('DOMContentLoaded', () => {
    const logoToggle = document.getElementById('logoToggle');
    const navContainer = document.getElementById('navContainer');

    if (logoToggle && navContainer) {
        logoToggle.addEventListener('click', () => {
            navContainer.classList.toggle('nav-hidden');
        });
    }
});

// Requirement 5: Visual feedback for spacebar abuse
document.querySelectorAll('.field').forEach(input => {
    input.addEventListener('keydown', function(e) {
        if (e.keyCode === 32 && (this.value.length === 0 || this.value.endsWith(' '))) {
            e.preventDefault();
            // Requirement 5: Visual feedback
            this.classList.add('shake');
            setTimeout(() => this.classList.remove('shake'), 400);
        }
    });
});