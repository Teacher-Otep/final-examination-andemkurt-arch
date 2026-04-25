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
        headerText.innerHTML = labels[id];
    }
}


function resetPortal() {
   
    const homeSection = document.getElementById('home');
    if (homeSection) homeSection.style.display = 'block';

    
    const sections = document.querySelectorAll('.content');
    sections.forEach(s => s.style.display = 'none');

    
    const headerText = document.getElementById('dynamic-text');
    if (headerText) {
        headerText.innerHTML = `
            | Register New Student <br/> 
            | View Students <br/> 
            | Update Student Records <br/> 
            | Remove Students Records`;
    }
}


document.querySelectorAll('.field').forEach(input => {
    input.addEventListener('keydown', function(e) {
        if (e.keyCode === 32 && (this.value.length === 0 || this.value.endsWith(' '))) {
            e.preventDefault();
            this.classList.add('shake');
            setTimeout(() => this.classList.remove('shake'), 400);
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const logoToggle = document.getElementById('logoToggle');
    const navContainer = document.getElementById('navContainer');

    if (logoToggle && navContainer) {
        logoToggle.addEventListener('click', () => {
            navContainer.classList.toggle('nav-hidden');
        });
    }
});