const express = require("express")
const cors = require("cors")

const app = express()

let corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.json({ message: "hello API" })
})

const PORT = process.env.PORT || 5173

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);

})

