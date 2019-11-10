// TODO: add code here
window.addEventListener("load", function (){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then( function(json) { 
            let container = document.getElementById("container");        
           
            for (let i = 0; i < json.length; i++) {
              let skills = "";
              for (let j = 0; j < json[i]["skills"].length; j++) {
                skills += (json[i]["skills"][j] + ", ");
              }
                 
              let activeLine = "";
              if (json[i]["active"]) {
                activeLine = `<font color = "green">Active: ${json[i]["active"]}</font>`
              } else {
                activeLine = `<font color = "red">Active: ${json[i]["active"]}</font>`
              }
      
              container.innerHTML += `
                <div class="astronaut">
                  <div class="bio">
                    <h3>${json[i]["firstName"]} ${json[i]["lastName"]}</h3>
                    <ul>
                      <li>Hours in Space: ${json[i]["hoursInSpace"]}</li>
                      <li>${activeLine}</li>
                      <li>Skills: ${skills}</li>
                    </ul>
                  </div>
                  <img class="avatar" src="${json[i]["picture"]}">
                </div>
              `
            }
          })
        })  
      
      })
      
      
      
      
      
      
      
      
      
      
      
      
     