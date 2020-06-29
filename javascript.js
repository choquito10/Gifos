function temaOscuro() {
    document.body.style = 'background-color: #110038';
    document.getElementById('logo__principal').src = 'assetscopy/gifOF_logo_dark.png';
    document.getElementById('linea-gradiante').className = 'linea-gradiante-oscuro';
    document.getElementById('header__crear').className = 'header__crear-oscuro';
    document.getElementById('anclaje-otraPagina').className = 'anclaje-otraPagina-oscuro';
    document.getElementById('header__elegir').className = 'header__elegir-oscuro';
    document.getElementById('header__down').className = 'header__down-oscuro';
    document.getElementById('drop').className = 'drop-oscuro';
    document.getElementById('drop__claro').className = 'drop__claro-oscuro';
    document.getElementById('day-rayita').className = 'day-rayita-oscuro';
    document.getElementById('drop__oscuro').className = 'drop__oscuro-oscuro';
    document.getElementById('night-rayita').className = 'night-rayita-oscuro';
    document.getElementById('gifos__subrayado').className = 'gifos__subrayado-oscuro';
    document.getElementById('gifos--rayita').className = 'gifos--rayita-oscuro';
    document.getElementById('buscador__linea').className = 'buscador__linea-oscuro';
    document.getElementById('buscador__simbolos').className = 'buscador__simbolos-oscuro';
    document.getElementById('buscador__simbolos--letras').className = 'buscador__simbolos--letras-oscuro';
    document.getElementById('buscador__simbolos--lupa').className = 'buscador__simbolos--lupa-oscuro';
    document.getElementById('contenedor__inputSugerencias').className = 'contenedor__inputSugerencias-oscuro';
    document.getElementById('sugerencias__cuadro1').className = 'sugerencias__cuadro1-oscuro';
    document.getElementById('cuadro1__A').className = 'cuadro1__A-oscuro';
    document.getElementById('cuadro1__A--x').className = 'cuadro1__A--x';
    document.getElementById('cuadro1__B--verMas').className = 'cuadro1__B--verMas';
    document.getElementById('sugerencias__cuadro2').className = 'sugerencias__cuadro2-oscuro';
    document.getElementById('cuadro2__A').className = 'cuadro1__A-oscuro';
    document.getElementById('cuadro2__A--x').className = 'cuadro1__A--x';
    document.getElementById('cuadro2__B--verMas').className = 'cuadro1__B--verMas';
    document.getElementById('sugerencias__cuadro3').className = 'sugerencias__cuadro3-oscuro';
    document.getElementById('cuadro3__A').className = 'cuadro1__A-oscuro';
    document.getElementById('cuadro3__A--x').className = 'cuadro1__A--x';
    document.getElementById('cuadro3__B--verMas').className = 'cuadro1__B--verMas';
    document.getElementById('sugerencias__cuadro4').className = 'sugerencias__cuadro4-oscuro';
    document.getElementById('cuadro4__A').className = 'cuadro1__A-oscuro';
    document.getElementById('cuadro4__A--x').className = 'cuadro1__A--x';
    document.getElementById('cuadro4__B--verMas').className = 'cuadro1__B--verMas';
    document.getElementById('contenedor__inputTendencias').className = 'contenedor__inputTendencias-oscuro';
    document.getElementById('contenedorInput-Gifos').className = 'contenedorInput-Gifos-oscuro';
    document.getElementById('contenedor__inputRespuestas').className = 'contenedor__inputRespuestas-oscuro';
    for (let i = 1; i <= 8; i++) {
        document.getElementById(`hoversiño-${i}`).className = 'hoversiño-oscuro';
    }
    document.getElementById('unEjemplo').className = 'unEjemplo-oscuro';
    document.getElementById('unEjemploMasLargo').className = 'unEjemploMasLargo-oscuro';
    document.getElementById('tagsRelacionados').className = 'tagsRelacionados-oscuro';
    localStorage.setItem('oscuro', 'true');
}

