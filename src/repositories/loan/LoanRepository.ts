import { Connection } from "mysql2/promise";
import { DatabaseConnection } from "../../config/DatabaseConnection";
import { Book } from "../../models/Book";
import { Loan } from "../../models/Loan";
import { User } from "../../models/User";
import { ILoanRepository } from "./ILoanRepository";

export class LoanRepository implements ILoanRepository{
  private connection: Connection | null;
  constructor(){
    this.connection = DatabaseConnection.getInstance().getConnection();
  }

  public add(loan: Loan): Promise<void> {
    if (!this.connection) throw new Error("No hay conexión a la base de datos");
    console.log("Añadiendo loan:", loan);
    // Implementation for creating a loan
    return Promise.resolve();
  }

  public update(id: string | number): Promise<void> {
    // Implementation for updating a loan
    console.log("Actualizando loan con el id:", id);
    return Promise.resolve();
  }

  public delete(id: string | number): Promise<void> {
    console.log("Eliminando loan con el id:", id);
    // Implementation for deleting a loan
    return Promise.resolve();
  }

  public getAll(): Promise<Loan[]> {
    console.log("Obteniendo todos los loans");
    // Implementation for getting all loans
    const loans: Loan[] = [];
    return Promise.resolve(loans);
  }

  public getById(id: string | number): Promise<Loan | null> {
    console.log("Obteniendo loan por ID:", id);
    // Implementation for getting a loan by ID
    const loan = new Loan(new Book("El Principito", "Antoine de Saint-Exupéry", "978-3-16-148410-0"), new User("John Doe", "mail@mail.com"), new Date());
    return Promise.resolve(loan);
  }

  public findLoansByUserId(userId: string): Promise<Loan[]> {
    console.log("Obteniendo loans por user ID:", userId);
    // Implementation for finding loans by user ID
    const loans: Loan[] = [];
    return Promise.resolve(loans);
  }

  public findLoansByBookId(bookId: string): Promise<Loan[]> {
    console.log("Obteniendo loans por book ID:", bookId);
    // Implementation for finding loans by book ID
    const loans: Loan[] = [];
    return Promise.resolve(loans);
  }

  public findLoansByDateRange(startDate: Date, endDate: Date): Promise<Loan[]> {
    console.log("Obteniendo loans por rango de fechas:", startDate, "a", endDate);
    // Implementation for finding loans by date range
    const loans: Loan[] = [];
    return Promise.resolve(loans);
  }

  public findLoansByBorrowDate(borrowDate: Date): Promise<Loan[]> {
    console.log("Obteniendo loans por fecha de préstamo:", borrowDate);
    // Implementation for finding loans by borrow date
    const loans: Loan[] = [];
    return Promise.resolve(loans);
  }

  public findLoansByReturnDate(returnDate: Date): Promise<Loan[]> {
    console.log("Obteniendo loans por fecha de devolución:", returnDate);
    // Implementation for finding loans by return date
    const loans: Loan[] = [];
    return Promise.resolve(loans);
  }
}
