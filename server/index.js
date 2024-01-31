const express = require ('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const { Pool } = require('pg');
const shortid = require('shortid')

const unique = shortid.generate();
const app = express();
const port = 3001;


app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'rawg',
    password: 'ThatGuy03$',
    port: 5432
})

pool.connect();

pool.query('SELECT * FROM comments', (err, res) => {

})

let comments = [
    { id: 1, content: 'Comment 1', comments:[]},
    { id: 2, content: 'comment 2', comments:[]},
    { id: 3, content: 'comment 3', comments:[]}
];

app.use((req, res, next) => {
    console.log(`Method: ${req.method}, URL: ${req.url}`);
    next();
});



app.get('/games/comments', async (req, res ) => {
    const gameId = parseInt(req.params.id);
  
    
    try {
        const { row } = await pool.query('SELECT content FROM comments')
        res.json(row);
    } catch (error) {
        console.error('Error')
        res.status(500).json({error: 'Server Error'});
    }
})


app.post('/games/comments', async (req, res) => {
   const newComment = { 
   content: req.body.content, 
    gameId: req.body.gameId };

   try {
        await pool.query('INSERT INTO comments( comment, content ) VALUES ($1, $2) RETURNING *', [
           newComment.comment,
           newComment.content,
         
        ]);
     
        res.status(201).json(newComment);
   } catch (error) {
        console.error('Error', error)
   }
  
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;

    comments = comments.filter(comment => comment.id !== id);
    res.status(204).send();

})

app.post('/resgister', async (req, res) => {
    const { username } = req.body;
    try {
        const { rows } = await pool.query('SELECT * FROM registrations WHERE username = $1', [username])
    } catch (error) {
        
    }
   
})

app.post('/login', async (req, res) => {
    const { username } = req.body;

    try {
        const { rows } = await pool.query('SELECT * FROM resgistrations WHERE username = $1', [username])
    } catch (error) {
        
    }
})



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})