function temaClaro() {
    document.body.style = 'background-color: white;'
    document.getElementById('logo__principal').src = 'assetscopy/gifOF_logo.png';
    document.getElementById('linea-gradiante').className = 'linea-gradiante-claro';
    document.getElementById('header__crear').className = 'header__crear-claro';
    document.getElementById('anclaje-otraPagina').className = 'anclaje-otraPagina-claro';
    document.getElementById('header__elegir').className = 'header__elegir-claro';
    document.getElementById('header__down').className = 'header__down-claro';
    document.getElementById('drop').className = 'drop-claro';
    document.getElementById('drop__claro').className = 'drop__claro-claro';
    document.getElementById('day-rayita').className = 'day-rayita-claro';
    document.getElementById('drop__oscuro').className = 'drop__oscuro-claro';
    document.getElementById('night-rayita').className = 'night-rayita-claro';
    document.getElementById('gifos__subrayado').className = 'gifos__subrayado-claro';
    document.getElementById('gifos--rayita').className = 'gifos--rayita-claro';
    document.getElementById('buscador__linea').className = 'buscador__linea-claro';
    document.getElementById('buscador__simbolos').className = 'buscador__simbolos-claro';
    document.getElementById('buscador__simbolos--letras').className = 'buscador__simbolos--letras-claro';
    document.getElementById('buscador__simbolos--lupa').className = 'buscador__simbolos--lupa-claro';
    document.getElementById('contenedor__inputSugerencias').className = 'contenedor__inputSugerencias-claro';
    document.getElementById('sugerencias__cuadro1').className = 'sugerencias__cuadro1-claro';
    document.getElementById('cuadro1__A').className = 'cuadro1__A-claro';
    document.getElementById('cuadro1__A--x').className = 'cuadro1__A--x';
    document.getElementById('cuadro1__B--verMas').className = 'cuadro1__B--verMas';
    document.getElementById('sugerencias__cuadro2').className = 'sugerencias__cuadro2-claro';
    document.getElementById('cuadro2__A').className = 'cuadro1__A-claro';
    document.getElementById('cuadro2__A--x').className = 'cuadro1__A--x';
    document.getElementById('cuadro2__B--verMas').className = 'cuadro1__B--verMas';
    document.getElementById('sugerencias__cuadro3').className = 'sugerencias__cuadro3-claro';
    document.getElementById('cuadro3__A').className = 'cuadro1__A-claro';
    document.getElementById('cuadro3__A--x').className = 'cuadro1__A--x';
    document.getElementById('cuadro3__B--verMas').className = 'cuadro1__B--verMas';
    document.getElementById('sugerencias__cuadro4').className = 'sugerencias__cuadro4-claro';
    document.getElementById('cuadro4__A').className = 'cuadro1__A-claro';
    document.getElementById('cuadro4__A--x').className = 'cuadro1__A--x';
    document.getElementById('cuadro4__B--verMas').className = 'cuadro1__B--verMas';
    document.getElementById('contenedor__inputTendencias').className = 'contenedor__inputTendencias-claro';
    document.getElementById('contenedorInput-Gifos').className = 'contenedorInput-Gifos-claro';
    document.getElementById('contenedor__inputRespuestas').className = 'contenedor__inputRespuestas-claro';
    for (let i = 1; i <= 8; i++) {
        document.getElementById(`hoversiño-${i}`).className = 'hoversiño-claro';
    }
    document.getElementById('unEjemplo').className = 'unEjemplo-claro';
    document.getElementById('unEjemploMasLargo').className = 'unEjemploMasLargo-claro';
    document.getElementById('tagsRelacionados').className = 'tagsRelacionados-claro';
    localStorage.setItem('oscuro', 'false');
}

function dentroDelInputBuscarClaro() {
    document.getElementById('buscador__simbolos').style.backgroundColor = '#F7C9F3';
    document.getElementById('buscador__simbolos').style.border = '1px solid #110038';
    document.getElementById('buscador__simbolos--letras').style.color = '#110038';
    document.getElementById('buscador__simbolos--lupa').src = "assetscopy/lupa.svg";
    document.getElementById('contenedor-opcionesBuscar').style.display = 'block';
}

function dentroDelInputBuscarOscuro() {
    document.getElementById('buscador__simbolos').style.backgroundColor = '#EE3EFE';
    document.getElementById('buscador__simbolos').style.border = '1px solid #110038';
    document.getElementById('buscador__simbolos--letras').style.color = '#FFFFFF';
    document.getElementById('buscador__simbolos--lupa').src = "assetscopy/lupa_light.svg";
    document.getElementById('contenedor-opcionesBuscar').style.display = 'block';
}

function fueraDelInputBuscar() {
    document.getElementById('buscador__simbolos').style = " background: #E6E6E6; border: 1px solid #808080; box-shadow: inset -1px -1px 0 0 #B4B4B4, inset 1px 1px 0 0 #FFFFFF";
    document.getElementById('buscador__simbolos--letras').style.color = '#B4B4B4';
    document.getElementById('buscador__simbolos--lupa').src = "assetscopy/lupa_inactive.svg";
    document.getElementById('contenedor-opcionesBuscar').style.display = 'none';
}

