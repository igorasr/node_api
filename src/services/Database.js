import "dotenv/config";
import mysql from 'mysql2/promise';


class Database {
  constructor() {
    this.host = process.env.DB_HOST;
    this.port = process.env.DB_PORT;
    this.database = process.env.DB_DATABASE;
    this.user = process.env.DB_USER;
    this.password = process.env.DB_PASSWORD;
  }

  async connect() {
    if (global.connection && global.connection.state !== "disconnected")
      return global.connection;

    try {
      const connection = await mysql.createConnection(
        `mysql://${this.user}:${this.password}@${this.host}:${this.port}/${this.database}`
      );
      global.connection = connection;
      return connection;
    } catch (error) {
      console.log({
        error: true,
        mensagem: `Falha ao se conectar ao banco: ${error}`,
      });
    }
  }

  async closeConnection(){
    await mysql.closeConnection();
  }
}
export default Database;
