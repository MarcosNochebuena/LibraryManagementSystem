import { BaseDatabaseConfig } from './BaseDatabaseConfig';

export class TestDatabaseConfig extends BaseDatabaseConfig {
  private static instance: TestDatabaseConfig;

  public type: 'sqlite' = 'sqlite';
  public database = ':memory:';
  public synchronize = true;

  private constructor() {
    super();
  }

  public static getInstance(): TestDatabaseConfig {
    if (!this.instance) {
      this.instance = new TestDatabaseConfig();
    }
    return this.instance;
  }
}
