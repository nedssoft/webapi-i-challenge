const express = require('express')
const server = express()
const cors = require('cors')
const { router } = require('./routes')

server.use(express.json());
server.use(cors())
server.use('/api', router)
server.get('/', (req, res) => {
  return res.status(200).json({message: 'The server is running'})
})
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server listening to port ${PORT}`)
})
