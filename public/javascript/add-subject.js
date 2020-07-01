//const axios = require('axios');

async function newFormHandler(event) {
    
    event.preventDefault();
    
    const title = document.querySelector('input[name="subject-title"]').value;

   const response = await fetch(`/api/subjects`, {
    method: 'POST',
    body: JSON.stringify({
        title,
        
    }),
    headers: {
        'Content-Type': 'application/json'
    }
});

if(response.ok) {
    modal=document.getElementById('subject-modal')
    modal.style.display="none"
    document.location.replace('/');
}else {
    alert(response.statusText);
}

}

  document.querySelector('.new-subject-form').addEventListener('submit',newFormHandler)
