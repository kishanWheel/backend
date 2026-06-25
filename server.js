const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const connect= require('./config/database');
dotenv.config();

const app = express();



app.use(cors());
app.use(express.json());
app.use('/api/auth',authRoutes);

const PORT =3000;

connect();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/message', (req, res) => {
  res.json({
    message: 'Hello from Backend!'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});