                                            //EXERCISE: LEVEL-1
//1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'
let challenge = "30 Days of javascript"

//2.Print the string on the browser console using console.log()
console.log(challenge);

//3.Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//4.Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())

//5.Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())

//6.Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(1))

//7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript
console.log(challenge.substr(1))

//8.Check if the string contains a word Script using includes() method
console.log(challenge.includes('script'))

//9.Split the string into an array using split() method
console.log(challenge.split())

//10.Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '))

//11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(company.split())
console.log(company.split(' '))

//12.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method
console.log(challenge.replace('javascript','python'))

//13.What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method
console.log(challenge.charAt(15))

//14.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'))

//15.Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))

//16.Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript
console.log(challenge.lastIndexOf('a'))

//17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentense="You cannot end a sentence with because because because is a conjunction"
console.log(sentense.indexOf('because'))

//18.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentense.lastIndexOf('because'))

//19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentense.search('because'))

//20.Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '
let challenges = "   30 Days of javascript   "
console.log(challenge.trim(''))

//21.Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("30 Days of javascript"))

//22.Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("30 Days of javascript"))

//23.Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'))

//24.Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let challen = '30 Days Of'
console.log(challen.concat('javascript'))

//25.Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))
                               //LEVEL - 2

//1.Using console.log() print out the following statement:
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

//2.Using console.log() print out the following quote by Mother Teresa:
let Mother_Teresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(Mother_Teresa)

//3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof challenge)

//4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num = '9.8'
let numfloat = parseFloat(num)
console.log(numfloat)

//5.Check if 'on' is found in both python and jargon
let a = "python"
let b = "jargon"
console.log(a.includes("on"))
console.log(a.includes("on"))

//6.I hope this course is not full of jargon. Check if jargon is in the sentence.
let c = 'I hope this course is not full of jargon'
console.log(c.includes("jargon"))

//7.Generate a random number between 0 and 100 inclusively.
let randnum = Math.floor(Math.random()*100)
console.log(randnum)

//8.Generate a random number between 50 and 100 inclusively.
let min = 50;
let max = 100;
let randNum = Math.floor(Math.random()*(max-min+1)+min);
console.log(randNum)

//9.Generate a random number between 0 and 255 inclusively.
let randNUM = Math.floor(Math.random()*255)
console.log(randNUM)

//10.Access the 'JavaScript' string characters using a random number.
let string = "javascript"
let firstLetter = string[0]
let secondLetter = string[1]
let thirdLetter = string[2]
let fourthLetter = string[3]
let fifthLetter = string[4]
let sixthLetter = string[5]
let seventhLetter = string[6]
let eightLetter = string[7]
let ninthLetter = string[8]
let tenthLetter = string[9]
console.log( firstLetter,secondLetter,thirdLetter,fourthLetter,fifthLetter,sixthLetter,seventhLetter,eightLetter,ninthLetter,tenthLetter)

//11.Use console.log() and escape characters to print the following pattern.
console.log('1\t1\t1\t1\t1')
console.log ('2\t1\t2\t4\t8')
console.log ('3\t1\t3\t9\t27')
console.log ('4\t1\t4\t16\t64')
console.log ('5\t1\t5\t25\t125')

//13.Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let paragraph = 'You cannot end a sentence with because because because is a conjunction'
console.log(paragraph.substr(30,24))

                                   // LEVEL-3
//1.'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let word = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(word.search('love'))

//2.Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let Word = 'You cannot end a sentence with because because because is a conjunction'
console.log(Word.match('because'))

//3.Clean the following text and find the most frequent word (hint, use replace and regular expressions)
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
sentence = sentence.replace(/%/g,"")
sentence  =sentence.replace(/@/g, "")
sentence = sentence.replace(/\$/g, "")
sentence = sentence.replace(/&/g, "")
sentence = sentence.replace(/#/g, "")
sentence = sentence.replace(/;/g, "")
sentence = sentence.replace(/,/g, "")
sentence = sentence.replace(/\./g, "")
console.log(sentence)


//4.Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const text = 'He earns 5000 euro from salary per\ month, 10000 euro annual bonus, 15000 euro\ online courses per month.';
const arr  = text.match(/\d+/g);
const totalAnnualIncome = (+arr[0] + +arr[2]) * 12 + +arr[1];
console.log(totalAnnualIncome);