var recipes = {
  Pizza: 'cheese',
  Taco: 'rice',
  Sushi: 'fish'
}

var updateObjectWithKeyAndValue = function(recipes, Burrito, Bean) { return Object.assign({}, recipes, { [Burrito]: Bean })
}

var destructivelyUpdateObjectWithKeyAndValue = function(recipes, Cookie, flour) {
  recipes[Cookie] = flour
  return recipes
}

var deleteFromObjectByKey = function(recipes, Pizza) {
  Object.assign({}, delete recipes.Pizza)
}
