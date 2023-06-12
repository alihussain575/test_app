const express = require('express')

const app = express()

app.get('/', function (req, res) {
  res.send({
    meassage : 'Tanzania is a bad person'
  })
})


app.listen(4000 , ()=>{
    console.log('running on port 4000 and workes amazinly!')
})