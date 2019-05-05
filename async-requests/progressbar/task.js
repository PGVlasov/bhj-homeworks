const progress = document.getElementById('progress');
const form = document.getElementById('form');
const formData = new FormData(form);

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const form = document.getElementById('form');
    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.onprogress = function (e) {

        progress.value = e.loaded / 1000000;
    }
    xhr.send(formData);

})