var str = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";

var dinosaur = "triceratops";

var nameUpperCased = dinosaur.toUpperCase();

console.log(nameUpperCased);

var strCharsAfter = str.replace('Velociraptor', nameUpperCased);

console.log(strCharsAfter.substr(0, strCharsAfter.length / 2));
