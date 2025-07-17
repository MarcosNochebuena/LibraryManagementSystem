
import { Repository } from "typeorm";
import { AppDataSource } from "../../config/AppDataSource";
import { User } from "../../models/User";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {
  private connection: AppDataSource | null;
  private repository: Repository<User>;

  /**
   * Inicializa una nueva instancia del repositorio de usuarios y establece la conexión a la base de datos.
   */
  constructor(){
    this.connection = AppDataSource.getInstance();
    this.repository = this.connection.getDataSource().getRepository(User);
  }

  /**
   * Agrega un nuevo usuario a la base de datos.
   * @param {User} user - El usuario que se va a agregar.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  public async add(user: User): Promise<void> {
    this.validateConnection();
    console.log("Añadiendo usuario:", user);
    // Implementation for creating a user
    await this.repository.save(user);
  }

  /**
   * Actualiza la información de un usuario existente.
   * @param {string | number} id - Identificador único del usuario a actualizar.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  public async update(id: string, updatedUser: User): Promise<void> {
    this.validateConnection();
    console.log("Actualizando usuario con el id:", id);
    const user = await this.getById(id);
    if (!user) throw new Error("Usuario no encontrado");
    await this.repository.update(id, updatedUser);
  }

  /**
   * Elimina un usuario de la base de datos por su identificador.
   * @param {string | number} id - Identificador único del usuario a eliminar.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  public async delete(id: string): Promise<void> {
    this.validateConnection();
    console.log("Eliminando usuario con el id:", id);
    const user = await this.getById(id);
    if (!user) throw new Error("Usuario no encontrado");
    await this.repository.delete(id);
  }

  /**
   * Recupera todos los usuarios de la base de datos.
   * @returns {Promise<User[]>} Una promesa que resuelve con un arreglo de todos los usuarios encontrados.
   */
  public async getAll(): Promise<User[]> {
    this.validateConnection();
    console.log("Obteniendo todos los usuarios");
    return await this.repository.find();
  }

  /**
   * Busca un usuario por su identificador único.
   * @param {string | number} id - Identificador único del usuario a buscar.
   * @returns {Promise<User | null>} Una promesa que resuelve con el usuario encontrado o null si no existe.
   */
  public async getById(id: string): Promise<User | null> {
    this.validateConnection();
    console.log("Obteniendo usuario por ID:", id);
    return this.repository.findOneBy({ id });
  }

  /**
   * Busca un usuario por su correo electrónico.
   * @param {string} email - Correo electrónico del usuario a buscar.
   * @returns {Promise<User | null>} Una promesa que resuelve con el usuario encontrado o null si no existe.
   */
  public async getByEmail(email: string): Promise<User | null> {
    this.validateConnection();
    console.log("Obteniendo usuario por email:", email);
    return await this.repository.findOne({ where: { email: email } });
  }

  /**
   * Busca un usuario por su nombre.
   * @param {string} name - Nombre del usuario a buscar.
   * @returns {Promise<User | null>} Una promesa que resuelve con el usuario encontrado o null si no existe.
   */
  public async getByName(name: string): Promise<User[] | null> {
    this.validateConnection();
    console.log("Obteniendo usuario por nombre:", name);
    return await this.repository.find({ where: { name: name} });
  }

  /**
   * Valida que exista conexión a la base de datos
   */
  private validateConnection(){
     if (!this.connection) throw new Error("No hay conexión a la base de datos");
  }
}
