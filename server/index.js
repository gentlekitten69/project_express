const express = require ('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require('uuid');


const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


let games = []


let comments = [
    { id: 1, content: 'Comment 1', comments:[]},
    { id: 2, content: 'comment 2', comments:[]},
    { id: 3, content: 'comment 3', comments:[]}
];

app.use((req, res, next) => {
    console.log(`Method: ${req.method}, URL: ${req.url}`);
    next();
});

app.get('/comments', ( req, res) => {
    res.json(comments)
});

app.get('/games/:name/:genre', (req, res ) => {
    let results = []
    
    let name = req.params.name;
    let genre = req.params.genre;

    for (let game of data) { 
        if ((game.name === name || name ==='any') && (game.genre === genre)) {
            results.push(game);
        }
    }

    res.json(results);
})


app.post('/comments', (req, res) => {
   const newComment = 
     {id: uuidv4(), ...req.body};
     comments.push(newComment);
  
   res.status(201).json(newComment)
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;

    comments = comments.filter(comment => comment.id !== id);
    
    TODO:
    res.status(204).send();

})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

