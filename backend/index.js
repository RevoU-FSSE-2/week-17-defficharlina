require('dotenv').config()

const express = require('express')
const router = require('./routes');
const useMiddleware = require('./middleware')
const functions = require('firebase-functions')

const app = express()

useMiddleware(app)
app.use(express.json())
app.use(router)


app.use((err, req, res, next) => {
  console.log(err, `<=================== error ==================`);
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors
  })
})

/*const SERVER_PORT = 5433

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`)
})*/
exports.week_17_defficharlina = functions.https.onRequest(app) 

