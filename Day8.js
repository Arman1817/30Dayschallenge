/*Create an Express route that throws an error if the request parameter "number" is not a positive integer. 
Implement an error handling middleware to catch and handle this specific error, 
returning a custom error message and a 400 Bad Request status.*/

const express = require('express');
const app = express();


app.use(express.json());


app.get('/check-number/:number', (req, res, next) => {
  const number = parseInt(req.params.number);

  
  if (Number.isNaN(number) || number <= 0 || !Number.isInteger(number)) {
    const err = new Error('The parameter "number" must be a positive integer');
    err.status = 400;
    return next(err); 
  }


  res.send(`The number ${number} is a positive integer.`);
});


app.use((err, req, res, next) => {

  if (err.status === 400) {
   
    res.status(400).json({ error: err.message });
  } else {
 
    next(err);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
