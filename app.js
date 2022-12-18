const express = require('express');
const dotenv = require('dotenv');
const app = express();
//const port = 4000;
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const port = process.env.PORT;
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const indexRouter = require('./routes/index.js');
const gameRouter = require('./routes/game');
const resultsRouter = require('./routes/results');
app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/results', resultsRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
  module.exports = app;