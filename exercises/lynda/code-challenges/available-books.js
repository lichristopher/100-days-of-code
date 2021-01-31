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
