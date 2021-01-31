// Constructor Function Syntax
function Movie(title, director, genre, releaseYear, rating) {
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.releaseYear = releaseYear;
  this.rating = rating;
}

Movie.prototype.getOverview = function () {
  const { title, director, genre, releaseYear, rating } = this;
  return `${title}, a ${genre} film directed by ${director} was released in ${releaseYear}. It received a rating of ${rating}`;
};

// // Class Syntax
// class Movie {
//   constructor(title, director, genre, releaseYear, rating) {
//     this.title = title;
//     this.director = director;
//     this.genre = genre;
//     this.releaseYear = releaseYear;
//     this.rating = rating;
//   }

//   getOverview() {
//     const { title, director, genre, releaseYear, rating } = this;
//     return `${title}, a ${genre} film directed by ${director} was released in ${releaseYear}. It received a rating of ${rating}`;
//   }
// }

const et = new Movie('ET', 'Steven Spielberg', 'Alien', 1990, 8);
console.log(et.getOverview());
