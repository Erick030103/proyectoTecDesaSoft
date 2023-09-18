import { pool } from '../db.js';

const getUsuario = async (req, res) => {
  try {
    const {id} = req.params;
    const lista = await pool.query('SELECT * FROM USUARIO WHERE ID = $1', [id]);
    res.json(lista.rows);
    console.log("Usuario" + id);

  } catch (error) {
    console.log(error);
  }
};

const saveUsuario = async (req, res) => {
  try {
    const {nombre, password, email} = req.body;
    const lista = await pool.query(`INSERT INTO USUARIO (NOMBRE, PASSWORD, EMAIL, ACTIVO) VALUES ('${nombre}', '${password}', '${email}', TRUE)`);
    
    res.send("USUARIO CREADO")
  } catch (error) {
    console.log(error);
  }
};

const updateUsuario = async (req, res) => {
  try {
    const {id} = req.params;
    const {nombre, password, email} = req.body;

    const lista = await pool.query(`UPDATE USUARIO SET NOMBRE = '${nombre}', PASSWORD = '${password}', EMAIL = '${email}' WHERE ID = ${id}`);
    
    res.send("USUARIO ACTUALIZADO")
  } catch (error) {
    console.log(error);
  }
};

const deleteUsuario = async (req, res) => {
  try {
    const {id} = req.params;
    const lista = await pool.query(`DELETE FROM USUARIO WHERE ID = ${id}`);
    res.json(lista.rows);
    console.log("USUARIO ELIMINADO");
  } catch (error) {
    console.log(error);
  }
};

const listaUsuarios = async (req, res) => {
  try {
    const lista = await pool.query(`SELECT * FROM USUARIO`);
    res.json(lista.rows);
  } catch (error) {
    console.log(error);
  }
};

export {
  getUsuario,
  saveUsuario,
  updateUsuario,
  deleteUsuario,
  listaUsuarios
};