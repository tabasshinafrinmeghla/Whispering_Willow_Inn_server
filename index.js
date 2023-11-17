const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

const categories = require('./Data/Catagories.json');

const rooms = require('./Data/Room.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Whispering Willow Inn Server is running ')
})
app.get('/categories', (req, res) => {
  res.send(categories);
})

/**
 * all rooms loaded*/

app.get('/rooms', (req, res) => {
  res.send(rooms);
})

/**
 * individual rooms we can get
 * */
app.get('/rooms/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectNews = rooms.find(n => n._id === id);
  res.send(selectNews);
})

/**
 * specific rooms
 * */

app.get('/categories/:id', (req, res) => {
  const id = parseInt(req.params.id)
  console.log(id)
  if (id === 0) {
    res.send(rooms)
  }
  else {
    const categoryNews = rooms.filter(n => parseInt(n.category_id) === id);
    res.send(categoryNews);
  }

})

app.listen(port, () => {
  console.log(`Narrative News Network is running ${port}`)
})



