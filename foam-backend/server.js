import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';


import Foam from './dbFoamInfo.js';

// App config
const app = express();
const port = process.env.PORT || 8080;

const connection_url = 'mongo URL'

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// Api Endpoints
app.get('/', (req, res) => res.status(200).send('My API'));
app.get('/post', (req, res) => res.status(200).send('test'));

//send

//CARD HANDLING
app.post("/foam", (req, res) => {
    const dbFoamInfo = req.body;

    Foam.create(dbFoamInfo, (err, data) => {
        if (err) res.status(500).send(err.message);
        else res.status(201).send(data);
    })
});


//Recieve
//GET CARDS
app.get('/foam', (req, res) => {
    Foam.find((err, data) => {
        if (err) res.status(500).send(err);
        else res.status(200).send(data);
    })
});


// Listerner
app.listen(port, () => console.log(`listening on localhost: ${port}`));