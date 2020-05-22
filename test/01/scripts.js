// Cuando hay un error en js se termina la ejecución

// let nombre='Sonia'
// console.log(nombre)

// definición de una constante
const number = 10

// definición de una variable
let numero = 5
console.log(numero)
console.log(numero+1)
console.log(numero/2)
console.log(numero)
// si no tiene valor la consola dice que esta undefined
let nombre = "Sonia"
    empresa = "SopraSteria"
    // edad, cargo, pais

// El punto y coma es opcional (separa expresiones) - nowdays its prefer no use that

// espacios en blanco extra son ignorados

// JS es case sensitive

// Tipos de datos - dinámicamente tipado - en tiempo de ejecución

// Tpos de datos simples
// Números
let age = 19
// String es recomendable usar los backticks `` para trabajar con strings ya que te permiten utilizar una variable
let text = `SCelis tiene
${age} años`
console.log (text)
let div = `
    <div class="container">
        ${text}
    </div>
    `
document.body.innerHTML = div
// Boolean
// true or false
// undefined -  Cuando no se asigna un valor a una variable
// Null - Cuando no existe
// document.querySelector('h2') devuelve un null
// Symbol() - para crear referencias únicas
// Tpos de datos compuestos
// Array es un tipo de objeto
// Array
let numbers = [1,2,3,4,5,6,7]
// Object
let data = {
    nmbre: "Sonia",
    apell: "Celis",
    ed: "51"
}
// esto esta mal porque estas comparando con un string
if(data === "undefined"){

}
console.log(typeof nombre)
console.log(typeof data)

// NaN Not a Number

// type cohersion

// operadores = += -= *= /=

// 5 == '5' --> true

// 5 === '5' --> false

// Operadores unarios

// typeof 5  --> number

// !1 --> false por cohersion

// module %

// operador ternario

// expresión ? si es verdadero : si es falso

let msg = prompt("Dime tu edad")

let isAdult =  msg >= 18
            ? 'Eres mayor de edad'
            : 'Aun eres un niño'
/*
            expresionQueDevuelveBoolean
            ? valorSiEsTrue
            : valorSiEsFalse
*/
alert (isAdult)

// Operadores || and &

// let c = null || 25 --> 25

// let e = null && a --> null

// numbers

// toFixed() --> especifica el número de decimales a redondear --> toFixed(n)

let number01 = 5.12345678
console.log(number01.toFixed(8))
console.log(number01.toFixed(7))

// parseInt() --> convierte un texto en un numero --> parseInt(String,10) sistema decimal
let txt = "20"
let txtToNumber = parseInt(txt,10)
console.log (txtToNumber)

// parseFloat() --> convierte un texto en un numero --> conserva los decimales
parseFloat(txt)
console.log(txt)
let txt01 = '20.12'
// parseInt(txt01, 10) --> 20 - convierte txt a entero
console.log(txt01)
//
// parseFloat(txt01) --> 20.12 - convierte txt a decimal
console.log(parseFloat(txt01))
// NaN --> Not a Number --> devuelve cuando intentamos hacer una operación con numeros pero no se puede
console.log(5 * 'hola')
let total=Number.NaN;
isNaN(total)? total='algo':total;
console.log(total);
// Math
// Math.floor --> redondea hacia abajo
console.log(Math.floor(20.7))
// Math.ceil --> redondea hacia arriba
console.log(Math.ceil(20.1))
// Math.round --> redondea dependiendo del valor
console.log(Math.round(20.8))
// Math.random -->
console.log(Math.random())
console.log(Math.random() * 10)
// un número aleatorio entre 1 a 10
console.log(Math.ceil(Math.random() * 10))
// Strings ó texto
// propiedad == caracteristica de un objeto, edad
// metodos == lo que puedo hacer el dato
console.log("alexys".length)
// métodos sin parámetros
// .trim() --> quita los espacios en blanco al inicio y al final
console.log(" prueba trim ".trim())
console.log("prueba trim".toUpperCase())
console.log("prueba trim".toLowerCase())
// Cuestionario

let answer = prompt("¿Cual es la capital del Perú?").toUpperCase().trim()
let message = answer === "LIMA"
                    ? '¡Correcto!'
                    : '¡Te equivocaste! La respuesta es: Lima'
alert(message)

//encontrar caracteres - indexOf()
// devuelve la posición del caracter buscado
// devuelve -1 cuando noo encuentra el caracter buscado

console.log("alexys".indexOf('r'))

