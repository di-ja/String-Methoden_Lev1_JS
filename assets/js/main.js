//String und String Methoden
// Single quotes
let str = 'text'
//double quotes
let str1 = "text"
//backstick `` 
let str2 = `text`
let str3 = `Hello 

world
I
Am
SUPER`
console.log(str3)
document.write(str3)
//Concatenation
let text1 = "hello"
let text2 = "world"
let hi = text1 + " " + text2
console.log(hi)

//Template literals
// With backstick ``
let hi1 = `${text1} ${text2}, I am Super`
console.log(hi1)

let batman = "Batman";
//Hi I am Batman
let hiBatman = `Hi I am ${batman}`


// 2 Schritt

//a - Deklaration
function func1() {
    console.log("I am Func1")
}
// parameter or argument
function func2(age) {
    console.log('I am ' + age)
}

function func3(name) {
    console.log('Hallo, mein Name ist ' + name)
    console.log(`Hallo, mein Name ist ${name}`)
}
//b - Aufrufen

func1()
func2(20)
func3('Batman')

//function with 3 parameter: name, age and city
//Hello I am Superman, I am 30 years old and I come from Gotham city

function greeting(name, age, city) {
    console.log(`Hello I am ${name}, I am ${age} years old and I come from ${city}`)
}

greeting('batman', 30, 'Gotham city')
greeting('Superman', 33, 'NY')

// String length
// str.length
let word = "wikipedia"
console.log(word.length)
let word2 = "The best thing about a boolean is even if you are wrong, you are only off by a bit"
console.log(word2.length)
let word3 = "Some text."
let word3Length = word3.length
console.log(word3Length)


//Find a string in a string- Eine Zeichenfolge in einer Zeichenfolge suchen
//str.indexOf('was')
let sentence = "As sly as a fox, as strong as an ox"
console.log(sentence.indexOf("x", 14))
let sentence2 = "0-334-54-45-1"
console.log(sentence2.indexOf("-"))
let email = "iamsuper@super.de"
console.log(email.indexOf("@"))
let falschEmail = 'iamnotsupersuper.de'
console.log(falschEmail.indexOf("@"))


// exemple: morgen mit Georg
function logIn() {
    let email = document.getElementById("email").value
    if (email.indexOf('@') == -1) {
        alert('No NO NO')
    } else {
        alert('Welcome')
    }
}

// lastIndexOf()
console.log(sentence.length)
console.log(sentence.lastIndexOf("as"))
console.log(sentence.lastIndexOf("a"))
console.log(sentence.lastIndexOf("z"))


//search

console.log(sentence.search('fox'))
console.log(sentence.indexOf('fox'))


//Extracting String parts - String-Teile extrahieren
// slice(start,end)
//substring(start,end)
//substr(start,length)

//slice : positive und negative indexes
let quote = 'Hi world, I am Super'

let newQuOte = quote.slice(9, 20)
console.log(newQuOte)

let list = 'Home, About and Contact'

let home = list.slice(0, 4)
let about = list.slice(6, 12)
let contact = list.slice(16)

console.log(home)
console.log(about)
console.log(contact)

// substring the same as slice with negative indexes
console.log(list.substring(0, 4))
console.log(list.substring(6, 12))
console.log(list.substring(16))

//substr
let myQuote = 'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late '
console.log(myQuote.indexOf('programmers'))
let lengthProgrammers = 'programmers'.length
console.log(lengthProgrammers)
console.log(myQuote.substr(17, 11))


//Replace String
//replace(was, wodurch )

myQuote = myQuote.replace('programmer', 'designer')
myQuote = myQuote.replace('programmer', 'designer')
console.log(myQuote)

//uppercase and lowercase  
//str.toUpperCase()
//str.toLowerCase()
console.log(myQuote.toUpperCase())

//concatenation 
// str.conact('str1')

let newStr1 = 'hi'
let newStr2 = ' world'

let resultStr = newStr1.concat(newStr2)
// resultStr=newStr1 + newStr2
// resultStr=`${newStr1}${newStr2}`
console.log(resultStr)

//trim

let moreExample = "       Test     "
console.log(moreExample)
console.log(moreExample.trim())

//Extracting String
let hallo = 'Hallo'
console.log(hallo.indexOf('H')) // 0
console.log(hallo.charAt(0)) //h


// Number 
let num = 23
console.log(num)
// Numbers methoden
// toString() gleich wie String: string conversion
console.log(String(23))
console.log(num.toString())
//toExponential()
let num1 = 1000
console.log(num1.toExponential(2))
//toFixed
let num2 = 3.65437676347676347643
console.log(num2.toFixed(3))
//toPrecision
let num3 = 123456.2
console.log(num3.toPrecision(5))

//Number
console.log(Number(false))
console.log(Number("14"))
console.log(Number("14,33"))
console.log(Number("14.33"))

//
console.log(Math.pow(2, 2))
//template literals `${}` 🔥⚠️
//String: indexOf,lastIndexOf,toUpperCase,toLoweCase,chartAt,search,slice,length,substring,replace,trim,substr,concat
//Number: toString,toFixed,toExponential,toPrecision