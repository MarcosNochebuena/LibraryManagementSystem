import { Book } from '../models/Book';
import { User } from '../models/User';
import { Loan } from '../models/Loan';

export abstract class BaseDatabaseConfig {
  protected entities = [Book, User, Loan];
  abstract synchronize: boolean;
  protected logging = false;
}
