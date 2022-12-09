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
document.body.style.backgroundImage="linear-gradient(to right, rgba(0,0,0,0.2623643207282913) 35%, rgba(186,186,186,1) 100%)";
//change the scale of blue


;}
  )
       
      } else {
        toggle.innerHTML = toggle_open_text;
        const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {

  document.body.style.background = 'white';
}
  )
       
      }
    }, false);
    
    setTimeout(function(){
        nav.classList.toggle('open');	
    }, 800);



//     console.log("hello")

// var client = contentful.createClient({
//     space: 'hulqx6ueugr1',
//     accessToken: '-LEsW4zas07q4u0wvi8OiNsQ_bsZ0KjnRWkEJV_R5uY',
//   });


//   client.getEntries().then(entries => {
//     // log the title for all the entries that have it
//     entries.items.forEach( entry => {
//         console.log(entry);
//         let name=document.getElementById("projectname");
    
//      let title=document.createElement('h1');
//         title.innerHTML=entry.fields.nameOfTheProject;
//         name.appendChild(title);

//         let description=document.getElementById("projectdescription");
//         let descriptiontext=document.createElement('p');
//         descriptiontext.innerHTML=entry.fields.description;
//         description.appendChild(descriptiontext);

//         let image=document.getElementById("projectimage");
//         let imagetext=document.createElement('img');
//         imagetext.src=entry.fields.photo.fields.file.url;
//         image.appendChild(imagetext);

//         let concept=document.getElementById("projectconcept");
//         let concepttext=document.createElement('p');
//         concepttext.innerHTML=entry.fields.showYourConcept        ;
//         concept.append(concepttext);

//        let image1=document.getElementById("image1");
//         let imagetext1=document.createElement('img');
//         imagetext1.src=entry.fields.image1.fields.file.url;
//         image1.appendChild(imagetext1);
//     });
//   });
