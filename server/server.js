const express = require("express")
const cors = require("cors")

const app = express()


//middleware

app.use(cors());

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

//router
const router = require("./src/routes/games.js")
app.use('/api/games', router)


app.use("/Images", express.static("./Images"))




const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)

})

