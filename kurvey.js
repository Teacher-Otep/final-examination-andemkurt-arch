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
    document.getElementById('logo').addEventListener('click', () => {
        showSection('home');
    });

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