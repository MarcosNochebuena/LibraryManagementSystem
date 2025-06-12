import { Book } from "../../models/Book";
import { IBaseRepository } from "../IBaseRepository";

export interface IBookRepository extends IBaseRepository<Book> {
  getBooksByAuthor(author: string): Promise<Book[]>;
  getBookByTitle(title: string): Promise<Book | null>;
  getBookByISBN(isbn: string): Promise<Book | null>;
  getBooksByYear(year: number): Promise<Book[]>;
}
