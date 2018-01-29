const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4500;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

const sessionConfig = {
    saveUninitialized: true,
    secret: 'sessionSecret',
    resave: false,
    name: 'session',
    rolling: true,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 360000,
    }
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('myyyseeecreeeet'));
app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, 'dist')));

require('./server/config/database');
require('./server/config/routes')(app);

app.use('/api', require('./server/config/routes'));
app.use('/auth', require('./server/config/routes'));



app.listen(port, () => console.log(`express listening on port ${ port }`));