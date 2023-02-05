// a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
//  a String representing the studio, and a String representing the rating as its arguments,
//   and sets the respective class properties to these values.

class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating
    }
    output() {
    return `the rating is ${this.rating}`
  }
}

var result=new Movie("Avengers", "Marvel", "PG10");

console.log(result.output());