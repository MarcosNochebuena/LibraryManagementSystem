/**
 * Interfaz base para los repositorios de datos.
 * Proporciona operaciones CRUD genéricas para cualquier entidad.
 *
 * @template T Tipo de entidad gestionada por el repositorio.
 */
export interface IBaseRepository<T> {
  /**
   * Recupera todos los registros de la entidad.
   * @returns {Promise<T[]>} Una promesa que resuelve con un arreglo de todas las entidades encontradas.
   */
  getAll(): Promise<T[]>;

  /**
   * Busca un registro específico por su identificador único.
   * @param {string | number} id - Identificador único del registro a recuperar.
   * @returns {Promise<T | null>} Una promesa que resuelve con la entidad encontrada, o null si no existe.
   */
  getById(id: string | number): Promise<T | null>;

  /**
   * Agrega un nuevo registro a la base de datos.
   * @param {T} entity - La entidad que se va a agregar.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  add(entity: T): Promise<void>;

  /**
   * Actualiza un registro existente identificado por su ID.
   * @param {string | number} id - Identificador único del registro a actualizar.
   * @param {T} entity - La nueva información de la entidad.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  update(id: string | number, entity: T): Promise<void>;

  /**
   * Elimina un registro de la base de datos por su identificador.
   * @param {string | number} id - Identificador único del registro a eliminar.
   * @returns {Promise<void>} Una promesa que se resuelve cuando la operación ha finalizado.
   */
  delete(id: string | number): Promise<void>;
}
