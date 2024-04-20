const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json());

//Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/payment', require('./routes/payment'));
app.use('/api/sms', require('./routes/sms'));

app.listen(port, () => {
  console.log(`codeswear backend is listening on http://localhost:${port}`)
})
