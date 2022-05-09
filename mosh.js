function Place(size){
    this.size = size;
    let owner = "anybody";
}

function sayHi(){
    console.log("Hi !!!!!");
}

const home = new Place(10);
home.location = "guelma";
console.log(home);
delete home.location;
console.log(home);