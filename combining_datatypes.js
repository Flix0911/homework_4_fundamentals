// ----

//1. Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = {
    crayons: ['purple', 'blue']
}
console.log(crayonBox.crayons[1]) //will return blue

//2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
    cap: {
        material: 'metal',
        color: 'yellow',
    }
}

console.log(bottle.cap.material) //should log metal

//3.Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [
    {
        name: 'banana',
        //{
            //location: 'Costa Rica',
        //},
        price: 2,
    },

];

console.log(receipt[0].name)//should log banana
//console.log(receipt[0].name.location) //I'm unsure why I couldn't put an object within an object

//4. Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [
    'Blue street',
     tenets = ['Steve', 'Brittany', 'Sarah'],
    'new york'
]

console.log(apartmentBuilding[1][2])//should log Sarah

//--commit: combine objets, array, and functions--//

// ----

//Combine Objects, arrays, and functions more than one level deep

//1. Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

const knit = (item, size) => {
    return {
        item: item,
        size: size,
    }
}

console.log(knit('scarf', 'six_ft'))

//2. Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

const crayonSelector = () => {
    const crayonColor = ['purple', 'blue'];
    console.log(crayonSelector(crayonColor[0]))
    }
crayonSelector('red')