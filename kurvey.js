function showSection(id) {
    // 1. Hide all content and home sections
    const all = document.querySelectorAll('.content, .homecontent');
    all.forEach(s => s.style.display = 'none');

    // 2. Show the specific section clicked
    const target = document.getElementById(id);
    if (target) target.style.display = 'block';

    // 3. Update the Header Text (Using the clean dictionary)
    const headerText = document.getElementById('dynamic-text');
    const labels = {
        'read': "| View Students",
        'update': "| Update Student Records",
        'delete': "| Remove Students Records",
        'create': "| Register New Student",
        'home': "| Register New Student <br/> | View Students <br/> | Update Student Records <br/> | Remove Students Records"
    };
    headerText.innerHTML = labels[id] || labels['home'];
}

document.addEventListener('DOMContentLoaded', () => {
    // THE WORKING TOGGLE LOGIC FROM YOUR FILE
    document.getElementById('logo').addEventListener('click', function() {
        const navbar = document.querySelector('.navbar');
        const home = document.getElementById('home');
        const contentSections = document.querySelectorAll('.content');
        const headerText = document.getElementById('dynamic-text');

        // Reset text to original state
        headerText.innerHTML = "| Register New Student <br/> | View Students <br/> | Update Student Records <br/> | Remove Students Records";

        if (navbar.style.display === 'none') {
            // Revert back: Show buttons and home management card
            navbar.style.display = 'flex';
            showSection('home');
        } else {
            // Hide buttons and all work sections, show ONLY the branding/home card
            navbar.style.display = 'none';
            contentSections.forEach(c => c.style.display = 'none');
            home.style.display = 'block';
        }
    });

    // Clear Button Logic
    const clrBtn = document.getElementById('clrbtn');
    if (clrBtn) {
        clrBtn.addEventListener('click', () => {
            const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
            inputs.forEach(i => i.value = '');
        });
    }

    // Auto-clean status from URL after 3 seconds
    if (window.location.search.includes('status')) {
        setTimeout(() => {
            window.history.replaceState({}, document.title, window.location.pathname);
        }, 3000);
    }
});