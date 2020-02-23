var penguin = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
};

penguin.outfit  = {
    hat: "baseball cap",
    shirt: "Hawaiian shirt",
    pant: "cargo shorts",
    shoes:"flip-flops"
}

var penguinHatType = penguin.outfit.hat;
console.log(penguin.outfit.hat)

penguin.outfit.watch = "pocket watch"

penguin.outfit.hat = "hat"

delete penguin.outfit.pant;

for (let key in penguin.outfit) {
    console.log(key+ " : " +penguin.outfit[key]);
}