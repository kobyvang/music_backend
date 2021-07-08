const express = require('express');
const repoContext = require('./repository/repository-wrapper');
const app = express();

//http://www.devcodecampmusiclibrary.com/api/music

app.use(express.json());
app.use(express.urlencoded({ extend: true }));



app.listen(4000, function() {
    console.log('server is listen on port 4000')
});


//get all music in list
app.get('/api/music', (req, res) => {
    const songs = repoContext.songs.findAllSongs();
    return res.send(songs);
})


//get music by Id
app.get('/api/music/:id', (req, res) => {
    const id = req.params.id;
    const songs = repoContext.songs.findSongById(id);
    return res.send(songs);
});

//create a new music
app.post('/api/music', (req, res) => {
    const newSong = req.body;
    const addedSong = repoContext.songs.createSong(newSong);
    return res.send(addedSong);
})

//update a song
app.put("/api/music/:id", (req, res) => {
    const id = req.params.id;
    const songsPropertiesToUpdate = req.body;
    const updatedSong = repoContext.songs.updateSong(id,songsPropertiesToUpdate );
    return res.send(updatedSong);
})

//delete a song
app.delete('/api/music/:id', (req, res) => {
    const id = req.params.id;
    const updatedSongSet = repoContext.songs.deleteSong(id);
    return res.send(updatedSongSet);
})