require('dotenv').config()
const express = require('express')
const helmet = require('helmet');
const cors = require('cors');

const app = express()
const PORT = process.env.PORT || 4000;
app.use(helmet())
app.use(cors())
app.use(express.json());
const projectRouter = require('./router/projectRouter');



app.get('/', (req, res) => res.send('<h2> Welcome to web challenge api sprint<h2>'))

app.use('/api/project', projectRouter);


app.listen(PORT, () => console.log(`http://localhost:${PORT}`))