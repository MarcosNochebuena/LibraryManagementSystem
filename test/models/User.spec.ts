import { validate } from 'class-validator';
import { User } from "../../src/models/User";

describe('User Model', () => {
  it('should create a user with borrowed_books set to false by default', () => {
    const user = new User('John Doe', 'john.doe@example.com');
    expect(user.getBorrowed_books()).toBe(false);
  });

  it('should toggle borrowed_books status', () => {
    const user = new User('John Doe', 'john.doe@example.com');
    user.toggleBorrowedBooks();
    expect(user.getBorrowed_books()).toBe(true);
    user.toggleBorrowedBooks();
    expect(user.getBorrowed_books()).toBe(false);
  });

  it('should validate name', () => {
    const user = new User('John Doe', 'john.doe@example.com');
    expect(user.getName()).toBe('John Doe');
  });

  it('should validate email', () => {
    const user = new User('John Doe', 'john.doe@example.com');
    expect(user.getEmail()).toBe('john.doe@example.com');
  });

  it('should validate with name empty', async () => {
    const user = new User('', 'john.doe@example.com')
    const errors = await validate(user);
    expect(errors.length).toBeGreaterThan(0);
    const nameError = errors.find(e => e.property === 'name');
    expect(nameError).toBeDefined();
  });

  it('should validate with name too short', async () => {
    const user = new User('Jo', 'john.doe@example.com')
    const errors = await validate(user);
    expect(errors.length).toBeGreaterThan(0);
    const nameError = errors.find(e => e.property === 'name');
    expect(nameError).toBeDefined();
  });

  it('should validate with email empty', async () => {
    const user = new User('John Doe', '')
    const errors = await validate(user);

    expect(errors.length).toBeGreaterThan(0);
    const emailError = errors.find(e => e.property === 'email');
    expect(emailError).toBeDefined();
  });

  it('should validate with email too short', async () => {
    const user = new User('John Doe', 'jo')
    const errors = await validate(user);
    expect(errors.length).toBeGreaterThan(0);
    const emailError = errors.find(e => e.property === 'email');
    expect(emailError).toBeDefined();
  });

  it('should validate with email invalid', async () => {
    const user = new User('John Doe', 'jo@')
    const errors = await validate(user);
    expect(errors.length).toBeGreaterThan(0);
    const emailError = errors.find(e => e.property === 'email');
    expect(emailError).toBeDefined();
  });

  it('should return correct string from toString()', () => {
    const user = new User('John Doe', 'john@example.com');
    expect(user.toString()).toBe('User: John Doe - john@example.com - false');
  });

  it('should return correct object from toJSON()', () => {
    const user = new User('John Doe', 'john@example.com');
    expect(user.toJSON()).toEqual({
      id: user.getId(),
      name: 'John Doe',
      email: 'john@example.com',
      borrowed_books: false
    });
  });

  it('should set a new valid name', () => {
    const user = new User('John Doe', 'john@example.com');
    user.setName('Jane Smith');
    expect(user.getName()).toBe('Jane Smith');
  });

  it('should throw when setting an invalid name', () => {
    const user = new User('John Doe', 'john@example.com');
    expect(() => user.setName('Jo')).toThrow('Name must be at least 3 characters long.');
  });

  it('should throw when setting an invalid email', () => {
    const user = new User('John Doe', 'john@example.com');
    expect(() => user.setEmail('jo')).toThrow('Email must be at least 3 characters long.');
  });

});