// devuelve la posición de la primera "o"
console.log("Hola amigos".indexOf('o'))

// si quiero saber la posición de la segunda "o", le digo q empiece a contar desde la segunda posición
console.log("Hola amigos".indexOf('o',2))
// devuelve el mismo resultado que el anterior
console.log('Hola amigos'.indexOf('o', 'Hola amigos'.indexOf('o') + 1))

console.log('Hola amigos'.lastIndexOf('o'))

// devuelve true o false si encuentra lo que buscas dentro de una cadena
console.log('https://ed.team/blog'.includes('blog'))

// devuelve true o false si la cadena empieza o no con el texto buscado
console.log('https://youtube.com/edteam'.startsWith('https://ed.team'))

// devuelve true o false si la cadena finaliza o no con el texto buscado
console.log('https://youtube.com/edteam'.endsWith('edteam'))

// Metodos para manipular strings
// replace(original, replacement)
console.log('Hola mundo'.replace('mundo', 'Sonia'))

// split(separator[,quantity])
// separa un texto según el separador
// devuelve el texto separado por comillas y la cantidad de fragmentos
console.log('Sonia Celis Vasquez'.split(' '))

// Si el separador es un espacio, me devuelve el contenido del fragmento indicado, recordar que empieza en 0...
console.log('Sonia Celis Vasquez'.split(' ')[2])

// Si pasamos un string vacio '', devuelve la letras del texto
console.log('Sonia Celis Vasquez'.split(''))

//la letra de la posición que pasamos
console.log('Sonia Celis Vasquez'.split('')[6])

// y sin usar split()
console.log('Sonia Celis Vasquez'[0])

// substring(start[,end]) extrae el texto a partir de la posición start
// devuelve " mundo"
console.log('Hola mundo'.substring(4))

// substring(start[,end]) extrae el texto a partir de la posición start y devuelve la posición 3, hacia atras
// devuelve "a"
console.log('Hola mundo'.substring(4, 3))

// el primero es posición y el segundo la cantidad de caracteres
// substr(start[,quantity])
console.log('Hola mundo'.substr(2,5))

// slice es exactamente igual que string
console.log('Hola mundo'.substring(2,5))
console.log('Hola mundo'.substr(2,5))
console.log('Hola mundo'.slice(2,5))

// la diferencia esta trabajando con los negativos
// en substring, si end es negativo extrae hacia atras
console.log('Hola mundo'.substring(2,-1))
console.log('Hola mundo'.substring(5,-3))

console.log('Hola mundo'.substr(-2))

console.log('Hola mundo'.substr(-4))

//a los últimos 5 caracteres (cuenta desde 1), quita los últimos dos caracteres
console.log('Hola mundo'.slice(-5, -2))

//a los últimos 5 caracteres (cuenta desde 1), quita el último
console.log('Hola mundo'.slice(-5, -1))

//Quitar el primero y el último
console.log('Hola mundo'.slice(1, -1))

//Quitar solo el último
console.log('Hola mundo'.slice(0, -1))

//Condicionales y ciclos
if (3 === 5)console.log('Hola')
if(5>3) console.log('mundo')
if(5>8) console.log('Sonia')

if('a' === 'b'){
    console.log('Me ejecuté')
}

if ('a' === 'b') console.log("no se imprime")
// toda variable que este en un bloque, sólo existe en ese bloque
{
    let empresa = 'SopraSteria'
}

// esto no se imprime porque la variable no existe
console.log("empresa")

// esto si se imprime, la variable esta dentro del bloque
{
    let empresa = 'SopraSteria'
    console.log(empresa)
}

// esto también se imprime -- Scope
let empresa1 = 'SopraSteria'
{
    console.log(empresa1)
}
// en un bloque
if('a' === 'a'){
    console.log('me ejecute')
    console.log('me ejecute nuevamente')
}
//el código se bifurca
if('a' === 'a'){
    console.log('Paso la condición')
} else {//si no
    console.log('No paso la condición')
}

console.log('Siempre me voy a ejecutar')

// el if termina cuando se encuentra la primera condición verdadera
if(5 > 3){
    console.log('paso la condición uno')
}else if (3 > 2){
    console.log('paso la condición dos')
}else if(10 > 2){
    console.log('paso la condición 3')
}
console.log('Siempre me voy a ejecutar')

