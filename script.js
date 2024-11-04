var character = document.getElementById("character");
var block = document.getElementById("block");
var scoreDisplay = document.getElementById("score");
var score = 0;
var scoreAdded = false;

function jump(){
    if(character.classList !="amimate"){
        character.classList.add("animate");
    }
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
}

// Check for collision and update score
var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    // Collision detection
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("You lose. Your Score is " + score + ".");
        score = 0;
        scoreDisplay.innerHTML = "Score: " + score;
        scoreAdded = false; 

        // Reset block's state
        block.style.animation = "block 1s infinite linear";
        block.style.display = "block";
    }
    
    // Scoring logic
    if (blockLeft < 0 && !scoreAdded) {
        score++;
        scoreDisplay.innerHTML = "Score: " + score;
        scoreAdded = true; 
    }
    
    if (blockLeft > 450) {
        scoreAdded = false;
    }
}, 10);

