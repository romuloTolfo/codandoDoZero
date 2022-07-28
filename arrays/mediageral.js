const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala (notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum,0)
    return somaDasNotas/notasDaSala.length
}

console.log(`media da sala de javascript ${mediaSala(salaJS)}`)
console.log(`media da sala de java ${mediaSala(salaJava)}`)
console.log(`media da sala Python ${mediaSala(salaPython)}`)

const notas = [10, 6.5, 8, 7]

const media = notas.reduce((acum, atual) => atual + acum, 0) /notas.length 

console.log(media)