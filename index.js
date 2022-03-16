'use strict'

const app = require('express')(),
      http = require('http'),
      server = http.createServer(app),
      io = require('socket.io')(server),
      PORT = process.env.PORT || 8080,
      publicDir= `${__dirname}/public`;


app.listen(PORT, () => {
  console.log(`Iniciando Express y Socket.IO en http://localhost:${PORT}`);
})

app
  .get('/', (req , res) => {
    res.sendFile(`${publicDir}/client.html`)
  })
  .get('/streaming' , (req , res) => {
    res.sendFile(`${publicDir}/server.html`)
  })


io.on('connection', (socket) => {
  socket.broadcast.emit('new user', {message: 'ha entrado un usuario al Chat'})
    
})