const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser');


const app = express()


//middleware

app.use(cors());    

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.json());

//router
const gameRouter = require("./src/routes/games.js")
const userRouter = require("./src/routes/user.js")
app.use('/api/games', gameRouter)
app.use('/api/user', userRouter); 


app.use("/Images", express.static("./Images"))




const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)

})

