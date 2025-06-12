import { Loan } from "../../models/Loan";
import { IBaseRepository } from "../IBaseRepository";

export interface ILoanRepository extends IBaseRepository<Loan> {
  findLoansByUserId(userId: string): Promise<Loan[]>;
  findLoansByBookId(bookId: string): Promise<Loan[]>;
  findLoansByDateRange(startDate: Date, endDate: Date): Promise<Loan[]>;
  findLoansByBorrowDate(borrowDate: Date): Promise<Loan[]>;
  findLoansByReturnDate(returnDate: Date): Promise<Loan[]>;
}
