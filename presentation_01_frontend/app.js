const button = document.querySelector(".my-custom-btn");

const showModal = (title, content) => {
    const modalTitle = document.querySelector("h5.modal-title");
    const modalText = document.getElementById("modal-feedback");

    modalTitle.innerText = title;
    modalText.innerText = content;
}


button.addEventListener("click", () => {
    const username  = document.getElementById("username").value;
    const email     = document.getElementById("email").value;
    const password  = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    const aboutme   = document.getElementById("aboutme").value;
    
    if (password !== password2) {
        showModal("Error", "Passwords don't match");
    }
    else {
        const text = `Created user ${username} with email ${email}`; 
        showModal("Success", text);
    }
})