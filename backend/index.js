const express = require('express')
const app = express()
const port = 5000
const router = require('./routes/auth')
const connectDb = require('./db')
var cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:3000',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};


app.use(cors(corsOptions))
app.use(express.json());

app.use("/api/auth", router)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
})

