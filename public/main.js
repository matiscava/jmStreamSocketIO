((d, io) => {
  'use strict'
  let startCamera = false;
  const socketIO = io(),
        video = d.querySelector('#video'),
        canvas = d.querySelector('#canvas'),
        context = canvas.getContext('2d');
  navigator.streaming = ( 
          navigator.getUserMedia || 
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia ||
          navigator.msGetUserMedia
         )
  navigator.streaming({
    video: true,
    audio: true
  }, (stream) => {
    startCamera = true;
    video.src = window.URL.createObjectURL(stream)
  }, (err) => {
    alert('error al acceder a la camara web: '+err)
  })
} )(document, io)