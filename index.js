import express from 'express';
import { engine } from 'express-handlebars';
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.render('index', { title: 'CADS | A Digital Lending Solution'});
});

app.get('/get-started', (req, res) => {
	res.render('register', { title: 'Account Creation'})
})

app.get('/login', (req, res) =>{
	res.render('login', {title: 'Login'})
}) 

app.get('/register', (req, res) =>{
	res.render('register', {title: 'Login'})
})

app.listen(port, () => {
	console.log(`Server started successfuly on http://localhost:${port}`);
});


