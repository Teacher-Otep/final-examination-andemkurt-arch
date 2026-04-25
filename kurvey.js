

 
function showSection(id) {
  

    const all = document.querySelectorAll('.content, .homecontent');
    all.forEach(s => s.style.display = 'none');


    const target = document.getElementById(id);
    if (target) {
        target.style.display = 'block';
    }

   
    const headerText = document.getElementById('dynamic-text');
    if (!headerText) return;

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
    
    else if (id === 'home') {
        headerText.innerHTML = "| Register New Student <br/> | View Students <br/> | Update Student Records <br/> | Remove Students Records";
    }
}


document.getElementById('logo').addEventListener('click', function() {
    const headerText = document.getElementById('dynamic-text');
    
   
    if (headerText) {
        headerText.innerHTML = "| Register New Student <br/> | View Students <br/> | Update Student Records <br/> | Remove Students Records";
    }

   
    const navbar = document.querySelector('.navbar');
    const home = document.getElementById('home');
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'flex';
        showSection('home');
    } else {
        navbar.style.display = 'none';
        document.querySelectorAll('.content').forEach(c => c.style.display = 'none');
        if (home) home.style.display = 'block';
    }
});


document.getElementById('clrbtn').addEventListener('click', function() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
    inputs.forEach(i => i.value = ''); 
});


function showFeedback(element) {
    element.classList.add('shake');
    const originalPlaceholder = element.placeholder;
    element.placeholder = "Input required (not spaces!)";
    
    setTimeout(() => {
        element.classList.add('error-border'); 
    }, 100);

    setTimeout(() => {
        element.classList.remove('shake');
        element.placeholder = originalPlaceholder;
    }, 400);
}


document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('keydown', function(e) {
       
        if (e.keyCode === 32 && this.value.length === 0) {
            e.preventDefault();
            showFeedback(this);
        }
        
     
        if (e.keyCode === 32 && this.value.endsWith(' ')) {
            e.preventDefault();
            showFeedback(this);
        }
    });

   
    input.addEventListener('input', function() {
        if (this.value.length > 0) {
            this.classList.remove('error-border');
        }
    });
});