async function editFormHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/') [
    window.location.toString().split('/').length-1]
    const title = document.querySelector('input[name="edit-post-title"]').value;
    const response = await fetch(`/api/subjects/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
        }),
        headers: {
            'Content-Type':'application/json'
        }
       
  })
     if(response.ok) {
     document.location.replace('/');
     } else {
      alert(response.statusText);
 }
} 

async function deleteFormHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/') [
        window.location.toString().split('/').length-1]
        const title = document.querySelector('input[name="edit-post-title"]').value;
        const response = await fetch(`/api/subjects/${id}`, {
            method:'DELETE',
        })
        if(response.ok) {
            document.location.replace('/');
        }else{
            alert(response.statusText);
        }
        
    }


  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
  document.querySelector('#delete-subject').addEventListener('click',deleteFormHandler)