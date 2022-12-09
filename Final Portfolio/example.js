console.log("hello")

var client = contentful.createClient({
    space: 'hulqx6ueugr1',
    accessToken: '-LEsW4zas07q4u0wvi8OiNsQ_bsZ0KjnRWkEJV_R5uY',
  });


  client.getEntries().then(entries => {
    // log the title for all the entries that have it
    entries.items.forEach( entry => {
        console.log(entry);
        let name=document.getElementById("projectname");
    
     let title=document.createElement('h1');
        title.innerHTML=entry.fields.nameOfTheProject;
        name.appendChild(title);

        let description=document.getElementById("projectdescription");
        let descriptiontext=document.createElement('p');
        descriptiontext.innerHTML=entry.fields.description;
        description.appendChild(descriptiontext);

        let image=document.getElementById("projectimage");
        let imagetext=document.createElement('img');
        imagetext.src=entry.fields.photo.fields.file.url;
        image.appendChild(imagetext);

        let concept=document.getElementById("projectconcept");
        let concepttext=document.createElement('p');
        concepttext.innerHTML=entry.fields.showYourConcept        ;
        concept.append(concepttext);

       let image1=document.getElementById("image1");
        let imagetext1=document.createElement('img');
        imagetext1.src=entry.fields.image1.fields.file.url;
        image1.appendChild(imagetext1);
    });
  });