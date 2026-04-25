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
        headerText.innerHTML = labels[id] || "| Register New Student <br/> | View Students <br/> | Update Student Records <br/> | Remove Students Records";
    }
}

function resetPortal() {
    const navbar = document.querySelector('.main-wrapper');
    const headerText = document.getElementById('dynamic-text');

    if (navbar.style.display !== 'none') {
        navbar.style.display = 'none';
        showSection('home');
    } else {
        navbar.style.display = 'block';
        showSection('home');
        headerText.innerHTML = "| Register New Student <br/> | View Students <br/> | Update Student Records <br/> | Remove Students Records";
    }
}

document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('keydown', function(e) {
        if (e.keyCode === 32 && (this.value.length === 0 || this.value.endsWith(' '))) {
            e.preventDefault();
        }
    });
});