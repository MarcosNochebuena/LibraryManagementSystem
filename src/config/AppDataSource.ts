import { DataSource } from "typeorm";
import { ProdDatabaseConfig } from "./ProdDatabaseConfig";
import { TestDatabaseConfig } from "./TestDatabaseConfig";

export class AppDataSource {
  private static instance: AppDataSource;
  private dataSource: DataSource;

  private constructor() {
    const env = process.env["NODE_ENV"] || 'development';
    if (env === 'development') {
      this.dataSource = new DataSource(ProdDatabaseConfig.getInstance() as any);
    } else {
      this.dataSource = new DataSource(TestDatabaseConfig.getInstance() as any);
    }
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new AppDataSource();
    }
    return this.instance;
  }

  public async connect(): Promise<DataSource> {
    if (!this.dataSource.isInitialized) {
      await this.dataSource.initialize();
    }
    return this.dataSource;
  }

  public getDataSource(): DataSource {
    return this.dataSource;
  }

  public async disconnect(): Promise<void> {
    if (this.dataSource.isInitialized) {
      await this.dataSource.destroy();
    }
  }
}
