'use strict';
const url = 'https://10.114.34.24/app'; // change url when uploading to server

// select existing html elements
const addForm = document.querySelector('#addPhotoForm');
const userList = document.querySelector('.add-owner');



// submit add cat form
addForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const fd = new FormData(addForm);
  const fetchOptions = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
    body: fd,
  };
  const response = await fetch(url + '/photo', fetchOptions);
  const json = await response.json();
  alert(json.message);
  location.href = 'front.html';
});