import mariadb from 'mariadb';

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

  static async executeQuery(query: string) {
    try {
      return await this.instance.pool.query(query);
    } catch(error) { throw error }
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

