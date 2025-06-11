import { IsString, IsNotEmpty, IsBoolean } from "class-validator";
import { ILoanable } from "../interfaces/ILoanable";

export class Book implements ILoanable{
  private readonly id: string;
  @IsString()
  @IsNotEmpty()
  private title: string;

  @IsString()
  @IsNotEmpty()
  private author: string;

  @IsString()
  @IsNotEmpty()
  private isbn: string;

  @IsBoolean()
  public isAvailable: boolean;

  constructor(
    title: string,
    author: string,
    isbn: string,
    isAvailable: boolean = true
  ) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.validateIsbn(isbn);
    this.isbn = isbn;
    this.isAvailable = isAvailable;
  }

  public toggleAvailability(): void {
    this.isAvailable = !this.isAvailable;
  }

  public borrow(): void {
    if (!this.isAvailable) {
      throw new Error("Book is already borrowed");
    }
    this.isAvailable = false;
  }

  public return(): void {
    this.isAvailable = true;
  }

  public toString(): string {
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Available: ${this.isAvailable}`;
  }

  public toJSON(): object {
    return {
      id: this.id,
      title: this.title,
      author: this.author,
      isbn: this.isbn,
      isAvailable: this.isAvailable
    };
  }

  public static fromObject(obj: { title: string; author: string; isbn: string; isAvailable?: boolean }): Book {
    return new Book(obj.title, obj.author, obj.isbn, obj.isAvailable ?? true);
  }

  /* Setters and getters */

  public validateIsbn(isbn?: string): boolean {
    const isbnPattern = /^(97(8|9))?\d{9}(\d|X)$/;
    return isbnPattern.test(isbn || this.isbn);
  }

  public getId(): string {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getIsbn(): string {
    return this.isbn;
  }

  public getIsAvailable(): boolean {
    return this.isAvailable;
  }

  public setTitle(title: string): void {
    this.title = title;
  }
  public setAuthor(author: string): void {
    this.author = author;
  }

  public setIsbn(isbn: string): void {
    if (!this.validateIsbn(isbn)) {
      throw new Error("ISBN inválido");
    }
    this.isbn = isbn;
  }

  public setIsAvailable(isAvailable: boolean): void {
    this.isAvailable = isAvailable;
  }
}
