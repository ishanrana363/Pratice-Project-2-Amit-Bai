const express = require("express")
const app = express()
const routes = require("./src/routes/api")

//security middleware

const ratelimit = require("express-rate-limit")
const helmet = require("helmet")
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean")
const hpp = require("hpp")
const cors = require("cors")
const morgan = require("morgan")

// Security Middleware Implement
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use(cors())
app.use(morgan("dev"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// ratelimit implement

const limiter = ratelimit({
    windowMs : 15 * 60 *1000,
    max : 3000
})

app.use(limiter)


// Database connnect 


app.use("/api/v1/",routes)



module.exports = app