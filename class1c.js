// c) Write a method getPG, which takes an array of base type Movie as its argument,
//  and returns a new array of only those movies in the input array with a rating of "PG".
//  You may assume the input array is full of Movie instances. The returned array need not be full.

class Movie{
    constructor(rating){
        this.rating=rating;
    }
    

    get output() {
      for(i in this.list){
        if(this.list[i]==this.rating){
            return i;
        }
      }
    }

  set films(films){
    this.list=films;
  }
}

var result=new Movie("PG");
Movie.films={
    Captain_America:"PG2",
    Doctor_Strange:"PG",
    Guardians_of_the_Galaxy:"PG5",
    Spider_Man : "PG",
    Thor:"PG6",
}
console.log(result.output);

// ["Captain America", "Doctor Strange","Guardians of the Galaxy", "Spider-Man", "Thor"]