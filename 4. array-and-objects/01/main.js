var myPenguin = {
    name: "Captain Cook",
    origin: "Mr. Popper's Penguins",
    author: "Richard and Florence Atwater"
};

myPenguin.favoriteFoods = ["fish", "frog", "idontknow"]

console.log(myPenguin.favouriteFoods[1]);

var firstFavFood = myPenguin.favoriteFoods[0];

myPenguin.favoriteFoods.push = "unknown";

console.log(myPenguin.favoriteFoods.length);

myPenguin.favoriteFoods[length-1] = "pineapples";

var lastFavFood = myPenguin.favoriteFoods[length-1];

for(var i = 0; i < myPenguin.favoriteFoods.length; i++) {
    console.log(myPenguin.favoriteFoods[i]);
} 