const express = require('express');
const { engine } = require('express-handlebars');
require('dotenv').configure();

const port = process.env.PORT;
const app = express();

app.get('/', (req, res) => {
	res.send('Yoh, niaje');
});

app.listen(port, () => {
	console.log(`Server started successfuly on http://localhost:${port}`);
});

