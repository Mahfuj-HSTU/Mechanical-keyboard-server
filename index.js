require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

//* middleware
app.use(cors());
app.use(express.json());

// api's

app.get('/', (req, res) => {
  res.send('Mechanicl Keybord server is running...');
});

app.listen(port, () => {
  console.log(`Mechanical Keyboard server is running on ${port}`);
});
