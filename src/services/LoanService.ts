import { isDate, isNumber, isString, validate } from "class-validator";
import { Loan } from "../models/Loan";
import { LoanRepository } from "../repositories/loan/LoanRepository";

/**
 * Servicio para gestionar préstamos de libros.
 * Proporciona métodos para crear, consultar, actualizar y eliminar préstamos,
 * así como validaciones de datos relacionados.
 */
export class LoanService {
  private loanRepository: LoanRepository = new LoanRepository();

  /**
   * Crea un nuevo préstamo después de validar los datos.
   * @param loan - Objeto Loan a agregar
   * @throws Error si los datos del préstamo no son válidos
   */
  public async create(loan: Loan): Promise<void>{
    await this.validateLoan(loan);
    await this.loanRepository.add(loan);
  }

  /**
   * Obtiene todos los préstamos registrados.
   * @returns Lista de préstamos
   */
  public async getAll(): Promise<Loan[]>{
    return await this.loanRepository.getAll();
  }

  /**
   * Busca un préstamo por su ID.
   * @param id - ID del préstamo
   * @returns El préstamo encontrado o null si no existe
   * @throws Error si el ID no es válido
   */
  public async getById(id: string): Promise<Loan | null>{
    await this.validateId(id);
    return await this.loanRepository.getById(id);
  }

  /**
   * Actualiza un préstamo existente después de validar los datos.
   * @param id - ID del préstamo a actualizar
   * @param loan - Objeto Loan con los nuevos datos
   * @throws Error si el ID o los datos del préstamo no son válidos
   */
  public async update(id: string, loan: Loan): Promise<void>{
    await this.validateId(id);
    await this.validateLoan(loan);
    await this.loanRepository.update(id, loan);
  }

  /**
   * Elimina un préstamo por su ID.
   * @param id - ID del préstamo a eliminar
   * @throws Error si el ID no es válido
   */
  public async destroy(id: string): Promise<void>{
    await this.validateId(id);
    await this.loanRepository.delete(id);
  }

  /**
   * Busca todos los préstamos asociados a un usuario.
   * @param userId - ID del usuario
   * @returns Lista de préstamos asociados al usuario
   * @throws Error si el ID no es válido
   */
  public async findLoansByUserId(userId: string): Promise<Loan[]>{
    await this.validateId(userId);
    return await this.loanRepository.findLoansByUserId(userId);
  }

  /**
   * Busca todos los préstamos asociados a un libro.
   * @param bookId - ID del libro
   * @returns Lista de préstamos asociados al libro
   * @throws Error si el ID no es válido
   */
  public async findLoansByBookId(bookId: string): Promise<Loan[]>{
    await this.validateId(bookId);
    return await this.loanRepository.findLoansByBookId(bookId);
  }

  /**
   * Busca préstamos realizados en un rango de fechas.
   * @param startDate - Fecha de inicio
   * @param endDate - Fecha de fin
   * @returns Lista de préstamos en el rango de fechas
   * @throws Error si alguna fecha no es válida
   */
  public async findLoansByDateRange(startDate: Date, endDate: Date): Promise<Loan[]>{
    await this.validateDate(startDate);
    await this.validateDate(endDate);
    return await this.loanRepository.findLoansByDateRange(startDate, endDate);
  }

  /**
   * Busca préstamos por la fecha de préstamo.
   * @param borrowDate - Fecha de préstamo
   * @returns Lista de préstamos en esa fecha
   * @throws Error si la fecha no es válida
   */
  public async findLoansByBorrowDate(borrowDate: Date): Promise<Loan[]>{
    await this.validateDate(borrowDate);
    return await this.loanRepository.findLoansByBorrowDate(borrowDate);
  }

  /**
   * Busca préstamos por la fecha de devolución.
   * @param returnDate - Fecha de devolución
   * @returns Lista de préstamos en esa fecha
   * @throws Error si la fecha no es válida
   */
  public async findLoansByReturnDate(returnDate: Date): Promise<Loan[]>{
    await this.validateDate(returnDate);
    return await this.loanRepository.findLoansByReturnDate(returnDate);
  }

  /**
   * Valida los datos de un préstamo usando class-validator.
   * @param loan - Objeto Loan a validar
   * @throws Error si los datos no son válidos
   */
  public async validateLoan(loan: Loan): Promise<void>{
    const errors = await validate(loan);
    if (errors.length > 0) {
      throw new Error("Datos inválidos: " + errors.map(e => e.toString()).join(", "));
    }
  }

  /**
   * Valida que el ID sea un string y un número válido.
   * @param id - ID a validar
   * @throws Error si el ID no es válido
   */
  public async validateId(id: string): Promise<void>{
    if (!isNumber(id) || !isString(id)) {
      throw new Error("Id invalido")
    }
  }

  /**
   * Valida que la fecha sea un objeto Date válido.
   * @param date - Fecha a validar
   * @throws Error si la fecha no es válida
   */
  public async validateDate(date: Date): Promise<void>{
    if (!isDate(date)) {
      throw new Error("Fecha invalida")
    }
  }
}
