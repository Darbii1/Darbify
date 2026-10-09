require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', app: 'Darbify' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Darbify server running on ${PORT}`));