// condiciones multiples
// and &&
if(2 > 3 && 5 > 2){
    console.log('paso la condición uno')
}else if (3 > 2){
    console.log('paso la condición dos')
}else if(10 > 2){
    console.log('paso la condición 3')
}
console.log('Siempre me voy a ejecutar')

// or ||
if(2 > 3 || 5 > 2){
    console.log('paso la condición uno')
}else if (3 > 2){
    console.log('paso la condición dos')
}else if(10 > 2){
    console.log('paso la condición 3')
}

//if && codificado de forma diferente
if(4 > 3){
    console.log('Paso la condición 1')
    if(5 > 3){
        console.log('Paso la condición 1.1')
    }
}else if(3 > 2){
    console.log('Paso la condición 2')
}else if(10 > 2){
    console.log('Pasó la codición 3')
}

let age1 = parseInt(prompt('Dime tu edad'))
console.log(age1)
// validar el dato -- > prompt es texto por definición
if (age1){
    if (age1 >= 18){
        alert('Eres mayor de edad')
    }else {
        alert('Te faltan años')
    }
}else {
    age1 = parseInt(prompt('Tu edad debe ser un número'))
}
// valores truthy:
    // Número diferente de 0
    // String no vacio
    // arrays
    // objetos
if(" ")console.log("hola")
let numbers01 = [1,2,3,4,5,6,7,8,9]
if(numbers01) console.log("its truthy")
if([]) console.log('un array vacio es truthy')
// valores falsy:
// 0
// ""
// NaN
// null
// undefined
if("")console.log("hola")
if({}) console.log('ojo con los elementos vacios')
// switch
let answer2 = prompt('Escoge un número de 1 a 5')
switch (answer2) {//prompt es texto por definición
    case '1':
        alert("Eres un uno")
        break;
    case '2':
        alert("Eres un dos")
        break;
    case '3':
        alert("Eres un tres")
        break
    default:
        alert("Por favor escribe un número")
        break;
}

let answer3 = prompt(`la capital de Colombia es:
a. Bogotá
b. Lima
c. Madrid
d. México
e. La Paz

Escribe la letra de tu respuesta
`).toUpperCase().trim()
switch (answer3) {
    case 'A':
        alert("¡Correcto!")
        break;
    case 'B':
        alert("Te equivocaste, Lima es la capital del Perú")
    default:
        alert("No has escrito una opción valida")
        break;
}
//Ciclo for
// for (let i = 0; i >= 0; i++) {//Ciclo infinito
//     console.log(i)
// }
for (let i = 0; i <= 10; i+=2) {//Ciclo infinito
    console.log(i)
}
// Encontrar todos los múltiplos de 7 entre 0 y 100
for (let i = 0; i <= 100; i++) {
    // si el resto da 0
    if(i % 7 === 0) console.log(i)
    if(i % 5 === 0) console.log(i)
}
for (let i = 100; i > 0; i--) {
    // si el resto da 0
    if(i % 7 === 0) console.log(i)
    if(i % 5 === 0) console.log(i)
}
//break and continue
// Que no me imprima los múltiplos de 7
// continue continua en el ciclo
for (let i = 0; i <= 100; i++) {
    // si el resto da 0
    if(i % 7 === 0) continue //si cumple la condición y no quiero que la imprima continue...
        console.log(i)
}
// break sale del ciclo
for (let i = 0; i <= 100; i++) {
    if(i > 10) break
        console.log(i);
}
//imprime sólamente los 5 primeros multiplos de 7 en un rango de 1 a 100
let n = 0
for (let i = 0; i <= 100; i++) {
    if (i % 7 === 0){
        console.log(i)
        n++
    }
    // console.log(n)
    if(n >= 5) break
}
// while -- mientras condición se cumpla

// let i=0
// while (i<10) {// ciclo infinito
//     //código
//     console.log(i)
// }

let i=0
while (i<10) {
    console.log(i)
    i++
}

let j=10
while (j--) {
    console.log(j)
}

let k=10
while (k>0) {
    console.log(k)
    k--
}

let l=0
do {
    console.log(l) //Se ejecuta por lo menos una vez
} while (l>0);

let password = ""
let pass
do {
    // scope - si declaras una varibale dentro de las {}, no va a existir fuera
    pass = prompt('Ingrese la contraseña')
} while (pass !== password);


// Funciones -- Código reutilizable en el que hay un conjunto de instrucciones

// datos de entrada y datos de salida

// input => funcion => output1 => funcion2 => output2 => funcion3 => output3

// input => argumentos
// output => valor de retorno que puede ser undefined

