import { validate } from 'class-validator';
import { Book } from '../../src/models/Book';

describe('Book Model', () =>{
  it('should create a book with available status by default', () => {
    const book = new Book('LibroTest1', 'AuthorTest1', '9781234567897')
    expect(book.isAvailable).toBe(true);
  })

  it('it_should_toggle_availability_of_a_book', () => {
    const book = new Book('LibroTest2', 'AuthorTest2', '9781234567897');
    const initialAvailability = book.isAvailable;
    book.toggleAvailability();
    expect(book.isAvailable).toBe(!initialAvailability);
  });

  it('it_should_borrow_a_book_successfully_when_available', () => {
    const book = new Book('LibroTest3', 'AuthorTest3', '9781234567897');
    book.borrow();
    expect(book.isAvailable).toBe(false);
  });

  it('it_should_return_a_book_and_set_status_to_available', () => {
    const book = new Book('LibroTest4', 'AuthorTest4', '9781234567897', false);
    book.return();
    expect(book.isAvailable).toBe(true);
  });

  it('it_should_fail_to_borrow_a_book_that_is_already_borrowed', () => {
    const book = new Book('LibroTest5', 'AuthorTest5', '9781234567897', false);
    expect(() => book.borrow()).toThrow('Book is already borrowed');
  });

  it('it_should_handle_invalid_isbn_when_setting_new_isbn', () => {
    const book = new Book('LibroTest7', 'AuthorTest7', '9781234567897');
    expect(() => book.setIsbn('InvalidISBN')).toThrow('ISBN inválido');
  });

  it('it_should_create_book_instance_with_valid_data', () => {
    const book = new Book('Valid Title', 'Valid Author', '9781234567897');
    expect(book.getTitle()).toBe('Valid Title');
    expect(book.getAuthor()).toBe('Valid Author');
    expect(book.getIsbn()).toBe('9781234567897');
    expect(book.isAvailable).toBe(true);
  });

  it('it_should_fail_to_create_book_with_empty_title', async () => {
    const book = new Book('', 'Author', '9781234567897');
    const errors = await validate(book);

    expect(errors.length).toBeGreaterThan(0);
    const titleError = errors.find(e => e.property === 'title');
    expect(titleError).toBeDefined();
  });

  it('it_should_convert_book_instance_to_json_format', () => {
    const book = new Book('Title', 'Author', '9781234567897');
    const json = book.toJSON();
    expect(json).toEqual({
      id: book.getId(),
      title: 'Title',
      author: 'Author',
      isbn: '9781234567897',
      isAvailable: true
    });
  });

  it('it_should_fail_to_create_book_with_empty_isbn', async () => {
    const book = new Book('Title', 'Author', '');
    const errors = await validate(book);

    expect(errors.length).toBeGreaterThan(0);
    const isbnError = errors.find(e => e.property === 'isbn');
    expect(isbnError).toBeDefined();
  });

  it('it_should_handle_invalid_isbn_when_setting_new_isbn', () => {
    const book = new Book('LibroTest7', 'AuthorTest7', '9781234567897');
    expect(() => { book.setIsbn('InvalidISBN')}).toThrow('ISBN inválido');
  });
})
