// ---- 
//Section 1: Programming Fundamentals
// ----

//completed reading programming principles


//Responses



// DRY
    //Don't Repeat Yourself. Don't do the same thing you just did somewhere in the program
        //Use the tools/functionalities built in that are simplified and can be relied on later

// KISS
    //Keep it simple, stupid. Don't write something overly abstract or solving something in a convuluted manner
        //write something that is to the point, legible to you and others, and that can be clearly understood what it is doing

// Avoid creating a YAGNI
    //You aren't going to need it. Don't create something that you want to add in the future. Create what is current
        //and necessary to what you're going. Everything written should be used in the current moment/set up

// Do the simplest thing that could possibly work
    //Similar to KISS. Simplicity helps you and others who read your work, complex solutions are only adding trouble

// Don't make me think
    //Everything you write should be easy to comprehend by others, straining others to understand your code isn't beneficial at all

// Write code for the maintainer
    //Write with the mindset that someone else is going to maintain this, even if that someone is you, because legibleness and simplicity are easier

// Single responsibility principle
    //Everything written should be doing an excellent job at the one task it is assigned

// Avoid premature optimization
    //Ensure everything works 1st and is doing what you want, worry about efficiency after that

// Separation of concerns
    //Seperate what is accomplishing what into distinct sets/locations in the code.

//Which one surprises you
    //Optimization was an interesting one considering that is how everything thinks, we must always strive to more efficiency

//which one is currently giving you the most struggle
    //A lot of these. I'm repeating myself, not keeping it simple, most likely making teachers/graders think too hard, not everything is doing its job perfectly.
    //I think it will come with time but alas


// --
//Commenting code

// const f = l => { //our function is called f
//     let es = 0, p = 0, c = 1, n = 0 //defining values of our variables in this function
//     while (c <= l) { // if c is less than or equal to l
//       n = c + p //n would be equal to c + p
//       [c, p] = [n, c] // c=n while p=c?
//       es += (c % 2 === 0) ? c : 0 //addition of +2 to es, c / 2 equals 0. Unsure that last bit
      //console.log(es)
      // console.log(p)
      // console.log(c)
      // console.log(n)
//     }
//     return es

//   }
  //In the end, I'm very confused what this is doing.
  
//   console.log(f(55))

const f2 = (limit) => { //function named f2 with 1 argument, limit
    let evenSum = 0; //variable evenSum is equal to 0 at start
    let previous = 0; //variable previous is equal to 0 at start
    let current = 1; //variable current is equal to 1 at start
    while (current <= limit) { //while current is less than or equal to limit, the below will occur
      let next = current + previous; //variable next is 1 + 0 initially ~ 1+1 after that, 1+2, 2+3, 3+5, 5+8, 8+13, 13+21, I don't think it can go further than that
      previous = current; 
      current = next;
      if (current % 2 === 0) { 
        evenSum += current;
      }
    }
    return evenSum;
  }
  
  
  console.log(f2(44)) //run function f2 with an argument of 44 in limit. It cannot exceed 44 and I believe 34 will be the last number