import { Connection } from "mysql2/promise";
import { DatabaseConnection } from "../../config/DatabaseConnection";
import { User } from "../../models/User";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {
  private connection: Connection | null;

  /**
   * Inicializa una nueva instancia del repositorio de usuarios y establece la conexión a la base de datos.
   */
  constructor(){
    this.connection = DatabaseConnection.getInstance().getConnection();
  }

  /**
   * Agrega un nuevo usuario a la base de datos.
   * @param {User} user - El usuario que se va a agregar.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  public add(user: User): Promise<void> {
    if (!this.connection) throw new Error("No hay conexión a la base de datos");
    console.log("Añadiendo usuario:", user);
    // Implementation for creating a user
    return Promise.resolve();
  }

  /**
   * Actualiza la información de un usuario existente.
   * @param {string | number} id - Identificador único del usuario a actualizar.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  public update(id: string | number, user: User): Promise<void> {
    console.log("Actualizando usuario con el id:", id);
    // Implementation for updating a user
    return Promise.resolve();
  }

  /**
   * Elimina un usuario de la base de datos por su identificador.
   * @param {string | number} id - Identificador único del usuario a eliminar.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  public delete(id: string | number): Promise<void> {
    console.log("Eliminando usuario con el id:", id);
    // Implementation for deleting a user
    return Promise.resolve();
  }

  /**
   * Recupera todos los usuarios de la base de datos.
   * @returns {Promise<User[]>} Una promesa que resuelve con un arreglo de todos los usuarios encontrados.
   */
  public getAll(): Promise<User[]> {
    console.log("Obteniendo todos los usuarios");
    // Implementation for getting all users
    const users: User[] = [];
    return Promise.resolve(users);
  }

  /**
   * Busca un usuario por su identificador único.
   * @param {string | number} id - Identificador único del usuario a buscar.
   * @returns {Promise<User | null>} Una promesa que resuelve con el usuario encontrado o null si no existe.
   */
  public getById(id: string | number): Promise<User | null> {
    console.log("Obteniendo usuario por ID:", id);
    // Implementation for getting a user by ID
    const user = new User("John Doe", "mail@mail.com");
    return Promise.resolve(user);
  }

  /**
   * Busca un usuario por su correo electrónico.
   * @param {string} email - Correo electrónico del usuario a buscar.
   * @returns {Promise<User | null>} Una promesa que resuelve con el usuario encontrado o null si no existe.
   */
  public getByEmail(email: string): Promise<User | null> {
    console.log("Obteniendo usuario por email:", email);
    // Implementation for getting a user by email
    const user = new User("John Doe", email);
    return Promise.resolve(user);
  }

  /**
   * Busca un usuario por su nombre.
   * @param {string} name - Nombre del usuario a buscar.
   * @returns {Promise<User | null>} Una promesa que resuelve con el usuario encontrado o null si no existe.
   */
  public getByName(name: string): Promise<User | null> {
    console.log("Obteniendo usuario por nombre:", name);
    // Implementation for getting a user by name
    const user = new User(name, "mail@mail.com");
    return Promise.resolve(user);
  }

  /**
   * Obtiene todos los libros actualmente prestados por un usuario específico.
   * @param {string} userId - Identificador único del usuario.
   * @returns {Promise<User[]>} Una promesa que resuelve con un arreglo de usuarios que tienen libros prestados (puede incluir detalles de los libros).
   */
  public getBorrowBooksByUserId(userId: string): Promise<User[]> {
    console.log("Obteniendo libros prestados al user ID:", userId);
    // Implementation for getting borrowed books by user ID
    const users: User[] = [];
    return Promise.resolve(users);
  }
}
