import { User } from "../../models/User";
import { IBaseRepository } from "../IBaseRepository";

/**
 * Interfaz para el repositorio de usuarios.
 * Extiende las operaciones CRUD básicas y agrega métodos específicos para la gestión de usuarios.
 */
export interface IUserRepository extends IBaseRepository<User>{
  /**
   * Busca un usuario por su correo electrónico.
   * @param {string} email - Correo electrónico del usuario a buscar.
   * @returns {Promise<User | null>} Una promesa que resuelve con el usuario encontrado o null si no existe.
   */
  getByEmail(email: string): Promise<User | null>;

  /**
   * Busca un usuario por su nombre.
   * @param {string} name - Nombre del usuario a buscar.
   * @returns {Promise<User | null>} Una promesa que resuelve con el usuario encontrado o null si no existe.
   */
  getByName(name: string): Promise<User | null>;

  /**
   * Obtiene todos los libros actualmente prestados por un usuario específico.
   * @param {string} userId - Identificador único del usuario.
   * @returns {Promise<User[]>} Una promesa que resuelve con un arreglo de usuarios que tienen libros prestados (puede incluir detalles de los libros).
   */
  getBorrowBooksByUserId(userId: string): Promise<User[]>;
}