// Ejecutar una funcion: nombreFuncion (argumento1, argumento2...) puede o no tener argumentos.

// una función pueden ser o no parte de un objeto y se llaman metodos ex: 'Hola mundo'.slice()

// definición de una función
function saludar(persons, sex)
{
    let saludo = sex === 'm'
                ? 'Bienvenido'
                : 'Bienvenida'
    return `${saludo} a SCelis, ${persons}`
}
console.log(saludar('Sony', 'f'))
console.log(saludar('Alexis', 'm'))
console.log(saludar('EllioT', 'm'))

// funciones de flecha, definir una constante e incluir la función
const saludar2 = (persons, sex) =>
{
    let saludo = sex === 'm'
                ? 'Bienvenido'
                : 'Bienvenida'
    return `${saludo} a SCelis, ${persons}`
}
console.log(saludar2('Sony', 'f'))
console.log(saludar2('Alexis', 'm'))
console.log(saludar2('EllioT', 'm'))

// => da el mensaje de salida, valor de retorno
const sumar = (a,b) => a + b
console.log(sumar(1,4))
console.log(sumar(1,9))
//
function sumar2(a,b)
{
    return a + b
}
//
//Si la función de flecha, retorna directamente un valor, sin instrucciones adicionales la sintaxis se reduce:
//
// const nombreFuncion = (parametros) =>
// {
//     let
// }
//

//
//parametros, variables locales que se definen en la declaración de la función
//se puede asignar valores por defecto a los parámetros
const saludar3 = (persona, sexo = 'm') =>
{
    let saludo = sexo === 'm'
                ? 'Bienvenido'
                : 'Bienvenida'
    return `${saludo} a SCelis, ${persona}`
}

console.log(saludar3('Adrian'))
console.log(saludar3('Maria', 'f'))

const saludar4 = (persona = 'visitante', sexo = 'm') =>
{
    let saludo = sexo === 'm'
                ? 'Bienvenido'
                : 'Bienvenida'
    return `${saludo} a SCelis, ${persona}`
}

console.log(saludar4('Adrian'))
console.log(saludar4('Maria', 'f'))
console.log(saludar4())

//argumentos, valores asignados a los parámetros al ejecutar la función
// no necesariamente la cantidad de parámetros debe ser igual
// si hay más argumentos que parámetros no pasa nada... los ignora...
// si hay menos argumentos que parámetros, los demás son indefinidos... undefinded

// Parámetros rest (spread operator) - operador de expansión
// function (...arguments)

const sumarTodos = (...numeros) =>
{
    console.log(numeros)
}

sumarTodos(1,2,3,4,5,6,7)

const sumarTodos2 = (...numeros) =>
{
    let resultado = 0
    for(let i=0; i < numeros.length; i++)
    {
        resultado += numeros[i]
    }
    return resultado
}

// https://ed.team/clase/49/470/2229
console.log(sumarTodos2(1,2,35,4,5,6,7))

// las funciones son un valor, pueden ser almacenadas en variables o constantes, pasadas como argumentos, retornadas por otras funciones, metodos o propiedades...

const multiplicar = (a,b) => a * b

//Defino la constante c para que ejecute la consola
const c = console.log // este es un valor de una función ejecutada - aquí invoco las funciones de console.log

console.log(c)

const d = console.log() // estoy ejecutando una función y la asigno en una variable.

// console.log(d) => esto da undefined porque aquí se hace una ejecución a una función
console.log(d)

const multiplicar2 = (a,b) => a * b

c(multiplicar2(3, 4))


console.log(multiplicar2(sumarTodos2(1,2,3),5))
//usando c como console.log()
c(multiplicar2(sumarTodos2(1,2,3),5))

// las funciones pueden ser pasadas como argumentos de otra función
//ex:
let edad = multiplicar(5,4)
c(edad)

let edad2 = multiplicar(edad, 2)
c(edad2)

let edad3 = multiplicar(multiplicar(5,4),2)
c(edad3)

// las funciones pueden ser retornadas por otra función

function sumar2(x){
    return function (y) {
        return x + y
    }
}

c(sumar2(5))

// closures
console.log(sumar2(5)(2))

// función que devuelve una función que hace una multiplicación
// ojo con esto

const sumar3 = x => y => x + y

c (sumar3(10)(20))

const doSomething = x => y => x * y

const a = doSomething(2)(2) //4
const b = doSomething(3) //y => x * y; y => 3 * y
c(doSomething(a)(b(3))) // doSomething(4) ; 36

