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

  // document.body.style.backgroundColor = 'white';
// document.body.style.backgroundImage="linear-gradient(to right, #bdc3c7, #2c3e50)"
document.body.style.backgroundImage="linear-gradient(to right, rgba(0,0,0,0.2623643207282913) 35%, rgba(186,186,186,1) 100%)"}
  )
       
      } else {
        toggle.innerHTML = toggle_open_text;
        const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {

  document.body.style.background = 'black';}
  )
       
      }
    }, false);
    
    setTimeout(function(){
        nav.classList.toggle('open');	
    }, 800);

    const word=document.querySelector('.word');
    let str='Hi! My name is Jiayi Tan, I am an undergraduate degrees student in Interactive Media Arts at New York University.';
    function setText(t){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                word.innerHTML=t;
                resolve();
            },60)
                
            })
        }

        async function main(tt){
       if(tt){
    
          for(let i=1;i<=str.length; i++){
                await setText(str.substr(0,i));
            }}
            
            else{
                for (let i=str.length-1; i>0; i--){
            await setText(str.substr(0,i));
            }}
        

        setTimeout(()=>{
            main(!tt);
        },600)
    
            
        }

        main(1);