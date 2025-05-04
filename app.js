const express = require('express');
const cors = require('cors');
const resultsRouter = require('./routes/results');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/results', resultsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
