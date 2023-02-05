// write a class to calculate the uber price.

class price{
    constructor(distance ,charge){
        this.distance=distance;
        this.charge=charge;
    }

    get total(){
        return this.distance*this.charge;
    }
}

let fare=new price(10,20);

console.log(fare.total)