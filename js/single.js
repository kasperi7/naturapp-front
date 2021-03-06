'use strict';

const url = 'https://10.114.34.24/app';

const getQParam = (param) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
};

// get id from address
const photoID = getQParam('id');

// select existing html elements
const img = document.querySelector('#image img');


const getPhoto = async (id) => {
  const fetchOptions = {
    headers: {
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  };
  const response = await fetch(url + '/photo/' + id, fetchOptions);
  const photo = await response.json();
  img.src = `${url}/${photo.Filename}`;
  console.log(photo.Location);
  if (!photo.Location || photo.Location === '[]') {
    console.log('no location');
  } else {
      addMarker(JSON.parse(photo.Location));
  }
  
};

getPhoto(photoID);