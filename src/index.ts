import express from 'express'
const app = express()
const port = 8080 // default port to listen

app.use(express.static(__dirname + '/public'))

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${ port }`)
})
