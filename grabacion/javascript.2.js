function temaOscuro() {
    document.body.style = 'background-color: #110038';
    document.getElementById('logo__principal').src = '../assetscopy/gifOF_logo_dark.png';
    document.getElementById('linea-gradiante').className = 'linea-gradiante-oscuro';
    document.getElementById('crearGifos__linea').className = 'crearGifos__linea-oscuro';
    document.getElementById('contenedor-capturarGifos').className = 'contenedor-capturarGifos-oscuro';
    document.getElementById('contenedorInput-Gifos2').className = 'contenedorInput-Gifos2-oscuro';
    document.getElementById('capturarGifos__linea').className = 'capturarGifos__linea-oscuro';
    document.getElementById('opciones__texto').className = 'opciones__texto-oscuro';
    document.getElementById('opciones__camara').className = 'opciones__camara-oscuro';
    document.getElementById('imagen__camara').src = '../assetscopy/camera_light.svg';
    document.getElementById('capturandoGifos__linea').className = 'capturandoGifos__linea-oscuro';
    document.getElementById('repetirGifos__linea').className = 'repetirGifos__linea-oscuro';
    document.getElementById('opciones__repetirGifo').className = 'opciones__repetirGifo-oscuro';
    document.getElementById('subirGifos__linea').className = 'subirGifos__linea-oscuro';
    document.getElementById('capturaExito__linea').className = 'capturaExito__linea-oscuro';
    document.getElementById('opciones__comenzar').className = 'opciones__comenzar-oscuro';
    document.getElementById('opciones__subirGifo').className = 'opciones__subirGifo-oscuro';
    document.getElementById('capturaExito__listo').className = 'capturaExito__listo-oscuro';
    document.getElementById('opciones__play').className = 'opciones__play-oscuro';
}


function temaClaro() {
    document.body.style = 'background-color: white;'
    document.getElementById('logo__principal').src = '../assetscopy/gifOF_logo.png';
    document.getElementById('linea-gradiante').className = 'linea-gradiante-claro';
    document.getElementById('crearGifos__linea').className = 'crearGifos__linea-claro';
    document.getElementById('contenedor-capturarGifos').className = 'contenedor-capturarGifos-claro';
    document.getElementById('contenedorInput-Gifos2').className = 'contenedorInput-Gifos2-claro';
    document.getElementById('capturarGifos__linea').className = 'capturarGifos__linea-claro';
    document.getElementById('opciones__texto').className = 'opciones__texto-claro';
    document.getElementById('opciones__camara').className = 'opciones__camara-claro';
    document.getElementById('imagen__camara').src = '../assetscopy/camera.svg';
    document.getElementById('capturandoGifos__linea').className = 'capturandoGifos__linea-claro';
    document.getElementById('repetirGifos__linea').className = 'repetirGifos__linea-claro';
    document.getElementById('opciones__repetirGifo').className = 'opciones__repetirGifo-claro';
    document.getElementById('subirGifos__linea').className = 'subirGifos__linea-claro';
    document.getElementById('capturaExito__linea').className = 'capturaExito__linea-claro';
    document.getElementById('opciones__comenzar').className = 'opciones__comenzar-claro';
    document.getElementById('opciones__subirGifo').className = 'opciones__subirGifo-claro';
    document.getElementById('capturaExito__listo').className = 'capturaExito__listo-claro';
    document.getElementById('opciones__play').className = 'opciones__play-claro';
}

function ComenzarACapturarGifos() {

    document.getElementById('contenedor-crearGifos').style.display = 'none';
    document.getElementById('contenedorInput-Gifos2').style.display = 'none';
    document.getElementById('contenedor-respuestaMisGifos-oscuro').style.display = 'none';
    document.getElementById('contenedor-capturarGifos').style.display = 'block';
}



const KEY = 'OzzWHaI6Gi8ykGZePyc5L1grzLWFl6qG';
let recorder = '';
let stream = '';
let DuracionDelGifoMinutos = 0;
let DuracionDelGifoSegundos = 0;
let DuracionDelGifoMiliSegundos = 0;
let m;
let s;
let ms;
let calculoBarraPequeñaTiempo = 0;

const EmpiezaTodaLaCaptura = document.getElementById('opciones__comenzar').addEventListener('click', () => {
    InstanciaRecord()
})

