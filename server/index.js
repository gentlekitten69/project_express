const express = require ('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const comments = [
    { id: Date.now(), text: 'Comment 1'},
    { id: Date.now(), text: 'comment 2'},
    { id: Date.now(), text: 'comment 3'}
];

app.use((req, res, next) => {
    console.log(`Method: ${req.method}, URL: ${req.url}`);
    next();
});

app.use(express.json());

app.get('/comments', (req, res) => {
    res.send('comments')
   });

app.post('/comments', (req, res) => {
    const newComment = 
     {id: Date.now(), ...req.body};
     comments.push(newComment);
  
   res.json(201).json(newComment)
});

app.put('/comments/:id', (req, res) => {
    const { id } = req.params;
    let comment = comments.find(comment => comment.id === Number(id));
    if (index !== -1) {
        comments[index] = {...comments[index], ...req.body, comments: []};
        res.json(comments[index]);
    } else {
        res.sendStatus(404); 
    }
})



app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;

    comments = comments.filter(comment => comment.id !== Number(id));
    res.status(204).send();
    })

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})