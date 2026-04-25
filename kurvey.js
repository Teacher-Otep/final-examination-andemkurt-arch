function showSection(id) {
    const all = document.querySelectorAll('.content, .homecontent');
    all.forEach(s => s.style.display = 'none');

    const target = document.getElementById(id);
    if (target) target.style.display = 'block';

    const headerText = document.getElementById('dynamic-text');
    if (headerText) {
        const labels = {
            'create': "| Register New Student",
            'read': "| View Students",
            'update': "| Update Student Records",
            'delete': "| Remove Students Records"
        };
        headerText.innerHTML = labels[id] || `| Register New Student <br/> | View Students <br/> | Update Student Records <br/> | Remove Students Records`;
    }
}

function resetPortal() {
    // 1. Show the main card again
    const homeSection = document.getElementById('home');
    if (homeSection) homeSection.style.display = 'block';

    // 2. Hide all other operational sections
    const sections = document.querySelectorAll('.content');
    sections.forEach(s => s.style.display = 'none');

    // 3. Ensure the buttons (main-wrapper) are visible
    const navbar = document.querySelector('.main-wrapper');
    if (navbar) navbar.style.display = 'block';

    // 4. Reset header text
    const headerText = document.getElementById('dynamic-text');
    if (headerText) {
        headerText.innerHTML = `| Register New Student <br/> | View Students <br/> | Update Student Records <br/> | Remove Students Records`;
    }
}

// Spacebar validation
document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('keydown', function(e) {
        if (e.keyCode === 32 && (this.value.length === 0 || this.value.endsWith(' '))) {
            e.preventDefault();
        }
    });
});