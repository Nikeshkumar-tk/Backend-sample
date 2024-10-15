const express = require('express');

const app = express()


app.use(express.json())

app.get("/test", (req, res) => {
    // All the bussiness logic will come here

    res.send("Hello World")
})

app.post("/test", (req, res) => {
    // All the bussiness logic will come here
   console.log(req.body)
})

app.put("/test", (req, res) => {
    // All the bussiness logic will come here
}
)

app.listen(8000, () => {
    console.log('Server is running on port 8000')
})