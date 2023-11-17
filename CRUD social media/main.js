let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let posts = document.getElementById('posts');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

let formValidation = () => {
    if (input.value === '') {
        msg.innerHTML = 'Please fill in the field';
        console.log("form not submitted");
        setTimeout(() => msg.remove(), 3000);
    } else {
        console.log("form submitted");
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = () => {
    posts.innerHTML +=`
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
  `;
}

let editPost = (e) => {
    let parent = e.parentNode.parentNode;
    let child = e.parentNode.parentNode.childNodes[1];
    let editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = child.textContent;
    parent.insertBefore(editInput, child);
    parent.removeChild(child);
    e.classList.add('fa-save');
    e.classList.remove('fa-edit');
    e.setAttribute('onClick', 'savePost(this)');
}

let savePost = (e) => {
    let parent = e.parentNode.parentNode;
    let child = e.parentNode.parentNode.childNodes[1];
    let p = document.createElement('p');
    p.textContent = child.value;
    parent.insertBefore(p, child);
    parent.removeChild(child);
    e.classList.add('fa-edit');
    e.classList.remove('fa-save');
    e.setAttribute('onClick', 'editPost(this)');
}

let deletePost = (e) => {
    let parent = e.parentNode.parentNode;
    parent.remove();
}

