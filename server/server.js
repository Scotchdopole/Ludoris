const express = require("express")
const cors = require("cors")

const app = express()


//middleware

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

//router
const router = require("./src/routes/games")
app.use('/api/games', router)




const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)

})

