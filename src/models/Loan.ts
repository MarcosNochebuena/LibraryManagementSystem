import { User } from "./User";
import { Book } from "./Book";
import { IsDate, IsNotEmpty } from "class-validator";

export class Loan {
  private readonly id: string;
  @IsNotEmpty()
  private book: Book;
  @IsNotEmpty()
  private user: User;
  @IsDate()
  @IsNotEmpty()
  private borrow_date: Date;
  @IsDate()
  private return_date: Date | null;

  constructor(book: Book, user: User, borrow_date: Date, return_date?: Date) {
    this.id = crypto.randomUUID();
    this.book = book;
    this.user = user;
    this.borrow_date = borrow_date;
    this.return_date = return_date || null;
    this.book.borrow();
    this.user.toggleBorrowedBooks();
  }

  public toString(): string {
    return `Loan: ${this.id} - ${this.book.toString()} - ${this.user.toString()} - ${this.borrow_date} - ${this.return_date}`;
  }

  public toJSON(): object {
    return {
      id: this.id,
      book: this.book.toJSON(),
      user: this.user.toJSON(),
      borrow_date: this.borrow_date,
      return_date: this.return_date
    };
  }

  public getId(): string {
    return this.id;
  }

  public getBook(): Book {
    return this.book;
  }

  public getUser(): User {
    return this.user;
  }

  public getBorrowDate(): Date {
    return this.borrow_date;
  }

  public getReturnDate(): Date | null {
    return this.return_date;
  }

  public setBook(book: Book): void {
    this.book = book;
    this.book.borrow();
  }

  public setUser(user: User): void {
    this.user = user;
    this.user.toggleBorrowedBooks();
  }

  public setBorrowDate(borrow_date: Date): void {
    this.borrow_date = borrow_date;
  }

public setReturnDate(return_date: Date): void {
    if (return_date === null || return_date === undefined || return_date < this.borrow_date) {
      throw new Error("Invalid return date");
    }
    this.return_date = return_date;
    this.book.return();
}

}
