class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating
    }
    output() {
    return `the rating is ${this.rating}`
  }
}

var result=new Movie("Avengers", "Marvel",);

console.log(result.output());