function showSection(id) {
    const all = document.querySelectorAll('.content, .homecontent');
    all.forEach(s => s.style.display = 'none');

    const target = document.getElementById(id);
    if (target) {
        target.style.display = 'block';
    }

    const headerText = document.getElementById('dynamic-text');
    if (headerText) {
        if (id === 'create') {
            headerText.innerHTML = "| Register New Student";
        } 
        else if (id === 'read') {
            headerText.innerHTML = "| View Students";
        } 
        else if (id === 'update') {
            headerText.innerHTML = "| Update Student Records";
        } 
        else if (id === 'delete') {
            headerText.innerHTML = "| Remove Students Records";
        }
        else {
            headerText.innerHTML = "| Register New Student <br/> | View Students <br/> | Update Student Records <br/> | Remove Students Records";
        }
    }
}

// Logo click resets everything
document.getElementById('logo').addEventListener('click', function() {
    showSection('home');
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.style.display = 'flex';
});

// Spacebar validation
document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('keydown', function(e) {
        if (e.keyCode === 32 && this.value.length === 0) {
            e.preventDefault();
        }
        if (e.keyCode === 32 && this.value.endsWith(' ')) {
            e.preventDefault();
        }
    });
});

function resetPortal() {
  
    const navbar = document.querySelector('.main-wrapper');
    const homeCard = document.getElementById('home');
    const dynamicText = document.getElementById('dynamic-text');

   
    if (navbar.style.display !== 'none') {
    
        navbar.style.display = 'none';
        
       
    } else {
      
        navbar.style.display = 'block';
        
    
        homeCard.style.display = 'block';

      
        dynamicText.innerHTML = `
            | Register New Student <br/>
            | View Students <br/>
            | Update Student Records <br/>
            | Remove Students Records
        `;
    }
}