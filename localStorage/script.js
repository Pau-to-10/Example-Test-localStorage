let user = document.getElementById("user");
let puntuacion = document.getElementById("puntuacion");
let btnEnviar = document.getElementById("btnEnviar");
let ranking = document.getElementById("ranking");

let myPlayers = {
    totalPlayers: 0,
    players: []    
}
if(localStorage.getItem("myPlayers") !== null){
    myPlayers = JSON.parse(localStorage.getItem("myPlayers"));
    ranking.innerHTML = JSON.stringify(myPlayers);
} else {
    ranking.innerHTML = "sin datos";
}
 

btnEnviar.addEventListener("click", function(){
    myPlayers.totalPlayers++;
    myPlayers.players.push([user.value, puntuacion.value]);
    ranking.innerHTML = JSON.stringify(myPlayers);
    localStorage.setItem("myPlayers", JSON.stringify(myPlayers));
})