async function InstanciaRecord() {
    try {

        stream = await navigator.mediaDevices.getUserMedia({ video: { width: 837, height: 439 } });
        document.getElementById('videoDeCapturar').srcObject = stream;
        recorder = new RecordRTC(stream, { type: 'gif' });
        ComenzarACapturarGifos();

    } catch (error) {
        alert(error);
        location.reload();
    }

}



const EmpezandoAGrabar = document.getElementById('opciones__texto').addEventListener('click', () => {

    recorder.startRecording();
    document.getElementById('contenedor-capturarGifos').style.display = 'none';
    document.getElementById('contenedor-capturandoGifos').style.display = 'block';
    document.getElementById('videoDeCapturando').srcObject = stream;
    Cronometro();

})

function Cronometro() {

    let cronometro = setInterval(() => {
        if (document.getElementById('contenedor-capturandoGifos').style.display === 'none') {
            clearInterval(cronometro);
        }

        if (DuracionDelGifoMiliSegundos === 60) {
            DuracionDelGifoSegundos += 1;
            DuracionDelGifoMiliSegundos = 0;
        } else if (DuracionDelGifoSegundos === 60) {
            DuracionDelGifoMinutos += 1;
            DuracionDelGifoSegundos = 0;
        }

        if (DuracionDelGifoMinutos < 10) {
            m = '0' + DuracionDelGifoMinutos;
        } else {
            m = DuracionDelGifoMinutos;
        }

        if (DuracionDelGifoSegundos < 10) {
            s = '0' + DuracionDelGifoSegundos;
        } else {
            s = DuracionDelGifoSegundos;
        }


        if (DuracionDelGifoMiliSegundos < 10) {
            ms = '0' + DuracionDelGifoMiliSegundos;
        } else {
            ms = DuracionDelGifoMiliSegundos;
        }


        DuracionDelGifoMiliSegundos += 1;
        document.getElementById('opciones__reloj').innerHTML = m + ':' + s + ':' + ms;




    }, 10);

}


const GifoGrabado = document.getElementById('opciones__listo').addEventListener('click', () => {

    stream.stop();
    calculoBarraPequeñaTiempo = ((s * 1000) + (16.6666 * ms)).toFixed(0);
    let timer = calculoBarraPequeñaTiempo / 10;
    console.log('timer', timer)
    document.getElementById('contenedor-capturandoGifos').style.display = 'none';
    document.getElementById('contenedor-repetirGifos').style.display = 'block';
    document.getElementById('opciones__repetirReloj').innerHTML = m + ':' + s + ':' + ms;
    recorder.stopRecording(callbackStopRecording);
    IntervaloBarraPequeña(timer);

})

function callbackStopRecording() {

    let papa = document.getElementById('repetirGifos__foto');
    let img = document.createElement('img');
    img.setAttribute('id', 'videoDeRepetirCapturar');
    papa.appendChild(img);
    document.getElementById('videoDeRepetirCapturar').src = URL.createObjectURL(recorder.getBlob());

}

let incrementadorDeBarraPequeña = 1;

function IntervaloBarraPequeña(timer) {

    let intervalo = setInterval(() => {

        let padre = document.getElementById('opciones__barraCarga');
        let div = document.createElement('div');
        div.setAttribute('id', `cuadrito-${incrementadorDeBarraPequeña}`);
        if (localStorage.getItem('oscuro') === 'true') {
            div.classList.add('cuadrito-1-oscuro');
        } else {
            div.classList.add('cuadrito-1-claro');
        }
        padre.appendChild(div);
        if (incrementadorDeBarraPequeña >= 17) {
            clearInterval(intervalo);
        }
        incrementadorDeBarraPequeña++;



    }, timer);
}




const RepetirElGifoGrabado = document.getElementById('opciones__repetirGifo').addEventListener('click', () => {
    document.getElementById('contenedor-repetirGifos').style.display = 'none';
})



let idDelLocalStorage = '';

