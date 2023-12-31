// ##### SERVER SETUP #####
    // importing express
    const express = require('express');
    // makes server
    const app = express();
    // designates port for app to run on
    const PORT = 5001;
    // points app to where content is located
    app.use(express.static('server/public'));
    // activates app
    app.listen(PORT, () => {
        console.log('listening on port', PORT)
    });
    // read json
    app.use(express.json())


// ##### WEBPAGE CONTENT #####
const artistListArray = [
    {
        name: 'Miles Davis',
        born: 1926,
        died: 1990,
    },
    {
        name: 'Duke Ellington',
        born: 1899,
        died: 1974,
    },
    {
        name: 'John Coltrane',
        born: 1926,
        died: 1987,
    },
    {
        name: 'Louis Daniel Armstrong',
        born: 1901,
        died: 1971,
    },
];
const songListArray = [
    {
        title: 'Take Five',
        artist: 'The Dave Brubeck Quartet',
    },
    {
        title: 'So What',
        artist: 'Miles Davis',
    },
    {
        title: 'Sing Sing Sing',
        artist: 'Benny Goodman',
    },
    {
        title: 'Take the "A" Train',
        artist: 'The Dave Brubeck Quartet',
    },
];


// ##### ROUTES #####
    // a route! sends packet to url /artist
    app.get('/artist', (req, res) => {
        res.send(artistListArray);
    });
    // TODO - Add GET for songs
    app.get('/song', (req, res) => {
        res.send(songListArray);
    })
    app.post('/artist', (req, res) => {
        console.log('artist post recieved')
        let newArtist = req.body
        artistListArray.push(newArtist)
        res.sendStatus(201)
    })

