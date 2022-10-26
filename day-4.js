//                                                Exercises: Level 1
// 1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = 21
if (age > 18) {
    console.log("you are old enough to drive")
} else {
    console.log("You are left with 3 years to drive.")
}

// 2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = 21
let yourAge = 26
if (myAge && yourAge) {
    console.log("you are 5 years older than me")
}

// 3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//i.using if else
let a = 4
let b = 3
if (a > b) {
    console.log("a is greater than b")
} else {
    console.log("a is less than b")
}
//ii.ternary operator.
let ternary = a > b
isternary = true
    ? console.log("a is greater than b")
    : console.log("a is less than b")

// 4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = 2
let number1 = 9
if (number % 2 == 0) {
    console.log("number is even")
} else {
    console.log("number is odd")
}

//                                                          Exercises: Level 2
//1.Write a code which can give grades to students according to theirs scores:
//80-100, A
//70-89, B
//60-69, C
//50-59, D
//0-49, F

let score = 75
if (80 - 100) {
    console.log("your grade is A")
} else if (70 - 89) {
    console.log("your grade is B")
} else if (60 - 69) {
    console.log("your grade is C")
} else if (50 - 59) {
    console.log("your grade is D")
} else {
    console.log("your grade is F")
}

// 2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//September, October or November, the season is Autumn.
//December, January or February, the season is Winter.
//March, April or May, the season is Spring
//June, July or August, the season is Summer




// 3.Check if a day is weekend day or a working day. Your script will take day as an input.
let day = "tuesday"


switch (day) {
    case 'monday':
        console.log('Today is Monday')
        break
    case 'tuesday':
        console.log('Today is Tuesday')
        break
    case 'wednesday':
        console.log('Today is Wednesday')
        break
    case 'thursday':
        console.log('Today is Thursday')
        break
    case 'friday':
        console.log('Today is Friday')
        break
    case 'saturday':
        console.log('Today is Saturday')
        break
    case 'sunday':
        console.log('Today is Sunday')
        break
    default:
        console.log('It is not a week day.')
}


//                                                Exercises: Level 3
//Write a program which tells the number of days in a month.
let month = "march"

switch (month) {
    case 'january':
        console.log("January has 31 days")
        break
    case 'february':
        console.log("February has 28 days")
        break
    case 'march':
        console.log("March has 31 days")
        break
    case 'april':
        console.log("April has 30 days")
        break
    case 'may':
        console.log("May has 31 days")
        break
    case 'june':
        console.log("June has 30 days")
        break
    case 'july':
        console.log("July has 31 days")
        break
    case 'august':
        console.log("August has 31 days")
        break
    case 'september':
        console.log("September has 30 days")
        break
    case 'october':
        console.log("October has 31 days")
        break
    case 'november':
        console.log("November has 30 days")
        break
    case 'december':
        console.log("December has 31 days")
        break
}


// 1.Write a program which tells the number of days in a month, now consider leap year.
 month = "february"

switch (month) {
    case 'january':
        console.log("January has 31 days")
        break
    case 'february':
        console.log("February has 29 days")
        break
    case 'march':
        console.log("March has 31 days")
        break
    case 'april':
        console.log("April has 30 days")
        break
    case 'may':
        console.log("May has 31 days")
        break
    case 'june':
        console.log("June has 30 days")
        break
    case 'july':
        console.log("July has 31 days")
        break
    case 'august':
        console.log("August has 31 days")
        break
    case 'september':
        console.log("September has 30 days")
        break
    case 'october':
        console.log("October has 31 days")
        break
    case 'november':
        console.log("November has 30 days")
        break
    case 'december':
        console.log("December has 31 days")
        break
}