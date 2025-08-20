import express from "express" // 'import' instead of 'required'
import "dotenv/config"

const app = express()
const port: number = 3000
const secret: string | undefined = process.env.MY_GLOBAL_TEST_SECRET

// defines an endpoint (/ = index)
app.get("/", (req, res) => {
  res.status(200).send("Hello World!")
})

// start server on 'port' variable
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
  console.log(secret) // never log sensitive information -> only for debugging
})
