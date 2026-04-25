function showSection(id) {
    const all = document.querySelectorAll('.content, .homecontent');
    all.forEach(s => s.style.display = 'none');

    const target = document.getElementById(id);
    if (target) target.style.display = 'block';

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
    // FIXED LOGO LOGIC
    document.getElementById('logo').addEventListener('click', () => {
        // 1. Make sure the navigation buttons are visible
        const navbar = document.querySelector('.navbar');
        if (navbar) navbar.style.display = 'flex';

        // 2. Run the showSection to reset the card and text
        showSection('home');
    });

    // Make the Home Card itself clickable to reset (as you mentioned)
    const homeCard = document.getElementById('home');
    if (homeCard) {
        homeCard.addEventListener('click', () => {
            showSection('home');
        });
    }

    const clrBtn = document.getElementById('clrbtn');
    if (clrBtn) {
        clrBtn.addEventListener('click', () => {
            const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
            inputs.forEach(i => i.value = '');
        });
    }

    if (window.location.search.includes('status')) {
        setTimeout(() => {
            window.history.replaceState({}, document.title, window.location.pathname);
        }, 3000);
    }
});