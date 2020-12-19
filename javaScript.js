var randomNumber = Math.floor(Math.random()*3);
var userSelected,computerSelected;
switch (randomNumber) {
    case 0:
        document.querySelector(".computer-selected").setAttribute("src","images/icon-rock.svg");
        
        computerSelected ="rock";
    break;
    case 1:
        document.querySelector(".computer-selected").setAttribute("src","images/icon-scissors.svg");
        
        computerSelected = "scissor";
    break;
    case 2:
        document.querySelector(".computer-selected").setAttribute("src","images/icon-paper.svg");
        
        computerSelected = "paper";
    break;
}

document.querySelector(".rock").addEventListener("click",function(){
    document.querySelector(".main").style.display = "none";
    document.querySelector(".selected").classList.remove("visibilty");
    document.querySelector(".user-selected").setAttribute("src","images/icon-rock.svg");
    userSelected = "rock";
    if (userSelected === "rock") {
        if (computerSelected === "rock"){
            document.querySelector(".winner").innerHTML = "DRAW";
        } else if (computerSelected === "scissor") {
            document.querySelector(".winner").innerHTML = "YOU WIN";
            document.querySelector(".digit-score").innerHTML = 13;
        } else {
            document.querySelector(".winner").innerHTML = "YOU LOSE";
            document.querySelector(".digit-score").innerHTML = 11;
        }
    }
});


document.querySelector(".scissor").addEventListener("click",function(){
    document.querySelector(".main").style.display = "none";
    document.querySelector(".selected").classList.remove("visibilty");
    document.querySelector(".user-selected").setAttribute("src","images/icon-scissors.svg");
    userSelected = "scissor";
    if (userSelected === "scissor") {
        if (computerSelected === "rock"){
            document.querySelector(".winner").innerHTML = "YOU LOSE";
            document.querySelector(".digit-score").innerHTML = 11;
        } else if (computerSelected === "scissor") {
            document.querySelector(".winner").innerHTML = "DRAW";
        } else {
            document.querySelector(".winner").innerHTML = "YOU WIN";
            document.querySelector(".digit-score").innerHTML = 13;
        }
    }
});

document.querySelector(".paper").addEventListener("click",function(){
    document.querySelector(".main").style.display = "none";
    document.querySelector(".selected").classList.remove("visibilty");
    document.querySelector(".user-selected").setAttribute("src","images/icon-paper.svg");
    userSelected = "paper";
    if (userSelected === "paper") {
        if (computerSelected === "rock"){
            document.querySelector(".winner").innerHTML = "YOU WIN";
            document.querySelector(".digit-score").innerHTML = 13;
        } else if (computerSelected === "scissor") {
            document.querySelector(".winner").innerHTML = "YOU LOOSE";
            document.querySelector(".digit-score").innerHTML = 11;
        } else {
            document.querySelector(".winner").innerHTML = "DRAW";
        }
    }
});


$(".selected button").click(function(){
    document.location.reload();
})