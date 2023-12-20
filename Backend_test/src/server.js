import express from 'express';
import cors from 'cors';
import path from 'path';
import route from './routes/route.js';
import bodyParser from 'body-parser';
import Mongoose from './db/DB.js'
import cookieParser from 'cookie-parser';
const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
// app.set('view engine', 'html');
// app.use(express.static(path.join('public')));


Mongoose("testdata");

app.get('/', (req, res) => {
    res.send('Welcome');
});


app.use('/server', route)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
