
const express = require('express');
const app = express();
const logRequest = (req, res, next) => {

  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  next();
};
app.use(logRequest);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
