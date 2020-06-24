var modal = document.querySelector("#subject-modal");
var addBtn = document.querySelector("#add-button");
var closeX = document.getElementsByClassName("close")[0];

addBtn.onclick = () => {
    modal.style.display="block";
}

closeX.onclick = () => {
    modal.style.display= "none";
}