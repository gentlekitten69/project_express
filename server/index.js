const express = require ('express');
const cors = require('cors');
const { Pool } = require('pg');



const app = express();
const port = 3001;


app.use(cors());
app.use(express.json());

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'rawg',
    password: 'ThatGuy03$',
    port: 5432
})



let comments = [
    { name:'', content: '' },
    { name: '', content: ''},
    { name: '', content: ''}
];

app.use((req, res, next) => {
    console.log(`Method: ${req.method}, URL: ${req.url}`);
    next();
});



app.get(`/games/comments/:gameId`, async (req, res ) => {
    
    try {
        const text = 'SELECT * FROM comments WHERE gameid = $1';
        console.log("server received params", req.params.gameId)
        const values = [req.params.gameId];
        
        const { rows } = await pool.query(text, values);
        console.log("resulting rows", rows);
        res.json(rows);
    } catch (error) {
        console.error('Error')
        res.status(500).json({error: 'Server Error'});
    }
})


app.post('/games/comments/newcomment', async (req, res) => {
    const newComment = { 
        name: req.body.name,
        content: req.body.content,
        gameId: req.body.gameId
    };
    console.log("newComment:", newComment);
    try {
        const { rows } = await pool.query(
            'INSERT INTO comments( name, content, gameid) VALUES ($1, $2, $3) RETURNING *', 
            [
                newComment.name,
                newComment.content,
                newComment.gameId,
            ]
        );
        console.log("rows from add response", rows)
        const insertedComment = rows[0]
        console.log("inserted comment", insertedComment);
        res.status(201).json(insertedComment);
    } catch (error) {
        console.error('Error', error)
        }
});

app.delete(`/games/comments/:commentId`, async (req, res) => {
    console.log("delete params", req.params)
    const commentId = parseInt(req.params.commentId, 10);

    console.log('Server Delete:', commentId)
    
    try{
       await pool.query('DELETE FROM comments WHERE id = $1', [commentId]);
        res.status(204).send();
    } catch (error) {
        console.error('An Error has occured deleting the comment', error)
        res.status(500).send(`Server Error: ${error.message}`)
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})