function volverAlInicio() {
    document.getElementById('header').style = 'display:flex;';
    document.getElementById('buscador').style.display = 'flex';
    document.getElementById('contenedor__inputSugerencias').style.display = 'flex';
    document.getElementById('contenedor-sugerencias').style.display = 'flex';
    document.getElementById('contenedor__inputTendencias').style.display = 'flex';
    document.getElementById('contenedor-tendencias').style.display = 'grid';
    document.getElementById('contenedorInput-Gifos').style.display = 'none';
    document.getElementById('contenedor__inputRespuestas').style.display = 'none';
    document.getElementById('contenedor-respuestaBusqueda').style.display = 'none';
    document.getElementById('contenedorCuadrosDeEjemplo').style = 'display:none;';
    document.getElementById('contenedor-respuestaMisGifos-claro').style = 'display:none;';
}

function Mygifo() {
    document.getElementById('buscador').style.display = 'none';
    document.getElementById('contenedor__inputSugerencias').style.display = 'none';
    document.getElementById('contenedor-sugerencias').style.display = 'none';
    document.getElementById('contenedor__inputTendencias').style.display = 'none';
    document.getElementById('contenedor-tendencias').style.display = 'none';
    document.getElementById('contenedor__inputRespuestas').style.display = 'none';
    document.getElementById('contenedor-respuestaBusqueda').style.display = 'none';
    document.getElementById('contenedorInput-Gifos').style = 'display:flex';
    document.getElementById('contenedorCuadrosDeEjemplo').style = 'display:none;';
    document.getElementById('contenedor-respuestaMisGifos-claro').style = 'display:flex;';
}

function BusquedaDiseño() {
    document.getElementById('contenedor__inputRespuestas').style.display = 'flex';
    document.getElementById('contenedor-respuestaBusqueda').style.display = 'grid';
    document.getElementById('contenedor__inputSugerencias').style.display = 'none';
    document.getElementById('contenedor-sugerencias').style.display = 'none';
    document.getElementById('contenedor__inputTendencias').style.display = 'none';
    document.getElementById('contenedor-tendencias').style.display = 'none';
    document.getElementById('contenedor-opcionesBuscar').style.display = 'none';
}

const KEY = 'OzzWHaI6Gi8ykGZePyc5L1grzLWFl6qG';

async function ImagenesSugerencias() {
    try {
        for (let i = 1; i <= 4; i++) {
            let conexion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${KEY}&tag=&rating=G`);
            let JSON = await conexion.json();
            let url = JSON.data.images.original.url;
            document.getElementById(`nombreGifoSugerencias-${i}`).style = 'margin-left:2px;'
            document.getElementById(`nombreGifoSugerencias-${i}`).innerHTML = '#' + JSON.data.username;
            document.getElementById(`verMas-${i}`).href = JSON.data.url;
            document.getElementById(`suge-${i}`).src = url;
            document.getElementById(`suge-${i}`).style = 'width:100%;height:100%';
        }
    } catch (error) {
        console.log(error);
    }
}

ImagenesSugerencias();

async function ImagenesTendencias() {
    try {

        for (let i = 1; i <= 10; i++) {
            let conection = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${KEY}&tag=&rating=G`);
            let json = await conection.json();
            let url = json.data.images.original.url;
            document.getElementById(`tende-${i}`).src = url;
            if (i <= 8) {
                document.getElementById(`hoversiño-${i}`).innerHTML = '#' + json.data.username;
            }
        }

    } catch (error) {
        console.log(error);
    }
}
ImagenesTendencias();

