const express = require('express');
const app = express()
const port = 80;
app.set('view engine', 'ejs')

//Router Imports
// const userRoute = require('./routers/userRoute')

app.get('/', (req, res) => {
    res.render('index')
})

app.use('/assets', express.static(__dirname + '/assets'));

// app.use('/users', userRoute)

// app.listen(3000)
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });