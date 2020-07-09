//Aufgabe Lev1_1_js-einführung_template-literals
function me(name, nname, alter, gebort, groesse, gewicht, hobby, spiel, essen, sport, bekleidung, jahreszeit, urlaub) {
    console.log(`Hallo mein Name ist ${name} ${nname}, ${alter} alt, geboren in ${gebort}!!! Ich bin im Laufe meines Lebens ${groesse} gewachsen ... angefressen habe ich mir ${gewicht} trotz meines Hobbys ${hobby} ... ich arbeite nur am Computer und mein letztes Spiel lief auf einem C64 und hieß ${spiel} ... am liebsten esse ich im Moment Dinge vom ${essen}. Mein Sport ist wie mein Hobby ${sport}. Bei meiner Kleidung ist es mir egal von wem sie stammt wenn überhaupt finde ich Sachen von ${bekleidung} ganz OK. Ich lebe am liebsten im ${jahreszeit} und fahre dann am liebsten mit dem ${hobby} zum ${urlaub} oder mit dem ${hobby} in die Berge.`)
}
me('Dirk', 'Jasper', '49b', 'Langenfeld-Richrath', '180cm', '91kg', 'Mountainbike', 'WinterGames', 'Grill', 'MTB', 'adidas oder Nike', 'Sommer', 'Gardasee')

//Lev1_2_js-einführung_template-literals
let L = "lunatic"
let G = "grass"
let T = "the"
let D = "dark"

console.log(`Brain Damage Songtext
The ${L} is on ${T} ${G}
The ${L} is on ${T} ${G}
Remembering games and daisy chains and laughs
Got to keep ${T} loonies on ${T} path

The ${L} is in ${T} hall
The ${L} are in my hall
The paper holds ${T}ir folded faces to ${T} floor
And every day ${T} paperboy brings more


And if ${T} dam breaks open many years too soon
And if ${T}re is no room upon ${T} hill
And if your head explodes with ${D} forebodings too
I'll see you on ${T} ${D} side of ${T} moon

The ${L} is in my head
The ${L} is in my head
You raise ${T} blade, you make ${T} change
You rearrange me 'til I'm sane
You lock ${T} door
And throw away ${T} key
There's someone in my head but it's not me

And if ${T} cloud bursts, thunder in your ear
You shout and no one seems to hear
And if ${T} band you're in starts playing different tunes
I'll see you on ${T} ${D} side of ${T} moon`)

//Lev1_1_js-einführung_length
let nachName = "Jasper"
let vorName = "Dirk"
let name = "10"
console.log(nachName.length, vorName.length)

//Lev1_2_js-einführung_indexOf
let txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."
console.log(txt.search('h'))
console.log(txt.search('Earth'))
console.log(txt.search('Moon'))

//Lev1_3_js-einführung_search
let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."
console.log(txt2.search(';'))
console.log(txt2.search('green'))
console.log(txt2.search('Blue'))

//Lev1_4_js-einführung_slice
var A = 'Sam is going to codingschool';
let E01 = A.slice(0,3)
let E02 = A.slice(4,6)
let E03a = A.slice(1, 16)
let E03b = A.slice(22,28)
let E04a = A.slice(4,16)
let E04b = A.slice(22,30)
let E05 = A.slice(22,30)
let E06a = A.slice(0,7)
let E06b = A.slice(22,30)
console.log(E01, E02, E03a, E03b, E04a, E04b, E05, E06a, E06b)
document.write(E01+"<br>", E02+"<br>", E03a, E03b+"<br>", E04a, E04b+"<br>", E05+"<br>", E06a, E06b)

//Lev1_5_js-einführung_substring
var text = 'Sam is back from codingschool';
let F01 = text.substring(0,3)
let F02 = text.substring(4,6)
let F03 = text.substring(23)
let F04a = text.substring(0,7)
let F04b = text.substring(23)
console.log(F01, F02, F03, F04a, F04b)
document.write("<br><br>",F01+"<br>", F02+"<br>", F03+"<br>", F04a, F04b)

//Lev1_6_js-einführung_substr
var text2 = "Sam is working at codingschool";
let G01 = text2.substr(0,3)
let G02 = text2.substr(4,2)
let G03a = text2.substr(15,3)
let G03b = text2.substr(24,6)
let G04a = text2.substr(0, 3)
let G04b = text2.substr(6, 5)
let G04c = text2.substr(5, 2)
let G04d = text2.substr(15, 3)
let G04e = text2.substr(24,6)
console.log(G01, G02, G03a, G03b)
document.write("<br><br>", G01+"<br>", G02+"<br>", G03a, G03b+"<br>", G04a, G04b, G04c, G04d, G04e )

//Lev1_7_js-einführung_replace
var text3 = "Sam is good at codingschool";
text3 = text3.replace('good at codingschool','bad at school')
document.write("<br><br>", text3)
var text4 = "Sam is good at codingschool";
text4 = text4.replace('Sam', 'Tom')
text4 = text4.replace('codingschool', 'School')
document.write("<br>", text4)
var text5 = "Sam is good at codingschool";
text5 = text5.replace('codingschool', 'Tennis')
document.write("<br>", text5)

//Lev1_8_js-einführung_toLowerCase-toUpperCase
var text6 = "Sam is going to codingschool";
text6 = text6.replace('codingschool', 'school')
document.write("<br><br>", text6.toUpperCase())

var text7 = "Sam is going to codingschool";
text7 = text7.replace('to coding', 'at ')
document.write("<br>", text7.toLowerCase())

var text8 = "Sam is going to codingschool";
let H01 = text8.slice(0, 3)
let H02 = text8.slice(3, 16)
let H03 = text8.slice(22,28)
document.write("<br>", H01.toUpperCase())
document.write(H02)
document.write(H03.toUpperCase())

var text9 = "Sam is going to codingschool";
document.write("<br>", H01.toLowerCase())
let I02 = text9.slice(3, 16)
document.write(I02.toUpperCase())
document.write(H03.toLowerCase())

