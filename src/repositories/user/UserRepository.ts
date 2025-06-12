import { Connection } from "mysql2/promise";
import { DatabaseConnection } from "../../config/DatabaseConnection";
import { User } from "../../models/User";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {
  private connection: Connection | null;

  constructor(){
    this.connection = DatabaseConnection.getInstance().getConnection();
  }

  public add(user: User): Promise<void> {
    if (!this.connection) throw new Error("No hay conexión a la base de datos");
    console.log("Añadiendo usuario:", user);
    // Implementation for creating a user
    return Promise.resolve();
  }

  public update(id: string | number): Promise<void> {
    console.log("Actualizando usuario con el id:", id);
    // Implementation for updating a user
    return Promise.resolve();
  }

  public delete(id: string | number): Promise<void> {
    console.log("Eliminando usuario con el id:", id);
    // Implementation for deleting a user
    return Promise.resolve();
  }

  public getAll(): Promise<User[]> {
    console.log("Obteniendo todos los usuarios");
    // Implementation for getting all users
    const users: User[] = [];
    return Promise.resolve(users);
  }

  public getById(id: string | number): Promise<User | null> {
    console.log("Obteniendo usuario por ID:", id);
    // Implementation for getting a user by ID
    const user = new User("John Doe", "mail@mail.com");
    return Promise.resolve(user);
  }

  public getByEmail(email: string): Promise<User | null> {
    console.log("Obteniendo usuario por email:", email);
    // Implementation for getting a user by email
    const user = new User("John Doe", email);
    return Promise.resolve(user);
  }

  public getByName(name: string): Promise<User | null> {
    console.log("Obteniendo usuario por nombre:", name);
    // Implementation for getting a user by name
    const user = new User(name, "mail@mail.com");
    return Promise.resolve(user);
  }

  public getBorrowBooksByUserId(userId: string): Promise<User[]> {
    console.log("Obteniendo libros prestados al user ID:", userId);
    // Implementation for getting borrowed books by user ID
    const users: User[] = [];
    return Promise.resolve(users);
  }
}