async function ImagenesDeBusqueda() {
    try {
        let valor = document.getElementById('buscador__input').value;
        document.getElementById('inputRespuestas__texto').innerHTML = `Resultados de Busqueda: ${valor}`;
        for (let i = 11; i <= 20; i++) {
            let conexion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${KEY}&tag=${valor}&rating=G`);
            let JSON = await conexion.json();
            let url = JSON.data.images.original.url;
            let imagen = document.getElementById(`busqueda-${i}`);
            imagen.style = 'width:100%;height:100%';
            imagen.src = url;

        }
    } catch (error) {
        console.log(error)
    }
}


let opcionA = document.getElementById('A__texto').innerHTML;
let opcionB = document.getElementById('B__texto').innerHTML;
let opcionC = document.getElementById('C__texto').innerHTML;


const ClickEnElBuscador = document.getElementById('buscador__simbolos').addEventListener('click', () => {
    if (document.getElementById('buscador__input').value !== '') {
        ImagenesDeBusqueda();
        BusquedaDiseño();
        document.getElementById('contenedorCuadrosDeEjemplo').style.display = 'flex';
    } else {
        alert('Escribe texto para poder buscar');
    }
})

const ENTER = document.getElementById('buscador__input').addEventListener('keyup', (e) => {
    if (e.keyCode === 13 && document.getElementById('buscador__input').value !== '') {
        ImagenesDeBusqueda();
        BusquedaDiseño();
        document.getElementById('contenedorCuadrosDeEjemplo').style.display = 'flex';
    }
})


const OnChangeEnElInput = document.getElementById('buscador__input').addEventListener('change', async() => {

    let valorInput = document.getElementById('buscador__input').value;
    let aleatorios = await fetch(`https://api.giphy.com/v1/tags/related/${valorInput}?api_key=OzzWHaI6Gi8ykGZePyc5L1grzLWFl6qG`);
    let objeto = await aleatorios.json();

    opcionA = document.getElementById('A__texto').innerHTML = objeto.data[0].name;
    opcionB = document.getElementById('B__texto').innerHTML = objeto.data[1].name;
    opcionC = document.getElementById('C__texto').innerHTML = objeto.data[2].name;

    document.getElementById('unEjemplo').innerHTML = opcionA;
    document.getElementById('unEjemploMasLargo').innerHTML = opcionB;
    document.getElementById('tagsRelacionados').innerHTML = opcionC;

})


async function EjemploUno() {

    try {
        for (let i = 11; i <= 20; i++) {
            let conexion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${KEY}&tag=${opcionA}&rating=G`);
            let JSON = await conexion.json();
            let url = JSON.data.images.original.url;
            document.getElementById(`busqueda-${i}`).src = url;
            document.getElementById(`busqueda-${i}`).style = 'width:100%;height:100%';

        }
    } catch (error) {
        console.log(error)
    }
}
const EjemploPrimero = document.getElementById('opcionesBuscar__A').addEventListener('click', () => {
    BusquedaDiseño();
    EjemploUno();
    document.getElementById('contenedorCuadrosDeEjemplo').style = 'display:flex;';
    document.getElementById('unEjemplo').innerHTML = opcionA;
    document.getElementById('unEjemploMasLargo').innerHTML = opcionB;
    document.getElementById('tagsRelacionados').innerHTML = opcionC;
    document.getElementById('contenedor-opcionesBuscar').style = 'display:none;';
    document.getElementById('inputRespuestas__texto').innerHTML = `Resultados de Busqueda: ${opcionA}`;
})

const ClickEnPrimerCuadrito = document.getElementById('unEjemplo').addEventListener('click', () => {
    EjemploUno();
    BusquedaDiseño();
    document.getElementById('unEjemplo').innerHTML = opcionA;
    document.getElementById('contenedorCuadrosDeEjemplo').style = 'display:flex;';
    document.getElementById('contenedor-opcionesBuscar').style = 'display:none;';
    document.getElementById('inputRespuestas__texto').innerHTML = `Resultados de Busqueda: ${opcionA}`;
})

async function EjemploSegundo() {
    try {
        for (let i = 11; i <= 20; i++) {
            let conexion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${KEY}&tag=${opcionB}&rating=G`);
            let JSON = await conexion.json();
            let url = JSON.data.images.original.url;
            document.getElementById(`busqueda-${i}`).src = url;
            document.getElementById(`busqueda-${i}`).style = 'width:100%;height:100%';

        }
    } catch (error) {
        console.log(error)
    }
}
const EjemploDos = document.getElementById('opcionesBuscar__B').addEventListener('click', () => {
    EjemploSegundo();
    BusquedaDiseño();
    document.getElementById('contenedorCuadrosDeEjemplo').style = 'display:flex;';
    document.getElementById('unEjemplo').innerHTML = opcionA;
    document.getElementById('unEjemploMasLargo').innerHTML = opcionB;
    document.getElementById('tagsRelacionados').innerHTML = opcionC;
    document.getElementById('contenedor-opcionesBuscar').style = 'display:none;';
    document.getElementById('inputRespuestas__texto').innerHTML = `Resultados de Busqueda: ${opcionB}`;
})

