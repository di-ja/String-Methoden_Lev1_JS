function Superman(name) {
    let hallo = `Hallo mein Name ist ${name}`;   
    console.log(hallo)
}
Superman('Dirk')



function person(age, city, nachn) {
    console.log(`Hallo mein Name ist Dirk, ich bin ${age} Jahre alt, ich komme aus ${city} und mein Nachname ist ${nachn}.`)
}
person('49b', 'Langenfeld', 'Jasper')



//slice
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