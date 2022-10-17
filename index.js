import express from 'express';
import { engine } from 'express-handlebars';
import * as dotenv from "dotenv";
import {DataTypes, Sequelize} from 'sequelize'
dotenv.config();

const port = process.env.PORT;
const app = express();
const sequelize = new Sequelize("postgresql://more:iam2001@@localhost:5432/cads")
const user = sequelize.define
("user",{
	name:DataTypes.STRING,
	password:DataTypes.STRING
})
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
	res.render('index', { title: 'CADS | A Digital Lending Solution'});
});

app.post('/register',async(req,res) => {
	await user.create({
		name:req.body.name,
		password:req.body.password
	})
	res.redirect("/login")
})

app.get('/login', (req, res) =>{
	res.render('login', {title: 'Login'})
}) 

app.get('/register', async(req, res) =>{
	
	res.render('register', {title: 'register'})
})

app.listen(port, async() => {
	try{
		await sequelize.authenticate()
		await user.sync({force:false})
		console.log(`Server started successfuly on http://localhost:${port}`);
	}
	catch(err){
		console.log(err);
	}
	
});