// ojo con esto

// Tipos de funciones
// Puras --> no causa un efecto secundario y siempre devuelve los mismos valores para los mismos parámetros

let a2 = "Hola"
// funcion que retorna un saludo y espera de parametro una persona
// esta función no es pura ya que modifica la variable a2, declarada afuera...

const saludo = persona => {
    a2 = a2 + ' ' + persona
    return a2
}

c(saludo('Sonia'))
c(a2)


// Esta es una funcion pura:
// no modifica nada simplemente como datos

let a3 = 'Hola'
const saludar5 = (saludo, persona) => `${saludo} ${persona}`

c(saludar5(a3, 'Sonia'))

c(a3)

// Esta es una función autoinvocada
// No necesitan invocarse

let a4 = 'Hola'
const saludar6 = ((saludo, persona) => `${saludo} ${persona}`)(a4, 'Sonia')
c (saludar6)

// Funciones nombradas y anonimas

// por ejemplo

// no tienen nombre estan en callback y se pasan como parámetros

setTimeout(() =>
{
    alert('Hola Sonia')
}, 73) //Timeout

// Scope
// Dará un error por no estar referido
// scripts.js:696 Uncaught ReferenceError: profe0 is not defined
//     at scripts.js:696
// {
//     let profe0 = 'Alex'
// }
// Scope a nivel del bloque  - Esta línea no puede meterse a leer lo que esta dentro del bloque
//     c(profe0)

// Scope a nivel del bloque - esto no da error porque puedo leer lo que esta por encima
{
    let profe0 = 'Alex'
    c(profe0)
}

// Scope a nivel del bloque - esto no da error porque puedo leer lo que esta por encima aunque este dentro de un bloque, ya que este bloque es interno
{
    let profe1 = 'Profe1'
    {
        // Esta línea si que puede leer lo que esta por encima
        c(profe1)
    }
}

//Closures - a traves de funciones internas podemos llegar a valores internos

function sumar1(x){
    return function(y){
        return x+y
    }
}
// al utilizar este closure, doble ejecución, ejecutas y devuelves la segunda funcion, ejecutas de nuevo y devuelves el return con el resultado
c(sumar1(2)(3))

function aumentar(){
    let numero = 0
    //retorna otra función que aumentará el valor en uno el valor de la variable numero
    return function(){
        numero++
        c(numero)
    }
}
//Si la ejecuto así: no pasa nada... porque lo que hace es retornar una función
aumentar()
//Aquí si que se ejecuta:
aumentar()()
//y si la vuelvo a ejecutar... vuelve a dar como resultado 1.. porque siempre se vuelve a ejecutar el numero siempre es 0
aumentar()()
aumentar()()
aumentar()()
aumentar()()
//Aquí incrementar, tiene el valor de retorno de aumentar(), que lo que tiene es la function interna que lo que hace es aumentar el valor a la variable numero... que esta por fuera de esa fución
const incrementar = aumentar()
// Aquí si que se suma, y es porque la variable número esta protegida por la funcion, y así guarda el estado que no se puede tocar desde fuera... (scope)
incrementar()
incrementar()
incrementar()
incrementar()
incrementar()
incrementar()

// esto es equivalente a lo siguiente:
let numero1 = 0

// Esta no es una función pura, porque modifica lo que esta por fuera
function aumentar1() {
    numero1++
    c(numero1)
}

aumentar1()
aumentar1()
aumentar1()
aumentar1()
aumentar1()
aumentar1()

// this -- representa el objeto del cual se ejecuta la función
// 'Hola mundo' es el ojeto de este método slice que sigue siendo una función
'Hola mundo'.slice(3)

// Este objeto contiene una función que quiere acceder al dato 'edad4' que esta dentro del objeto, por eso usa this
let user1 = {
    nombre4: 'Sonia',
    edad4: 51,
    getEdad(){
        c(this.edad4)
    }
}

user1.getEdad()

// Esto dará un error, porque no hay un this definido
// Si no uso el this - se busca el objeto fuera,es decir, lo busca dentro del scope más alto (Objeto global)
// let user6 = {
//     nombre6: 'Sonia',
//     edad6: 51,
//     getEdad(){
//         c(edad6)
//     }
// }
//scripts.js:787 Uncaught ReferenceError: edad6 is not defined
// at Object.getEdad (scripts.js:787)
// at scripts.js:793
// user6.getEdad()

