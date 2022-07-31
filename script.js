var bflor = document.getElementById('start')
var jo = document.getElementById('jogo')
var fon = document.getElementById('font')
var p = document.getElementById('parag')
var h = document.getElementById('h1')
let video = document.getElementById("video")

 bflor.addEventListener('click' ,clicar)

 function clicar(){
   document.body.style.backgroundImage = "url('fotos/caveira2.jpg')"
   jo.style.display = 'block';
   bflor.style.display= "none"
   
   fon.style.visibility = 'visible'
   p.style.visibility = 'visible'
   h.style.visibility = 'hidden'
   
   video.autoplay = true
   video.load();

   document.getElementById("imagens").style.display = "none"
}
p.addEventListener('click',clicar2 )
function clicar2(){
   location.reload();
}