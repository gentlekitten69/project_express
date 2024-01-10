const express = require ('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

let commentIdCounter = 1;

let comments = [
    { id: commentIdCounter++, content: 'Comment 1', comments:[]},
    { id: commentIdCounter++, content: 'comment 2', comments:[]},
    { id: commentIdCounter++, content: 'comment 3', comments:[]}
];

app.use((req, res, next) => {
    console.log(`Method: ${req.method}, URL: ${req.url}`);
    next();
});

app.use(express.json());

app.get('/comments', (req, res) => {
    res.json(comments)
 
   });

app.post('/comments', (req, res) => {
    const newComment = 
     {id: Date.now(), ...req.body};
     comments.push(newComment);
  
   res.status(201).json(newComment)
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;

    commenst = comments.filter(comment => comment.id !== Number(id));
    res.status(204).send();
})



app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;

    comments = comments.filter(comment => comment.id !== Number(id));
    res.status(204).send();
    })

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})