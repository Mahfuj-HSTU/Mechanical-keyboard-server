const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./Utilities/dbConnect');
const productRoutes = require('./Routes/productRoutes');

const app = express();
const port = process.env.PORT || 5000;

//* middleware
app.use(cors());
app.use(express.json());

//* api's
app.use('/api/v1/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Mechanical Keyboard server is running...');
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Mechanical Keyboard server is running on ${port}`);
    });
  })
  .catch((err) => {
    console.error(
      'Failed to connect to the database. Server not started.',
      err
    );
  });
