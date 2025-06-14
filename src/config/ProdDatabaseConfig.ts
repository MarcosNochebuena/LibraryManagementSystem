import { BaseDatabaseConfig } from "./BaseDatabaseConfig";

export class ProdDatabaseConfig extends BaseDatabaseConfig{
  private static instance: ProdDatabaseConfig;

  public type: 'mysql' = 'mysql';
  public synchronize = true; // Enable for development, disable in production
  public host = process.env["DB_HOST"] || 'localhost';
  public port = parseInt(process.env["DB_PORT"] || '3306');
  public username = process.env["DB_USER"];
  public password = process.env["DB_PASSWORD"];
  public database = process.env["DB_NAME"]
  public migrations = ['src/migrations/*.ts'];

  private constructor(){
    super();
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new ProdDatabaseConfig();
    }
    return this.instance;
  }
}
