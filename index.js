const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000;
const projectRouter = require('./router/projectRouter');

app.use(express.json());

app.get('/', (req, res) => res.send('<h2> Welcome to web challenge api sprint<h2>'))

app.use('/api/project', projectRouter);


app.listen(PORT, () => console.log(`http://localhost:${PORT}`))