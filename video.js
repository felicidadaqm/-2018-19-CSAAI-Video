function main()
{
  console.log("Video...")

  //-- Obtener el elemento de video
  video1 = document.getElementById("video1")
  video2 = document.getElementById("video2")
  video3 = document.getElementById("video3")
  videog = document.getElementById("videog")

  //-- Establecer el tamaño del vídeo
  video1.width = 200;
  video1.height= 100;

  video2.width = 200;
  video2.height = 100;

  video3.width = 200;
  video3.height = 100;

  videog.width = 500;
  videog.height = 400;

  //-- Boton de Play
  ver1 = document.getElementById('play1')
  ver2 = document.getElementById('play2')
  ver3 = document.getElementById('play3')

  video1.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  video2.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  video3.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"


  function hora(segundos){
   var d=new Date(segundos*1000);
   // Ajuste de las 23 horas
   var hora = (d.getHours()==0)?23:d.getHours()-1;
   var hora = (hora<9)?"0"+hora:hora;
   var minuto = (d.getMinutes()<9)?"0"+d.getMinutes():d.getMinutes();
   var segundo = (d.getSeconds()<9)?"0"+d.getSeconds():d.getSeconds();
   return hora+":"+minuto+":"+segundo;
  }

  videog.addEventListener("timeupdate",function(ev){
    //document.getElementById("tiemposegundos").innerHTML = videog.currentTime;
    document.getElementById("tiempo").innerHTML = hora(videog.currentTime);
    },true);

  //-- Al apretar el boton de ver video
  ver1.onclick = () => {
    console.log("Ver!")
    //-- Indicar la fuente del vídeo
    alert("now watching: video 1")
    videog.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"

    var loop = document.querySelector('input[name="option"]:checked').value;
    if (loop == "no") {
      console.log("probando")
      videog.loop = false;
    }
    video1.onmouseover = () => {
      console.log("Mouse over!!")
      video1.muted = false;
    }
  }

  ver2.onclick = () => {
    console.log("Ver2")

    alert("now watching: video 2")
    videog.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"

    var loop = document.querySelector('input[name="option"]:checked').value;
    if (loop == "no") {
      console.log("probando")
      videog.loop = false;
    }

    video2.onmouseover = () => {
      console.log("Mouse over2!!")
      video2.muted = false;
    }
  }

  ver3.onclick = () => {
    console.log("Ver3")

    alert("now watching: video 3")
    video3.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"

    var loop = document.querySelector('input[name="option"]:checked').value;
    if (loop == "no") {
      console.log("probando")
      videog.loop = false;
    }

    video3.onmouseover = () => {
      console.log("Mouse over3!!")
      video3.muted = false;
    }
  }
}
