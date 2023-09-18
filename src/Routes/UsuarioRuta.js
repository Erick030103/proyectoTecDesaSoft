import express from "express";

const router = express.Router();

import {
    getUsuario,
    saveUsuario,
    updateUsuario,
    deleteUsuario,
    listaUsuarios
} from '../Controllers/UsuarioController.js';

router.get('/getUsuarios/', listaUsuarios);
router.get('/getUsuario/:id', getUsuario);
router.put('/updateUsuario/:id', updateUsuario);
router.post('/saveUsuario/', saveUsuario);
router.delete('/deleteUsuario/:id', deleteUsuario);

export default router;