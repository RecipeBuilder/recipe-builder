var recipeList = document.querySelector('ul');
var getRecipe = document.getElementById('getRecipe');
ingredientsList = {
  a:  "avocado",
  b:  "banana",
  c:  "chocolate",
  d:  "durian",
  e:  "eggs",
  f:  "feta",
  g:  "grape",
  h:  "halibut",
  i:  "iodized salt",
  j:  "jicama",
  k:  "kiwi",
  l:  "lemon",
  m:  "mango",
  n:  "nopale",
  o:  "oregano",
  p:  "pickles",
  q:  "quinoa",
  r:  "raisin",
  t:  "tofu",
  u:  "ume",
  v:  "valerian",
  w:  "wombat pate",
  x:  "mystery meat",
  y:  "yams",
  z:  "zucchini"
}
function getApi() {
var requestUrl = "https://api.spoonacular.com/recipes/complexSearch?apiKey=6b2994b0da2e49f2a7e66de1133a594f&per_page=5"

fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        recipeList.appendChild(listItem);
      }
    });
}
getRecipe.addEventListener('click', getApi);

// Code for the recipe builder site

// // Initialize
// function init (){
//     // Load any ingredients that were previously entered and autofill the ingredients list

// }

// // Get Recipe Button

// function getRecipe (){
//     // Calls spoonacular api with the inputs as ingredients 
//     // gets 5 recipes back in order of most ingredients used
//     // if recipe uses more of an ingredient than the use has on hand, 
//         // 

// }

// Surprise Me variables
var surpriseRecipe = document.getElementById('surpriseRecipe');
var surpriseResult = document.getElementById('surpriseResult');

function surpriseMe (){
    // Gets one random recipe from list above
    var requestUrl = "https://api.spoonacular.com/recipes/random?apiKey=6b2994b0da2e49f2a7e66de1133a594f"
    console.log("clicked")
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var listItem = document.createElement('li');
      listItem.setAttribute("class", "btn");
      var atag = document.createElement('a')
      atag.textContent = data.recipes[0].title;   
      atag.setAttribute('target', 'blank')
      atag.setAttribute("href", data.recipes[0].sourceUrl)
      listItem.setAttribute('width', 'fit-content')
      console.log(data.recipes[0].sourceUrl)
      listItem.appendChild(atag)
      surpriseResult.appendChild(listItem);
      
    })
    };

surpriseRecipe.addEventListener('click', surpriseMe);

// Make cards

// function renderCards (){
//     // Build the cards with data sourced from the spoonacular API

// }

// init()
// // Add autocomplete for ingredients list
// // STILL NEED TO ADD DATA LIST with keys [ap = apples] etc.
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.autocomplete');
//     var instances = M.Autocomplete.init(elems, options);
//   });

