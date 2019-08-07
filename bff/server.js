const express = require('express');
const axios = require('axios');
var cors = require('cors');
const app = express();

app.use(cors());

app.get('/drivers', async (req, res) => {
  const { latitude, longitude, count } = req.query;
  try {
    const result = await axios.get(`https://qa-interview-test.qa.splytech.io/api/drivers?latitude=${latitude}&longitude=${longitude}&count=${count}`);
    res.status(200).send(result.data);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.listen(4000, function () {
  console.log('Splyt challange bff is running on port 4000!');
});