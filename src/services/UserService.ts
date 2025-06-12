import { User } from "../models/User";
import { UserRepository } from "../repositories/user/UserRepository";
import { isEmail, isNumber, isString, validate } from "class-validator"

/**
 * Servicio para gestionar operaciones relacionadas con usuarios.
 */
export class UserService {
  private userRepository: UserRepository = new UserRepository();
  constructor(){}

 /**
  * Crea un nuevo usuario después de validar sus datos.
  * @param user Usuario a crear
  * @returns {Promise<void>}
  * @throws {Error} Si los datos del usuario no son válidos
  */
  public async create(user: User): Promise<void> {
    await this.validateUser(user);
    return await this.userRepository.add(user);
  }

  /**
   * Obtiene todos los usuarios registrados.
   * @returns {Promise<User[]>} Lista de usuarios
   */
  public async getAll(): Promise<User[]> {
    return await this.userRepository.getAll();;
  }

  /**
   * Obtiene un usuario por su identificador.
   * @param id Identificador del usuario
   * @returns {Promise<User | null>} Usuario encontrado o null
   */
  public async getById(id: number): Promise<User | null> {
    await this.validateId(id);
    return await this.userRepository.getById(id);
  }

 /**
  * Actualiza los datos de un usuario existente.
  * @param id Identificador del usuario
  * @param user Datos actualizados del usuario
  * @returns {Promise<void>}
  * @throws {Error} Si los datos del usuario no son válidos
  */
  public async update(id: string | number, user: User): Promise<void> {
    await this.validateId(id);
    await this.validateUser(user);
    console.log("Actualizando usuario " + user);
    await this.userRepository.update(id, user);
  }

  /**
   * Elimina un usuario por su instancia.
   * @param user Usuario a eliminar
   * @returns {Promise<void>}
   */
  public async destroy(user: User): Promise<void> {
    console.log("Eliminando al usuario con el id " + user.getId());
    await this.userRepository.delete(user.getId());
  }

  /**
   * Obtiene un usuario por su correo electrónico.
   * @param email Correo electrónico del usuario
   * @returns {Promise<User | null>} Usuario encontrado o null
   * @throws {Error} Si el email no es válido
   */
  public async getByEmail(email: string): Promise<User | null> {
    if (!isEmail(email)) {
      throw new Error("Email invalido")
    }
    return this.userRepository.getByEmail(email);
  }

  /**
   * Obtiene un usuario por su nombre.
   * @param name Nombre del usuario
   * @returns {Promise<User | null>} Usuario encontrado o null
   * @throws {Error} Si el nombre no es válido
   */
  public async getByName(name: string): Promise<User | null> {
    if (!isString(name)) {
      throw new Error("Nombre invalido")
    }
    return this.userRepository.getByName(name);
  }

  /**
   * Obtiene los libros prestados por el usuario según su id.
   * @param id Identificador del usuario
   * @returns {Promise<User[]>} Lista de usuarios con libros prestados
   * @throws {Error} Si el id no es válido
   */
  public async getBorrowBooksByUserId(id: string): Promise<User[]> {
    this.validateId(id);
    return this.userRepository.getBorrowBooksByUserId(id);
  }

 /**
   * Valida los datos de un usuario usando class-validator.
   * @param user Usuario a validar
   * @returns {Promise<void>}
   * @throws {Error} Si los datos no son válidos
   */
  public async validateUser(user: User): Promise<void>{
    const errors = await validate(user);
    if (errors.length > 0) {
      throw new Error("Datos inválidos: " + errors.map(e => e.toString()).join(", "));
    }
  }

  public async validateId(id: string | number): Promise<void>{
    if (!isNumber(id) || !isString(id)) {
      throw new Error("Id invalido")
    }
  }
}
