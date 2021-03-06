let objetos = [
    {
        "nombre": "mochila",
        "genero": "F"
    },
    {
        "nombre": "bolsa",
        "genero": "F"
    },
    {
        "nombre": "saxo",
        "genero": "M"
    },
    {
        "nombre": "canilla",
        "genero": "F"
    },
    {
        "nombre": "melodía",
        "genero": "F",
        "hay": false
    }
]

function hayUne(objetoDeLaCasita) {
    let str = ''
    if (objetoDeLaCasita.hay == undefined || objetoDeLaCasita.hay)
        str += 'hay '


    if (objetoDeLaCasita.genero === 'M')
        str += 'un '

    else if (objetoDeLaCasita.genero === 'F')
        str += 'una '


    str += objetoDeLaCasita.nombre

    return str
}


function enLe(objetoDeLaCasita) {
    let str = 'en '
    if (objetoDeLaCasita.genero === 'M')
        str += 'el '

    else if (objetoDeLaCasita.genero === 'F')
        str += 'la '

    str += objetoDeLaCasita.nombre

    return str
}

function repetir(frase, veces, separador) {
    return Array(veces).fill(frase).join(separador)
}

function fraseTotal(objetos) {
    let str = ''
    if (objetos.length === 0) return str

    str += hayUne(objetos[0])
    for (let index = 1; index < objetos.length; index++) {
        str += ' ' + enLe(objetos[index])
    }

    str += ' en la casita de Piñón'
    return str
}

function saxoCloacal(objetosEnLaCasitaDePiñón) {
    let lyrics = ''
    for (let index = 0; index < objetosEnLaCasitaDePiñón.length; index++) {
        let objetoEnLaCasitaDePiñón = objetosEnLaCasitaDePiñón[index]

        let hayUneAlgox2 = repetir(hayUne(objetoEnLaCasitaDePiñón), 2, ', ')
        lyrics += repetir(hayUneAlgox2, 2, '<br/>') + '<br/>'

        frase = fraseTotal(objetosEnLaCasitaDePiñón.slice(0, index + 1).reverse()) + '<br/>'
        lyrics += repetir(frase, 2, '')
    }
    return lyrics
}


let lyricsHTML = document.getElementById('lyrics')
let textInput = document.getElementById('objetos de la casita')

textInput.addEventListener('input', evento => {
    let inputText = evento.target.value
    let objetoDeLaCasita = JSON.parse(inputText)
    lyricsHTML.innerHTML = saxoCloacal(objetoDeLaCasita)
})

textInput.innerHTML = JSON.stringify(objetos, null, 2)
lyricsHTML.innerHTML = saxoCloacal(objetos)