const ClickEnElSegundoCuadrito = document.getElementById('unEjemploMasLargo').addEventListener('click', () => {
    EjemploSegundo();
    BusquedaDiseño();
    document.getElementById('unEjemploMasLargo').innerHTML = opcionB;
    document.getElementById('contenedorCuadrosDeEjemplo').style = 'display:flex;';
    document.getElementById('contenedor-opcionesBuscar').style = 'display:none;';
    document.getElementById('inputRespuestas__texto').innerHTML = `Resultados de Busqueda: ${opcionB}`;
})

async function EjemploTercero() {
    try {
        for (let i = 11; i <= 20; i++) {
            let conexion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${KEY}&tag=${opcionC}&rating=G`);
            let JSON = await conexion.json();
            let url = JSON.data.images.original.url;
            document.getElementById(`busqueda-${i}`).src = url;
            document.getElementById(`busqueda-${i}`).style = 'width:100%;height:100%';
        }
    } catch (error) {
        console.log(error)
    }
}
const EjemploTres = document.getElementById('opcionesBuscar__C').addEventListener('click', () => {
    EjemploTercero();
    BusquedaDiseño();
    document.getElementById('contenedorCuadrosDeEjemplo').style = 'display:flex;';
    document.getElementById('unEjemplo').innerHTML = opcionA;
    document.getElementById('unEjemploMasLargo').innerHTML = opcionB;
    document.getElementById('tagsRelacionados').innerHTML = opcionC;
    document.getElementById('contenedor-opcionesBuscar').style = 'display:none;';
    document.getElementById('inputRespuestas__texto').innerHTML = `Resultados de Busqueda: ${opcionC}`;
})
const ClickEnElTercerCuadrito = document.getElementById('tagsRelacionados').addEventListener('click', () => {
    EjemploTercero();
    BusquedaDiseño();
    document.getElementById('tagsRelacionados').innerHTML = opcionC;
    document.getElementById('contenedorCuadrosDeEjemplo').style = 'display:flex;';
    document.getElementById('contenedor-opcionesBuscar').style = 'display:none;';
    document.getElementById('inputRespuestas__texto').innerHTML = `Resultados de Busqueda: ${opcionC}`;
})


async function traidaDeGifos() {
    try {
        for (let i = 0; i < localStorage.length; i++) {

            if (localStorage.key(i) !== 'oscuro') {

                let ID = localStorage.key(i);
                let parsiado = JSON.parse(ID);

                let respuesta = await fetch(`https://api.giphy.com/v1/gifs/${parsiado}?api_key=${KEY}`);
                let json = await respuesta.json();
                let url = json.data.images.original.url;

                let papa = document.getElementById('contenedor-respuestaMisGifos-claro');
                let div = document.createElement('div');
                div.style = `width:320px; height:240px; margin-bottom:17px; margin-right:16px; background-image:url(${url})`;
                papa.appendChild(div);
            }
        }
    } catch (error) {
        console.log(error);
    }
}

traidaDeGifos();

const CambioTemaOscuro = document.getElementById('drop__oscuro').addEventListener('click', () => {
    temaOscuro();
})
const CambioTemaClaro = document.getElementById('drop__claro').addEventListener('click', () => {
    temaClaro();
})
const dentroDelInputBuscador = document.getElementById('buscador__input').addEventListener('click', () => {
    if (localStorage.getItem('oscuro') === 'true') {
        dentroDelInputBuscarOscuro();
    } else {
        dentroDelInputBuscarClaro();
    }
})

const fueraDelInputBuscador = document.getElementById('buscador').addEventListener('mouseleave', () => {
    if (document.getElementById('buscador__input').value !== '' && localStorage.getItem('oscuro') === 'true') {
        dentroDelInputBuscarOscuro();
        document.getElementById('contenedor-opcionesBuscar').style.display = 'none';
    } else if (document.getElementById('buscador__input').value !== '' && localStorage.getItem('oscuro') === 'false') {
        dentroDelInputBuscarClaro();
        document.getElementById('contenedor-opcionesBuscar').style.display = 'none';
    } else {
        fueraDelInputBuscar();
    }
})
const ClickEnElLogo = document.getElementById('logo__principal').addEventListener('click', () => {
    volverAlInicio();
});
const ClickEnTextoMisGifos = document.getElementById('header__gifos').addEventListener('click', () => {
    Mygifo();
})
const MostrarSelectoresDeTema = document.getElementById('header__down').addEventListener('mouseover', () => {
    document.getElementById('drop').style.display = 'block';
})
const OcultarSelectoresDeTema = document.getElementById('header__down').addEventListener('mouseout', () => {
    document.getElementById('drop').style.display = 'none';
})

if (localStorage.getItem('oscuro') === 'true') {
    temaOscuro();
} else {
    temaClaro();
}