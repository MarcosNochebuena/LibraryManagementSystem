import { User } from "../../models/User";
import { IBaseRepository } from "../IBaseRepository";

export interface IUserRepository extends IBaseRepository<User>{
  getByEmail(email: string): Promise<User | null>;
  getByName(name: string): Promise<User | null>;
  getBorrowBooksByUserId(userId: string): Promise<User[]>;
}
