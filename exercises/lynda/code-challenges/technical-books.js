class Book {
  constructor(title, author, isbn, numberOfCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numberOfCopies = numberOfCopies;
  }

  getAvailability() {
    const { numberOfCopies } = this;
    if (numberOfCopies === 0) {
      return 'out of stock';
    } else if (numberOfCopies < 10) {
      return 'low stock';
    } else {
      return 'in stock';
    }
  }

  sell(numSold = 1) {
    const { numberOfCopies } = this;
    this.numberOfCopies -= numSold;
  }
  restock(numCopies = 5) {
    const { numberOfCopies } = this;
    this.numberOfCopies += numCopies;
  }
}

class TechnicalBook extends Book {
  constructor(title, author, isbn, numberOfCopies, edition) {
    super(title, author, isbn, numberOfCopies);
    this.edition = edition;
  }

  getEdition() {
    return `The current edition of this book is ${this.edition}`;
  }
}

const crackingTheCodingInterview = new TechnicalBook(
  'Cracking the coding interview',
  'Gayle Mcdowell',
  1209123,
  7,
  '2.3'
);

console.log(crackingTheCodingInterview.getAvailability());
console.log(crackingTheCodingInterview.getEdition());
