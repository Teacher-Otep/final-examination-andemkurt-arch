// 1. Unified function to switch sections
function showSection(id) {
    // Hide everything first
    const all = document.querySelectorAll('.content, .homecontent');
    all.forEach(s => s.style.display = 'none');

    // Show the target section
    const target = document.getElementById(id);
    if (target) {
        target.style.display = 'block';
    }

    // Update the Header Text based on the ID
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

// 2. The Reset Logic (This is what fixes the "Not doing anything" problem)
function forceHomeReset() {
    const navbar = document.querySelector('.navbar');
    
    // Force the navbar to be visible no matter what
    if (navbar) {
        navbar.style.display = 'flex';
    }
    
    // Reset the view to the Home management card
    showSection('home');
}

document.addEventListener('DOMContentLoaded', () => {
    // FIX: Attach listener directly to the logo image
    const logoImg = document.getElementById('logo');
    if (logoImg) {
        logoImg.addEventListener('click', (e) => {
            e.preventDefault(); // Stop any default behavior
            forceHomeReset();
        });
    }

    // FIX: Attach listener to the Home Management Card itself
    const homeCard = document.getElementById('home');
    if (homeCard) {
        homeCard.addEventListener('click', forceHomeReset);
    }

    // Handle Clear Button
    const clrBtn = document.getElementById('clrbtn');
    if (clrBtn) {
        clrBtn.addEventListener('click', () => {
            const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
            inputs.forEach(i => i.value = '');
        });
    }

    // Auto-clean URL after database operations
    if (window.location.search.includes('status')) {
        setTimeout(() => {
            window.history.replaceState({}, document.title, window.location.pathname);
        }, 3000);
    }
});