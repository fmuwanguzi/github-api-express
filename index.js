//modules
const express = require('express');
const axios = require('axios');

// create app
const app = express();

//Create a PORT(listen)
const PORT = process.env.PORT || 3000;

//create a HOME route
app.get('/', (req, res) => {

    //Access API endpoint from Github
    axios.get('https://api.github.com/users/fmuwanguzi')
    .then(response => {
        //Print inside of the terminal
       //console.log(response.data);
        const felixObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(felixObject);

        res.send(felixObject)
    });
});

//SEI1019 route
app.get('/nitish', (req, res) => {

    //Access API endpoint from Github
    axios.get('https://api.github.com/users/nitishdayal')
    .then(response => {
        //Print inside of the terminal
       //console.log(response.data);
        const nitishObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(nitishObject);

        res.send(nitishObject)
    });
});

//ashton
app.get('/ashton', (req, res) => {

    //Access API endpoint from Github
    axios.get('https://api.github.com/users/swolepenguin')
    .then(response => {
        //Print inside of the terminal
       //console.log(response.data);
        const ashtonObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(ashtonObject);

        res.send(ashtonObject)
    });
});

app.get('/jax', (req, res) => {

    //Access API endpoint from Github
    axios.get('https://api.github.com/users/jaxonnarramore')
    .then(response => {
        //Print inside of the terminal
       //console.log(response.data);
        const jaxObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(jaxObject);

        res.send(jaxObject)
    });
});

app.get('/amari', (req, res) => {

    //Access API endpoint from Github
    axios.get('https://api.github.com/users/marjames98')
    .then(response => {
        //Print inside of the terminal
       //console.log(response.data);
        const amariObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(amariObject);

        res.send(amariObject)
    });
});

//Listen for a PORT
app.listen(PORT, () =>{
    console.log(`you're vibing to the sounds on port ${PORT}`);
})