// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            console.log(json);
            let container = document.getElementById("container");
            container.innerHTML += `Astronaut count: ${json.length}<br><br>`;
            json.sort(function(a,b){
                let hoursA = a.hoursInSpace;
                let hoursB = b.hoursInSpace;
                return hoursB - hoursA;
            })
            for (i=0; i< json.length; i++){
                container.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li class="status">Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src="${json[i].picture}">
                </div>`
            }
            let status = document.getElementsByClassName("status");
            for(i=0;i<json.length; i++){
                if (status[i].innerHTML === "Active: true"){
                    status[i].style.color = "green";
                }
            }
        });
    });
});