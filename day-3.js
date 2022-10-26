//                                      Exercises: Level 1
//1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Uma"
let lastName = "Jagata"
let country = "India"
let age = 21
let isMarried = false
let year = new Date()

console.log (typeof(firstName))
console.log (typeof(lastName))
console.log (typeof(country))
console.log (typeof(age))
console.log (typeof(isMarried))
console.log (typeof(year))

//2.Check if type of '10' is equal to 10
console.log(typeof('10') === typeof(10))

//3.Check if parseInt('9.8') is equal to 10
console.log(typeof('9.8') === typeof(10))

//4.Boolean value is either true or false.
  // i . Write three JavaScript statement which provide truthy value.
     let name = "uma"
     console.log(typeof(name))
     let largeValue = 4>3
     console.log(typeof(largeValue))
     let num = 21
     console.log(typeof(num))
  // ii. Write three JavaScript statement which provide falsy value.
     let undefin;
     console.log(typeof(undefin))
     let empty = null
     console.log(typeof(empty))
     let smallValue = "nill"
     console.log(typeof(smallValue))
// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// i.4 > 3
// ii.4 >= 3
// iii.4 < 3
// iv.4 <= 3
// v. 4 == 4
// vi.4 === 4
// vii.4 != 4
// viii.4 !== 4
// ix.4 != '4'
// x.4 == '4'
// xi.4 === '4'
//Find the length of python and jargon and make a falsy comparison statement.
console.log(4>3)
console.log(4>=3)
console.log(4<3)
console.log(4<=3)
console.log(4==4)
console.log(4===4)
console.log(4!=4)
console.log(4!==4)
console.log(4!='4')
console.log(4=='4')
console.log(4==='4')
console.log('python'.length > 'dragon'.length)


//6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

//i.4 > 3 && 10 < 12
//ii.4 > 3 && 10 > 12
//iii.4 > 3 || 10 < 12
//iv.4 > 3 || 10 > 12
//v.!(4 > 3)
//vi.!(4 < 3)
//vii.!(false)
//viii.!(4 > 3 && 10 < 12)
//ix.!(4 > 3 && 10 > 12)
//x.!(4 === '4')
//xi.There is no 'on' in both dragon and python

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(!('dragon'.match('on') && 'python'.match('on')))


//7.Use the Date object to do the following activities

//i.What is the year today?
//ii.What is the month today as a birthYear?
//iii.What is the date today?
//iv.What is the day today as a birthYear?
//v.What is the hours now?
//vi.What is the minutes now?
//vii.Find out the birthYears of seconds elapsed from January 1, 1970 to now.

let now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now)
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
let allseconds = Date.now()
console.log(allseconds)


//                                              Exercises: Level 2
// 1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let  base = 20
let height = 10
let areaOfTriangle = 0.5*base*height
console.log(areaOfTriangle)


 // 2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = 5
let sideB = 4
let sideC = 3
let perimeterOfTriangle = 2*(sideA*sideB*sideC)
console.log("perimeterOfTriangle")

//3.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = 2
let width = 3
let areaOfRectangle = length * width
let perimeterOfRectangle = 2*(length + width)
console.log(areaOfRectangle)
console.log(perimeterOfRectangle)

//4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14
let pi = 5
let radius = 3.14
let areaOfCircle = pi * radius * radius
let circumferenceOfCircle = 2 * pi * radius
console.log(areaOfCircle)
console.log(circumferenceOfCircle)

//5.Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x = 3
let y = 2*x - 2
console.log(y)

//6.Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2;
let x2 = 6;
let y1 = 2;
let y2 = 10;
let m = (y2-y1)/(x2-x1)
console.log(m)

//7.Compare the slope of above two questions.
console.log(y === m)

//8.Calculate the value of y (y = x2 + 6x + 9-9). Try to use different x values and figure out at what x value y is 0.
let X = 0
let Y = 2*X + 6*X + 9-9
console.log(Y)

//9.Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = 40
let ratePerHour = 28
let payOfPerson = hours*ratePerHour
console.log("payOfPerson")

//10.If the length of your name is greater than 7 say, your name is long else say your name is short.
let name10 = name>7
? console.log("your name is long")
: console.log("your name is short")





//11.Compare your first name length and your family name length and you should get this output.
let firstName11 = "Uma"
let lastName11 = "jagata"
console.log(`Your first name, ${firstName11} is shorter than your family name, ${lastName11}`)

//12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myage = 21;
let yourAge = 25;
console.log("i am 4 years younger than you")

//13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

let Years = 25
birthYear = 1995
  ? console.log(`You are ${Years}. You are old enough to drive`)
  : console.log(`You are ${Years}. You will be allowed to drive after 3 years`)

  Years = 15
birthYear = 2005
  ? console.log(`You are ${Years}. You are old enough to drive`)
  : console.log(`You are ${Years}. You will be allowed to drive after 3 years`)

//14.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

age = 100;
let seconds = new Date()
console.log(seconds.getSeconds())




//15.Create a human readable time format using the Date time object
//i.YYYY-MM-DD HH:mm
// ii.DD-MM-YYYY HH:mm
// iii.DD/MM/YYYY HH:mm
 now = new Date()
 year = now.getFullYear() 
const month = now.getMonth() + 1 
const date = now.getDate() 
 hours = now.getHours() 
const minutes = now.getMinutes()

console.log(`${year}/${month}/${date} ${hours}:${minutes}`) 
console.log(`${date}/${month}/${year} ${hours}:${minutes}`) 
console.log(`${date}-${month}-${year} ${hours}:${minutes}`) 

//                                               Exercises: Level 3
//1.Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//i.YYY-MM-DD HH:mm
console.log(`${year}-${month}-${date} ${hours}:${minutes}`) 

