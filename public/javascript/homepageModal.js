var sbjModal = document.querySelector("#subject-modal");
var addSbj = document.querySelector("#add-subject");
var closeSbj = document.querySelector("#close-subject-modal");
var editSbjModal = document.querySelector(".edit-subject-modal");
var editSbj = document.querySelector(".edit-subject");
var closeEditSbj = document.querySelector(".close-edit-subject");



openModal = (modal) => {
    modal.style.display="block";
}

closeModal =(modal) => {
    modal.style.display="none";
}

addSbj.onclick = ()=> {
 openModal(sbjModal)
}
closeSbj.onclick =() => {
    closeModal(sbjModal)
}
// editSbj.onclick = () => {
//     openModal(editSbjModal)
// }
// closeEditSbj.onclick = () => {
//     closeModal(editSbjModal)
// }

