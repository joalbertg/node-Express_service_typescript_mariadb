import mariadb from 'mariadb';

//const pool = mariadb.createPool({
//  host: 'mariadb',
//  database: 'mydb',
//  user: 'root',
//  password: '123456',
//  connectionLimit: 5
//});

export default class MariaDB {
  private static _instance: MariaDB;

  pool: mariadb.Pool;

  constructor() {
    console.log('Init class MariaDB');
    this.pool = mariadb.createPool({
      host: 'mariadb',
      database: 'mydb',
      user: 'root',
      password: '123456',
      connectionLimit: 5
    });
    this.dbConnect();
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  private dbConnect() {
    try {
      this.pool.getConnection();
      console.log('Online database');
    } catch(error) {
      console.error(error);
      return;
    }
  }
}

//async function asyncFunction() {
//  let conn;
//  try {
//    conn = await pool.getConnection();
//    const rows = await conn.query("SELECT * from heroes");
//    // rows: [ {val: 1}, meta: ... ]

//    console.log(rows);
//    //const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
//    // res: { affectedRows: 1, insertId: 1, warningStatus: 0 }
//  } catch (err) {
//    throw err;
//  } finally {
//    if (conn) conn.release(); //release to pool
//  }
//}

//export default pool;

