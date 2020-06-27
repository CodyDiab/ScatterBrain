var addResourceModal = document.querySelector("#add-resource-modal");
var editResourceModal = document.querySelector("#edit-resource-modal");
var addResource = document.querySelector("#add-resource");
var closeAddResource = document.querySelector("#close-add-resource");
var editResource = document.querySelector("#edit-resource");
var closeEditResource = document.querySelector("#close-edit-resource");

openModal = (modal) => {
    modal.style.display="block";
}

closeModal =(modal) => {
    modal.style.display="none";
}
addResource.onclick= () => {
    openModal(addResourceModal)
}
closeAddResource.onclick = () => {
    closeModal(addResourceModal)
}
// editResource.onclick= () => {
//     openModal(editResourceModal)
// }
// closeEditResource.onclick = () => {
//     closeModal(editResourceModal)
// }