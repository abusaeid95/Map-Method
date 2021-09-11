class Webdev {
    name;
    designation= 'senior manager of HR';
    age;
    constructor (name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    startsassion(){
        console.log(this.name, 'this is new thinking');
    }
}
const amirKhan = new Webdev('Amir Khan', 55, 'jamalpur, BD');
const salmanKhan = new Webdev('Salman Khan', 25, 'jamalpur, BD');
const sarukhKhan = new Webdev('Kibria', 24, 'jamalpur, BD');

console.log(amirKhan);
console.log(salmanKhan);
console.log(sarukhKhan);
amirKhan.startsassion();
