// Dicee
let inputPlayer1 = document.getElementById("player1Name");
let inputPlayer2 = document.getElementById("player2Name");
let player1Name = document.getElementById("player1");
let player2Name = document.getElementById("player2");

let p1 = 0, p2 = 0;
function play() {
    let player1 = inputPlayer1.value;
    let player2 = inputPlayer2.value;
    if (player1 === "" || player2 === "") {
        alert("Give Names for Players");
    } else {
        player1Name.innerHTML = player1;
        player2Name.innerHTML = player2;

        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomImage1 = "dice" + randomNumber1 + ".png";
        let randomImageSource1 = "images/" + randomImage1;
        document.getElementsByClassName("img1")[0].src = randomImageSource1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;
        let randomImage2 = "dice" + randomNumber2 + ".png";
        let randomImageSource2 = "images/" + randomImage2;
        document.getElementsByClassName("img2")[0].src = randomImageSource2;
        if (randomImage1 > randomImage2) {
            document.querySelector("h1").innerHTML = player1 + " Won";
            p1 += 1;
            document.querySelectorAll("h2")[0].innerHTML = "Score: " + p1;
        }
        else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML = player2 + " Won";
            p2 += 1;
            document.querySelectorAll("h2")[1].innerHTML = "Score: " + p2;
        } else {
            document.querySelector("h1").innerHTML = "Draw!";
        }
    }
}

function reset() {
    if (p1 == 0 && p2 == 0) {
        alert("Give Names for Players");
    } else {
        if (p1 > p2) {
            document.querySelector("h1").innerHTML = inputPlayer1.value + " won the Tournament."
        }
        else if (p1 < p2) {
            document.querySelector("h1").innerHTML = inputPlayer2.value + " won the Tournament."
        }
        else {
            document.querySelector("h1").innerHTML = "Tournament tied"
        }

        setTimeout(myFun, 2000);
        function myFun() {
            document.querySelector("h1").innerHTML = "play Again"
        }

        document.querySelectorAll("img")[0].src = "images/dice6.png";
        document.querySelectorAll("img")[1].src = "images/dice6.png";
        p1 = p2 = 0;
        document.querySelectorAll("h2")[0].innerHTML = "Score: " + p1;
        document.querySelectorAll("h2")[1].innerHTML = "Score: " + p2;
        inputPlayer1.value = "";
        inputPlayer2.value = "";
        player1Name.innerHTML = "Player 1";
        player2Name.innerHTML = "Player 2";
    }
}




// for Music

// for Music

function success() {
    // buttonpress
    for (let i = 0; i < document.getElementsByClassName("drum").length; i++) {
        document.getElementsByTagName("button")[i].addEventListener("click", function () {
            let buttoninnerHTML = this.innerHTML;
            makeSound(buttoninnerHTML);
            buttonAnimation(this.innerHTML);
        });
    }


    // keyboardpress
    document.addEventListener("keypress", function (event) {
        makeSound(event.key);
        buttonAnimation(event.key);
    });

    function makeSound(key) {
        switch (key) {
            case "a":
                let tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "s":
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "d":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "f":
                let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                let crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "k":
                let kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case "l":
                let snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            default:
                console.log(buttoninnerHTML);
        }
    }

    function buttonAnimation(currentKey) {
        let activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");

        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 300)
    }

}


