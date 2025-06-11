import { User } from "./models/User";
import { Book } from "./models/Book";
import { Loan } from "./models/Loan";
const user_one: User = new User('Test', 'test@mail.com');
const book_one: Book = new Book('TestLibro1', 'unknow_author', 'ssdasadadd');

const loan_one: Loan = new Loan(book_one, user_one, new Date());

console.log(loan_one.toString());
console.log(book_one.getIsAvailable());
