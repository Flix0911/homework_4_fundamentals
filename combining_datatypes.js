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
    console.log(crayonColor[0]) //logged one of the elements - purple
    };
//console.log(crayonSelector([0])) //getting closer ~ got [ 'purple', 'blue' ] ~ had a different console.log in the function
crayonSelector() //ran the function


//3. Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

function powerButton() {
    return function options() {
        console.log("select a song")
    }
}

console.log(powerButton()) // returns Function: options] - this makes sense it's returning the function called options
//console.log(powerButton(options)) //will not run, can log options because it is in the function
const options = powerButton();
options()

//I don't fully understand how I got to this - going to write it down
//I have called a function powerButton
//powerButton returns a function called options() that console.logs 'select a song'
//From trying different ways to log 'select a song' (see above), they didn't work
//I create a variable called options that is the function powerButton()
//From there, I can call options which 'pushes' the powerButton, which is the function options(), that will console.log('select a song')

//This is the conclusion I'm coming to, but I'm halfway to understand

// ----


//1. Make a function add that takes two arguments (numbers) and sums them together

function add(num1, num2) {
    return num1 + num2;
}

const sum1 = add(7, 30)
console.log(sum1)

//2. Make a function subtract that takes two arguments (numbers) and subtracts them

function subtract(num1, num2) {
    return num1 - num2;
}

const sum2 = subtract(30, 20)
console.log(sum2)

//3.Make a function multiply that takes two arguments and multiplies them

function multiply(num1, num2) {
    return num1 * num2;
}

const sum3 = multiply(30, 30)
console.log(sum3)

//4. Make a function divide that takes two arguments and divides them

function divide(num1, num2){
    return num1 / num2;
}

sum4 = divide(50000, 50)
console.log(sum4)

//5. Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
