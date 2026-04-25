function showSection(id) {
    
    const all = document.querySelectorAll('.content, .homecontent');
    all.forEach(s => s.style.display = 'none');

   
    document.getElementById(id).style.display = 'block';

   
    const headerText = document.getElementById('dynamic-text');

    if (id === 'read') {
        headerText.innerHTML = "| View Students";
    } 
    else if (id === 'update') {
        headerText.innerHTML = "| Update Student Records";
    } 
    else if (id === 'delete') {
        headerText.innerHTML = "| Remove Students Records";
    } 
    else if (id === 'create') {
        headerText.innerHTML = "| Register New Student";
    }
    else {
   
    headerText.innerHTML = "| Register New Student <br/> | View Students <br/> | Update Student Records <br/> | Remove Students Records";
}
}



document.getElementById('logo').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    const home = document.getElementById('home');
    const contentSections = document.querySelectorAll('.content');
    

        const headerText = document.getElementById('dynamic-text');
        headerText.innerHTML = "| Register New Student <br/> | View Students <br/> | Update Student Records <br/> | Remove Students Records";
      

    if (navbar.style.display === 'none') {
        
        navbar.style.display = 'flex';
        showSection('home');
    } else {
      
        navbar.style.display = 'none';
        contentSections.forEach(c => c.style.display = 'none');
        home.style.display = 'block';
    }
});


document.getElementById('clrbtn').addEventListener('click', function() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
    inputs.forEach(i => i.value = ''); 
});

// --- VIRTUAL FEEDBACK LOGIC ---

// 1. Function to trigger the visual feedback
function showFeedback(element) {
    element.classList.add('shake');
    // Optional: temporary placeholder change to alert the user
    const originalPlaceholder = element.placeholder;
    element.placeholder = "Input required (not spaces!)";
    
    setTimeout(() => {
        element.classList.add('error-border'); // Keeps a subtle red hint
    }, 100);

    setTimeout(() => {
        element.classList.remove('shake');
        element.placeholder = originalPlaceholder;
    }, 400);
}

// 2. Add listeners to all text inputs to block leading/excessive spaces
document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('keydown', function(e) {
        // Prevent space if the input is empty (e.keyCode 32 is Space)
        if (e.keyCode === 32 && this.value.length === 0) {
            e.preventDefault();
            showFeedback(this);
        }
        
        // Optional: Prevent double spaces (prevents "John  Doe")
        if (e.keyCode === 32 && this.value.endsWith(' ')) {
            e.preventDefault();
            showFeedback(this);
        }
    });

    // Remove the red hint once they start typing correctly
    input.addEventListener('input', function() {
        if (this.value.length > 0) {
            this.classList.remove('error-border');
        }
    });
});