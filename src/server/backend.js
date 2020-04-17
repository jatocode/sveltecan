const express = require('express')
var cors = require('cors');
const can = require('socketcan');
const app = express()
const port = 4000

app.use(cors());
var channel = 'something can'; // can.createRawChannel("vcan0", true);
app.get('/', (req, res) => res.send(JSON.stringify(channel)));

app.listen(port, () => console.log(`socket can listening at http://localhost:${port}`))
