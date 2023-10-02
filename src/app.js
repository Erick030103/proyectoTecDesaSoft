import express from 'express';
import usuarioRuta from '../src/Routes/UsuarioRuta.js';

const app = express();
app.use(express.json());

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

const port = 5002 || process.env.port;

app.use('/api', usuarioRuta);


app.get('/', (req, res) => {
    res.send('Hola mundo!');
});

app.post('/adios', (req, res) => {
    res.send('ADIOS AMOR, ME VOY DE TI Y ESTA VEZ PARA SIEMPRE...');
});


app.listen(port, () => {
    console.log(`El puerto es : ${port}`);
});