const SubirGifosAlaApi = document.getElementById('opciones__subirGifo').addEventListener('click', async() => {

    document.getElementById('contenedor-repetirGifos').style.display = 'none';
    document.getElementById('contenedor-subirGifos').style.display = 'block';

    const form = new FormData();
    form.append('file', recorder.getBlob());


    try {

        IntervaloBarraGrande();

        let respuestaSubidaGifo = await fetch(`https://upload.giphy.com/v1/gifs?api_key=${KEY}`, {
            method: 'POST',
            body: form,
            mode: 'cors'
        })

        let json = await respuestaSubidaGifo.json();

        localStorage.setItem(JSON.stringify(json.data.id), JSON.stringify(json));

        idDelLocalStorage = json.data.id;

        fotoFinalPequeña();

    } catch (error) {
        alert('cancelo la subida o hubo un error subiendo el gif')
        location.reload();
    }
})


const BotoncancelarSubida = document.getElementById('subirGifos__cancelacion').addEventListener('click', () => {
    location.assign('creargifos.html');
    localStorage.removeItem(idDelLocalStorage);
})
const clickEnlaXDeSubida = document.getElementById('linea__xCerrar').addEventListener('click', () => {
    location.assign('creargifos.html');
    localStorage.removeItem(idDelLocalStorage);

})




let incrementoDeBarraGrande = 1;


function IntervaloBarraGrande() {

    let intervalo = setInterval(() => {

        let padre = document.getElementById('foto__barraCarga');
        let div = document.createElement('div');
        div.setAttribute('id', `cuadro-${incrementoDeBarraGrande}`);
        padre.appendChild(div);

        if (localStorage.getItem('oscuro') === 'true') {
            div.classList.add('cuadrito-1-oscuro');
        } else {
            div.classList.add('cuadrito-1-claro');
        }

        if (incrementoDeBarraGrande >= 24) {
            clearInterval(intervalo);
        }
        incrementoDeBarraGrande++;

    }, 250)
}


function fotoFinalPequeña() {
    let papa = document.getElementById('capturaExito__foto');
    let img = document.createElement('img');
    img.setAttribute('id', 'videoDeCapturaConExito');
    papa.appendChild(img);

    document.getElementById('contenedor-subirGifos').style.display = 'none';
    document.getElementById('contenedorInput-Gifos2').style.display = 'flex';
    document.getElementById('contenedor-capturaExito').style.display = 'block';
    document.getElementById('videoDeCapturaConExito').src = URL.createObjectURL(recorder.getBlob());
    document.getElementById('contenedor-respuestaMisGifos-oscuro').style.display = 'flex';
}





async function GifosDelLocalStorage() {

    for (let i = 0; i < localStorage.length; i++) {

        if (localStorage.key(i) !== 'oscuro') {

            let ID = localStorage.key(i);
            let parsiado = JSON.parse(ID);

            let respuesta = await fetch(`https://api.giphy.com/v1/gifs/${parsiado}?api_key=${KEY}`);
            let json = await respuesta.json();
            let url = json.data.images.original.url;

            let papa = document.getElementById('contenedor-respuestaMisGifos-oscuro');
            let div = document.createElement('div');
            div.style = `width:320px; height:240px; margin-bottom:17px; margin-right:16px; background-image:url(${url})`;
            div.setAttribute('id', `gifoNumero-${i}`);
            papa.appendChild(div);

        }
    }
}

GifosDelLocalStorage();


const copiarLink = document.getElementById('copiar__letra').addEventListener('click', () => {

    let NuevoInput = document.createElement("input");
    NuevoInput.setAttribute("value", document.getElementById('videoDeCapturaConExito').src);
    document.body.appendChild(NuevoInput);
    NuevoInput.select();
    document.execCommand("copy");
    document.body.removeChild(NuevoInput);
    alert('link copiado exitosamente parcerito :)')

})

const descargaLink = document.getElementById('opciones__descargar').addEventListener('click', () => {
    document.getElementById('descargar__letra').setAttribute('href', document.getElementById('videoDeCapturaConExito').src);
})
const clickEnlaX = document.getElementById('linea__cerrar').addEventListener('click', () => {
    location.reload();
})
const clickEnlaX2 = document.getElementById('linea__close').addEventListener('click', () => {
    location.reload();
})
const clickEnlaX3 = document.getElementById('closeExito').addEventListener('click', () => {
    location.reload();
})
const Botonrepetirlo = document.getElementById('opciones__repetirGifo').addEventListener('click', () => {
    location.reload();
})
const BotonGifoTerminado = document.getElementById('capturaExito__listo').addEventListener('click', () => {
    location.reload();
})

if (localStorage.getItem('oscuro') === 'true') {
    temaOscuro();
} else {
    temaClaro();
}