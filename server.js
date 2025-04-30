require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const v1Routes = require('./src/routes/v1/index');

const app = express();
const PORT = process.env.PORT || 7777;
app.use(bodyParser.json());

app.use('/api/v1', v1Routes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
