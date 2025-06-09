import { IsString, IsNotEmpty, IsEmail, IsBoolean } from "class-validator";

export class User {
  private readonly id: string;
  @IsString()
  @IsNotEmpty()
  private name: string;
  @IsEmail()
  @IsNotEmpty()
  private email: string;
  @IsBoolean()
  @IsNotEmpty()
  private borrowed_books: boolean;

  constructor(name: string, email: string, borrowed_books: boolean = false) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.email = email;
    this.borrowed_books = borrowed_books;
    this.validateName();
    this.validateEmail();
  }

  public toggleBorrowedBooks(): void {
    this.borrowed_books = !this.borrowed_books;
  }

  /**
   * validateName
   */
  public validateName(): void {
    if (!this.name || this.name.trim().length < 2) {
      throw new Error('Name must be at least 2 characters long.');
    }
  }

  public validateEmail(): void {
    if (!this.email || this.email.trim().length < 2) {
      throw new Error('Email must be at least 2 characters long.');
    }
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getBorrowed_books(): boolean {
    return this.borrowed_books;
  }

  public toString(): string {
    return `User: ${this.name} - ${this.email} - ${this.borrowed_books}`;
  }

  public toJSON(): object {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      borrowed_books: this.borrowed_books
    };
  }

  public setName(name: string): void {
    this.validateName();
    this.name = name;
  }

  /**
   * setEmail
   */
  public setEmail(email: string): void {
    this.validateEmail();
    this.email = email;
  }

  public setBorrowed_books(borrowed_books: boolean): void {
    this.borrowed_books = borrowed_books;
  }

}
