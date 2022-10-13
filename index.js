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
	gender:DataTypes.STRING,
	Id:{primaryKey:true,type:DataTypes.INTEGER},
	balance:DataTypes.INTEGER
})
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

app.get('/register', async(req, res) =>{
	await user.create({
		name:"Forceout",
		gender:"Male",
		Id:32416789,
		balance:2000
	})
	res.render('register', {title: 'Login'})
})

app.listen(port, async() => {
	try{
		await sequelize.authenticate()
		await user.sync({force:true})
		console.log(`Server started successfuly on http://localhost:${port}`);
	}
	catch(err){
		console.log(err);
	}
	
});