// Sin el this pero definiendo la edad por fuera del objeto, mostrará por consola 10
let edad5 = 10

let user5 = {
    nombre5: 'Sonia',
    edad5: 51,
    getEdad(){
        c(edad5)
    }
}

user5.getEdad()

// Estructuras de datos

let array0 = ['Hola', 2, true, undefined, [1, 2, 3, 4], {} ]

c(array0)
// Esto me devuelve lo que hay en el array y su longitud
// (6) ["Hola", 2, true, undefined, Array(4), {…}]
// 0: "Hola"
// 1: 2
// 2: true
// 3: undefined
// 4: (4) [1, 2, 3, 4]
// 5: {}
// length: 6

// Si quiero recuperar un elemento especifico:
c(array0[4])
//Me devuelve, casualmente un array porque la posición cuatro es un array:
// (4) [1, 2, 3, 4]
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// length: 4

// Si no conozco su longitud
c(array0.length)
// Si quiero el último elemento de cualquier array
c(array0[array0.length - 1])

let array1 = ['Hola', 'amigos', 'de', 'SCelis']
c(array1)

// Quiero asignar variables a c/elemento del array
// Esto es muy laborioso
let string1 = array1[0]
let string2 = array1[1]
let string3 = array1[2]
let string4 = array1[3]

// Por lo que existe la destructuración, igualo variables en una sola línea para cada elemento
// creo un array con variables
    let [s1, s2, s3, s4] = array1
// Si mostramos por consola el contenido de cada variable vemos:
    c(s1, s2, s3, s4)
// Métodos para usar con arrays
let arr0 = [1, 2, 3, 4]
c(arr0)
// Agregar un elemento a la lista
arr0.push(5)
c(arr0)
// Eliminar un elemento de la lista, en este caso elimina el último
arr0.pop()
c(arr0)
// Si quiero agregar un elemento al inicio del array
arr0.unshift('Nuevo')
c(arr0)
// Si quiero eliminar un elemento al inicio del array
arr0.shift()
c(arr0)
// Si quiero agregar o quitar en una posición personalizada
let arr1 = ['Peru', 'Colombia', 'México', 'Bolivia']
c(arr1)
// Se empiezan a incluir a partir de la posición 2, no elimina ninguno
arr1.splice(2,0,'Chile', 'Ecuador')
c(arr1)
// Sustituye el valor de la posición 4, es decir elimina el existente y agrega el nuevo
arr1.splice(4,1,'Costa Rica')
c(arr1)
// Sustituye el valor de la posición 4, pero no elimina el valor sino que agrega el nuevo y mueve los demás valores a la derecha, es decir no elimina
arr1.splice(4,0,'Argentina')
c(arr1)
// Si quiero eliminar un elemento pero no quiero agregar ninguno
arr1.splice(1,1)
c(arr1)
// extraer en un nuevo array los valores desde el inicio hasta (final -1)
let narr1 = arr1.slice(1,3)
c(arr1, narr1)
// reverse
let arr2 = 'Madre mia'.split('')
c(arr2)
let arr3 = 'Madre mia'.split('').reverse()
c(arr3)
let arr4 = 'Madre mia'.split('').reverse().join('')
c(arr4)
const reverseText = string => string.split('').reverse().join('')
c(reverseText('JavaScript'))
let txt02 = reverseText('Mensaje Encriptado')
c(txt02)
c(reverseText(txt02))
let arr5 = ['B','Z', 'a', 'S', 'C', 'e', 'L', 'i']
c(arr5)
c(arr5.sort())
c(arr5.sort().reverse())
// no funciona con números
let numbers02 = [10,100,1000,2,20,35,45]
c(numbers02)
c(numbers02.sort()) // los ordena siempre como string, no considera los ceros para el orden
c(numbers02.push(300))
c(numbers02.sort())
// para utilizarlo con números haremos la siguiente función, que lo que hace es comparar por parejas, y esta restando a - b, 
// si el resultado es positivo significa que a es mayor que b, en caso contrario b es mayor que a => numbers02.sort((a, b) => a - b)
c(numbers02.sort((a, b) => a - b))
// Concatenar y transformar arrays a string
c(numbers02.join(' '))
c(numbers02.join(','))
let numbers03 = [99, 999, 8976]
c(numbers03)
c(numbers02.concat(numbers03))
c(numbers02)
c(numbers03)
// concat es casi como un push pero de varios valores
c(numbers02.concat(7,17,27))
c(numbers02)
c(numbers03)