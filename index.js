const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const registerRoute = require('./routes/auth/register');
const loginRoute = require('./routes/auth/login');
const meRoute = require('./routes/auth/me');
const logoutRoute = require('./routes/auth/logout');
const verifyRoute = require('./routes/auth/verify');
const getblogRoute = require('./routes/blog/getblog');
const paymentRoute = require('./routes/payment/payment');
const app = express();
app.use(cors()); // Apply CORS globally
app.use(express.json());
app.use(cookieParser());
app.use(loginRoute);
app.use(meRoute);
app.use(registerRoute);
app.use(logoutRoute);
app.use(verifyRoute);
app.use(getblogRoute);
app.use(paymentRoute);
app.use(express.urlencoded({ extended: false }));
app.use(express.static('client/dist'));
app.get('*', (req, res) => {
    const myPath = path.resolve(__dirname, 'client', 'dist', 'index.html');
    console.log('__dirname', __dirname);
    console.log('MyPath:', myPath);
    return res.sendFile(myPath);
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
