import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Thanks for learning❤️</h1>
<div>
 This is just placeholder text, check the console to view your progress
</div>
`;

// () parenthesis
// {} braces
// [] brackets
// < >
// a basic example of creating an array and accessing an item
const places = ["Paris", "Aquent", "Burger King"];
const firstPlace = places[0];
console.log("the first place: ", firstPlace);

//creating a new array from an existing array
//Inside of an object or array,
//  the 3 dots are known as the "spread-operator"
const morePlaces = [...places, "Hawaii"];
console.log("places + another: ", morePlaces);

const students = [];
const personnel = ["Mr. Jackson", "Mrs. Maisel", ...students];
const principalPerson = personnel[0];
const [principal, ...staff] = personnel;

console.log(staff);
//Challenge Area 🔥

//create an array of food items
//name, and isGood const foodItems
const foodItems = [
  { name: "steak", isGood: true },
  { name: "olives", isGood: false },
  { name: "mostaciolli", isGood: true },
  { name: "carrots", isGood: true },
  { name: "spinach", isGood: false }
];

// ✨some are carrots?
console.log(
  "some are carrots?",
  foodItems.some(foodItem => foodItem.name === "carrots")
);
//✨ every-- taste good?
console.log("all good?", foodItems.every(foodItem => foodItem.isGood));

console.log(
  "these taste good",
  foodItems.filter(foodItem => foodItem.isGood).map(({ name }) => name)
);
// ✨forEach -- console.log('I like ${item}`)
foodItems
  .filter(foodItem => foodItem.isGood)
  .forEach(({ name }) => console.log(`I like ${name}`));

// ✨Chain any two together

// map over the data

/*
1. Create an array of strings (tv shows)
2. Map over each item and add "I have watched SHOW"
3. Return that information in a new array
4. Filter over that data to remove some shows (by name, etc)
*/

const tvShows = [
  { name: "Big Bang Theory", isWatched: true },
  { name: "Dallas", isWatched: false },
  { name: "Alf", isWatched: true },
  { name: "Survivor", isWatched: false },
  { name: "Game of Thrones", isWatched: true }
];

const watchedTvShows = tvShows.filter(tvShow => tvShow.isWatched);
console.log("watched TV shows", watchedTvShows);

const watchedTvShowText = tvShows
  .filter(tvShow => tvShow.isWatched)
  .map(({ name }) => `I have watched ${name}`);
console.log("all watched tv shows texts", watchedTvShowText);

console.log("watched tv shows", watchedTvShows);
console.log(
  "watched tv shows, except Alf",
  watchedTvShows.filter(watchedTvShow => !(watchedTvShow.name === "Alf"))
);
