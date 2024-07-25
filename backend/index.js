const express = require('express')
const cors = require('cors')
const router = require("./routes")
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/upload`));
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}))
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/", router)


const db = require('./dbconnection')

app.listen(4003, () => {
  console.log("server started")
})