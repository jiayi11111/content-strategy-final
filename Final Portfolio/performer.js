toggle = document.querySelectorAll(".toggle")[0];
    console.log(toggle);
    nav = document.querySelectorAll("nav")[0];
    console.log(nav);
    toggle_open_text = 'Menu';
    toggle_close_text = 'Close';
    
    toggle.addEventListener('click', function() {
        nav.classList.toggle('open');
        
      if (nav.classList.contains('open')) {
        toggle.innerHTML = toggle_close_text;
        const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
let project=document.getElementById('projectbackground');

  // document.body.style.backgroundColor = 'white';
// document.body.style.backgroundImage="linear-gradient(to right, #bdc3c7, #2c3e50)"
// document.body.style.backgroundImage="linear-gradient(to right, rgba(0,0,0,0.2623643207282913) 35%, rgba(186,186,186,1) 100%)";
//change the scale of blue


;}
  )
       
      } else {
        toggle.innerHTML = toggle_open_text;
        const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {

  document.body.style.background = 'white';}
  )
       
      }
    }, false);
    
    setTimeout(function(){
        nav.classList.toggle('open');	
    }, 800);



    function myFunction() {
        var x = document.getElementById("detail2");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      
      
      let music=document.getElementById("music");
      //make the volume of music lower;
      
      
      music.volume=0.1;
      
      console.log(music.volume);
      
      let musicIsPlaying= false;
      let stopmusic=document.getElementById("stop");
      stopmusic.addEventListener("click",function(){
        if(musicIsPlaying){
           music.stop();
          console.log("stop");
          musicIsPlaying = false;
      }
      else{
        music.loop();
        console.log("play");
        musicIsPlaying = true;
      }})
      