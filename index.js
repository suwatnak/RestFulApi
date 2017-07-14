import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res)=> {
  res.send('Hello World')
})

app.listen(PORT, ()=>{
    console.log('Running on http://localhost:' + PORT);
})