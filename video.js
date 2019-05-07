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
  videog.height = 300;

  //-- Boton de Play
  ver1 = document.getElementById('play1')
  ver2 = document.getElementById('play2')
  ver3 = document.getElementById('play3')

  video1.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  video2.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  video3.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"

  rep_time1 = video1.currentTime;
  rep_time2 = video2.currentTime;
  rep_time3 = video3.currentTime;


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
    rep_time1 = video1.currentTime;
    rep_time2 = video2.currentTime;
    rep_time3 = video3.currentTime;
    },true);

  video1.onmouseover = () => {
    console.log("Mouse over!!")
    video1.muted = false;
  }

  video1.onmouseout = () => {
    video1.muted = true;
  }

  video2.onmouseover = () => {
    console.log("Mouse over2!!")
    video2.muted = false;
  }

  video2.onmouseout = () => {
    video2.muted = true;
  }

  video3.onmouseover = () => {
    console.log("Mouse over3!!")
    video3.muted = false;
  }

  video3.onmouseout = () => {
    video3.muted = true;
  }

  function whenclick(url, video, time) {
    document.getElementById("actual").innerHTML = "Now watching . . . " + video;
    videog.src = url;
    videog.currentTime = time;

    videog.addEventListener("timeupdate",function(ev){
      document.getElementById("tiempo").innerHTML = hora(videog.currentTime);
      },true);

    var loop = document.querySelector('input[name="option"]:checked').value;
    if (loop == "no") {
      videog.loop = false;
    }
  }

  //-- Al apretar el boton de ver video
  ver1.onclick = () => {
    video = "video 1"
    whenclick(video1.src, video, rep_time1);
  }

  ver2.onclick = () => {
    video = "video 2"
    whenclick(video2.src, video, rep_time2);
  }

  ver3.onclick = () => {
    video = "video 3"
    whenclick(video3.src, video, rep_time3);
  }
}
