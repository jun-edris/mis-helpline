-require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/user');
const superAdminRoute = require('./routes/superAdmin');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use('/api', userRoute);
app.use('/api', superAdminRoute);

// const transporter = nodemailer.createTransport({
// 	host: 'smtp.gmail.com',
// 	port: 465,
// 	secure: true,
// 	requireTLS: true,
// 	auth: {
// 		user: process.env.MAIL_USER,
// 		pass: process.env.MAIL_PASS,
// 	},
// });

// transporter.sendMail({
// 	from: '"MIS Helpline" <mis.helpline@bisu.edu.ph>', // sender address
// 	to: process.env.MAIL_USER, // list of receivers
// 	subject: "MIS Approve Request", // Subject line
// 	text: "There is a new article. It's about sending emails, check it out!", // plain text body
// 	html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
//   }).then(info => {
// 	console.log({info});
//   }).catch(console.error);
// transporter.verify().then(console.log).catch(console.error);

mongoose
	.connect(process.env.ATLAS_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(port, () => {
			console.log(`API listening on localhost:${port}`);
		});
	})
	.catch((err) => {
		console.log(err.message);
	});
