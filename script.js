let recipeElement = document.getElementById('allRecipes');

let jsonDatabase = [
  {
    "title" : "Chocolate Chip Cookies",
    "picture_url" : "https://cookieandkate.com/images/2017/11/amazing-chocolate-chip-cookies-recipe-2.jpg",
    "description" : "These cookies are a little chubbier than usual chocolate chip cookies. You only need one bowl and you can mix the ingredients by hand!",
    "recipePage" : "cookies.html",
    "dietary" : ["Vegetarian"]
  },
  {
    "title" : "Banana Bread",
    "picture_url" : "https://cookieandkate.com/images/2015/11/healthy-banana-bread-1.jpg",
    "description" : "I'm pretty sure almost everyone is making banana bread in quarantine. This banana bread is very dense and moist. For this recipe, I recommend using bananas that are way past the ripe point.",
    "recipePage" : "banana.html",
    "dietary" : ["Vegetarian", "No added sugar", "Dairy-free", "Whole wheat"]
  },
  {
    "title" : "Chocolate Chip Blondies",
    "picture_url" : "https://cookieandkate.com/images/2017/04/healthy-chocolate-chips-blondies-recipe-1.jpg",
    "description" : "Sometimes brownies are a little bit too heavy. These blondies are lighter but still chocolatey.",
    "recipePage" : "blondies.html",
    "dietary" : ["Vegetarian"]
  },
  {
    "title" : "Zucchini Muffins",
    "picture_url" : "https://cookieandkate.com/images/2017/05/healthy-zucchini-muffins-recipe.jpg",
    "description" : "Don't worry, these muffins don't taste at all like zucchini. These are great to have as a healthy snack during the day!",
    "recipePage" : "muffins.html",
    "dietary" : ["Vegetarian", "No added sugar", "Whole wheat"]
  },
  {
    "title" : "Anzac Biscuits",
    "picture_url" : "https://www.kingarthurflour.com/sites/default/files/styles/featured_image_2x/public/recipe_legacy/5393-3-large.jpg?itok=IZlJQ8OC",
    "description" : "These biscuits are crunchy on the outside and chewy on the inside. They're a recent discovery of mine that I really enjoy making.",
    "recipePage" : "biscuits.html",
    "dietary" : ["Vegetarian"]
  },
  {
    "title" : "Raisin Scones",
    "picture_url" : "https://www.kingarthurflour.com/sites/default/files/styles/featured_image_2x/public/recipe_legacy/44-3-large.jpg?itok=4Ki8IfXV",
    "description" : "Some people love scones, some people hate them. These go really well with any fruit jam you might already have in your pantry.",
    "recipePage" : "scones.html",
    "dietary" : ["Vegetarian"]
  }
]

for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
}

function createElement(incomingJSON){
  let newRecipeElement = document.createElement("DIV");
  newRecipeElement.classList.add("recipeBox");

  let newRecipeTitle = document.createElement("H3")
  newRecipeTitle.classList.add("recipeTitle");
  newRecipeTitle.innerHTML = incomingJSON['title'];
  newRecipeTitle.href = incomingJSON['recipePage'];
  newRecipeElement.appendChild(newRecipeTitle);

  let newImage = document.createElement("IMG");
  newImage.classList.add("recipeImage");
  newImage.src = incomingJSON['picture_url'];
  newImage.href = incomingJSON['recipePage'];
  newRecipeElement.appendChild(newImage);

  let newDescription = document.createElement("P")
  newDescription.classList.add("recipeDescription");
  newDescription.innerHTML = incomingJSON['description'];
  newRecipeElement.appendChild(newDescription);

  let newDietaryList = document.createElement("UL");
  newRecipeElement.appendChild(newDietaryList);

  for (var i = 0; i < incomingJSON['dietary'].length; i++){
    var dietaryString = incomingJSON['dietary'][i];
    var newDietary = document.createElement("LI");
    newDietary.innerHTML = dietaryString;
    newDietaryList.appendChild(newDietary);
  }
  recipeElement.appendChild(newRecipeElement);
}
