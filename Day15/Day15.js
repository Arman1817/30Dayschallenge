const express = require('express');
const loggingMiddleware1 = require('./loggingMiddleware1');
const app = express();

app.use(express.json());
app.use(loggingMiddleware1);

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello Arman");
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});