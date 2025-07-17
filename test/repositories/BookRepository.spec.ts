import { BookRepository } from '../../src/repositories/book/BookRepository';
import { Book } from '../../src/models/Book';

describe('BookRepository', () => {
  let repository: BookRepository;

  beforeEach(() => {
    repository = new BookRepository();
  });

  it('should save and retrieve a book', async () => {
    const book = new Book("El Principito", "Antoine de Saint-Exupéry", "978-3-16-148410-0");
    await repository.add(book);
    const foundBook = await repository.getById(book.getId());
    expect(foundBook).toEqual(book);
  });
});
