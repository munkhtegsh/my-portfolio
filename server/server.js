const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(`${__dirname}./../public`));
const port = 4001;
app.listen(port, () => console.log(`Server is running up on: ${port}`))