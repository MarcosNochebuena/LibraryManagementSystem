import { Loan } from "../../src/models/Loan";
import { User } from "../../src/models/User";
import { Book } from "../../src/models/Book";
import { validate } from 'class-validator';

describe('Loan Model', () => {
  it('testLoanCreationWithValidInputs', () => {
    const book = new Book('Title', 'Author', '9781234567897');
    const user = new User('John Doe', 'john.doe@example.com');
    const borrowDate = new Date();
    const loan = new Loan(book, user, borrowDate);

    expect(loan.getBook()).toBe(book);
    expect(loan.getUser()).toBe(user);
    expect(loan.getBorrowDate()).toBe(borrowDate);
    expect(loan.getReturnDate()).toBeNull();
  });

  it('testLoanToJSONConversion', () => {
    const book = new Book('Title', 'Author', '9781234567897');
    const user = new User('John Doe', 'john.doe@example.com');
    const borrowDate = new Date();
    const loan = new Loan(book, user, borrowDate);

    expect(loan.toJSON()).toEqual({
      id: loan.getId(),
      book: book.toJSON(),
      user: user.toJSON(),
      borrow_date: borrowDate,
      return_date: null
    });
  });

  it('testLoanReturnDateUpdate', () => {
    const book = new Book('Title', 'Author', '9781234567897');
    const user = new User('John Doe', 'john.doe@example.com');
    const borrowDate = new Date();
    const returnDate = new Date(borrowDate.getTime() + 1000 * 60 * 60 * 24);
    const loan = new Loan(book, user, borrowDate);

    loan.setReturnDate(returnDate);
    expect(loan.getReturnDate()).toBe(returnDate);
  });

  it('testLoanCreationWithMissingBook', () => {
    const user = new User('John Doe', 'john.doe@example.com');
    const borrowDate = new Date();

    expect(() => new Loan(undefined as any, user, borrowDate)).toThrow();
  });

  it('testLoanCreationWithMissingBook', () => {
    const book = new Book('Title', 'Author', '9781234567897');
    const borrowDate = new Date();

    expect(() => new Loan(book, undefined as any, borrowDate)).toThrow();
  });

  it('testLoanCreationWithInvalidBorrowDate', async () => {
    const book = new Book('Title', 'Author', '9781234567897');
    const user = new User('John Doe', 'john.doe@example.com');
    const loan = new Loan(book, user, undefined as any);
    const errors = await validate(loan)
    expect(errors.length).toBeGreaterThan(0);
    const borrowDateError = errors.find(e => e.property === 'borrow_date');
    expect(borrowDateError).toBeDefined();
  });

  it('testSetReturnDateEarlierThanBorrowDate', () => {
    const book = new Book('Title', 'Author', '9781234567897');
    const user = new User('John Doe', 'john.doe@example.com');
    const borrowDate = new Date();
    const returnDate = new Date(borrowDate.getTime() - 1000 * 60 * 60 * 24);
    const loan = new Loan(book, user, borrowDate);

    expect(() => loan.setReturnDate(returnDate)).toThrow('Invalid return date');
  });

  it('testLoanToStringConversion', () => {
    const book = new Book('Title', 'Author', '9781234567897');
    const user = new User('John Doe', 'john.doe@example.com');
    const borrowDate = new Date();
    const loan = new Loan(book, user, borrowDate);

    expect(loan.toString()).toContain('Loan:');
  });

  it('testSetReturnDateNull', () => {
    const book = new Book('Title', 'Author', '9781234567897');
    const user = new User('John Doe', 'john.doe@example.com');
    const borrowDate = new Date();
    const loan = new Loan(book, user, borrowDate);

    expect(() => loan.setReturnDate(null as any)).toThrow('Invalid return date');
  });

  it('testLoanSetBookAndUser', () => {
    const book1 = new Book('Title1', 'Author1', '9781234567897');
    const book2 = new Book('Title2', 'Author2', '9781234567898');
    const user1 = new User('John Doe', 'john.doe@example.com');
    const user2 = new User('Jane Doe', 'jane.doe@example.com');
    const borrowDate = new Date();
    const loan = new Loan(book1, user1, borrowDate);

    loan.setBook(book2);
    loan.setUser(user2);

    expect(loan.getBook()).toBe(book2);
    expect(loan.getUser()).toBe(user2);
  });

  it('testSetReturnDateUndefined', () => {
    const book = new Book('Title', 'Author', '9781234567897');
    const user = new User('John Doe', 'john.doe@example.com');
    const borrowDate = new Date();
    const loan = new Loan(book, user, borrowDate);

    expect(() => loan.setReturnDate(undefined as any)).toThrow('Invalid return date');
  });

  it('testLoanBorrowDateUpdate', () => {
    const book = new Book('Title', 'Author', '9781234567897');
    const user = new User('John Doe', 'john.doe@example.com');
    const borrowDate = new Date();
    const newBorrowDate = new Date(borrowDate.getTime() + 1000 * 60 * 60 * 24);
    const loan = new Loan(book, user, borrowDate);

    loan.setBorrowDate(newBorrowDate);
    expect(loan.getBorrowDate()).toBe(newBorrowDate);
  });

  it('testLoanCreationWithMissingUser', () => {
    const book = new Book('Title', 'Author', '9781234567897');
    const borrowDate = new Date();

    expect(() => new Loan(book, undefined as any, borrowDate)).toThrow();
  });
});
