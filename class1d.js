// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
//   the studio “Eon Productions”, and the rating “PG­13”

class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating
    }
    output() {
    return `the title ${this.title}, the studio ${this.studio}, and the rating ${this.rating}`
  }
}

var result=new Movie("Casino Royale", "Eon Productions", "PG­13");

console.log(result.output());