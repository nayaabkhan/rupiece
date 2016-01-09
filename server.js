import express from 'express';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Service started on port : ${port}`);
});
