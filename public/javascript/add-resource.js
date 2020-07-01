async function newFormHandler(event) {
    event.preventDefault();
    const subject_id = window.location.toString().split('/')[
        window.location.toString().split('/').length-1];
    const title = document.querySelector('input[name="post-title"]').value;
    const post_url = document.querySelector('input[name="post-url"]').value;
    const notes = document.querySelector('textarea[name="notes"]').value

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_url,
            notes,
            subject_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        modal=document.getElementById('add-resource-modal')
        modal.style.display="none"
        document.location.replace(`/posts/${subject_id}`);
    }else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit',newFormHandler);