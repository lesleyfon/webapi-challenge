const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
app.use(express.json());

app.get('/', (req, res) => res.send('<h2> Welcome to web challenge api spritt<h2>'))

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))