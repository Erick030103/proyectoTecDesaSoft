import express from 'express';
import usuarioRuta from '../src/Routes/UsuarioRuta.js';

const app = express();
app.use(express.json());

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