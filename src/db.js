import cliente from 'pg'

const { Pool } = cliente;

/*const pool = new Pool ({ 
  connectionString: process.env.DATABASE_URL,
  ssl: true
});*/

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'claseTecFront',
  password: 'Eridan03',
  port : 5432
})

export{
  pool
};