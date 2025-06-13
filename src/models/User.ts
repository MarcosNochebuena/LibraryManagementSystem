import { IsString, IsNotEmpty, IsEmail, IsBoolean, MinLength } from "class-validator";

export class User {
  private readonly id: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  private name: string;
  @IsEmail()
  @IsNotEmpty()
  @MinLength(3)
  private email: string;
  @IsBoolean()
  @IsNotEmpty()
  private borrowed_books: boolean;

  constructor(name: string, email: string, borrowed_books: boolean = false) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.email = email;
    this.borrowed_books = borrowed_books;
  }

  public toggleBorrowedBooks(): void {
    this.borrowed_books = !this.borrowed_books;
  }

  /**
   * validateName
   */
  public validateName(name: string): void {
    if (!name || name.trim().length < 3) {
      throw new Error('Name must be at least 3 characters long.');
    }
  }

  public validateEmail(email: string): void {
    if (!email || email.trim().length < 3) {
      throw new Error('Email must be at least 3 characters long.');
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
    this.validateName(name);
    this.name = name;
  }

  /**
   * setEmail
   */
  public setEmail(email: string): void {
    this.validateEmail(email);
    this.email = email;
  }

  public setBorrowed_books(borrowed_books: boolean): void {
    this.borrowed_books = borrowed_books;
  }

}
