// Get character
var character = document.getElementById("character");

// Get block
var block = document.getElementById("block");

// Jump
function jump {
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){character.classList.remove("animate");} ,500);
}

// Check if you died
var checkDead = setInterval(function(){
    var characterTop =
    parseInt(
window.getComputedStyle(character).getPropertyValue("top"));
var blockLeft =
parseInt(
window.getComputedStyle(block).getPropertyValue("left"));

if(blockLeft<20 && blockLeft>0 && characterTop>=130){
    alert("You lose");
    block.style.animation = "none";
    block.style.display = "none";
}

},10);