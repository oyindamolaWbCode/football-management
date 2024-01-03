let modal = document.getElementById("modal");
let btn = document.getElementById("indiPlayer");
let span = document.getElementsByClassName("close")[0];
let searchInput = document.querySelector("input");
let playerName = document.getElementById('playerName');
let playerAbout = document.getElementById('playerAbout');
let playerWorth = document.getElementById('playerWorth');
let playerNo = document.getElementById('playerNo');
let playerPosition = document.getElementById('position');
let playerImage = document.getElementById('playerImage')

let players = [
    {
      image: "./img/Kevin De Bruyne.jpg",
      name: "Kevin De Bruyne",
      position: "Midfielder",
      about:
        "Belgian midfielder, known for his passing ability and vision on the field.",
      worth: 140000000,
      jerseyNumber: 17,
      age: 31,
    },
    {
        image: "./img/Ruben Dias.jpg",
      name: "Ruben Dias",
      position: "Defender",
      about:
        "Portuguese defender, known for his leadership and defensive skills.",
      worth: 100000000,
      jerseyNumber: 3,
      age: 25,
    },
    {
        image: "./img/Phil Foden.jpg",
      name: "Phil Foden",
      position: "Midfielder",
      about:
        "English midfielder, known for his creativity and technical ability.",
      worth: 120000000,
      jerseyNumber: 47,
      age: 21,
    },
    {
        image: "./img/Riyad Mahrez.jpg",
      name: "Riyad Mahrez",
      position: "Forward",
      about:
        "Algerian winger, known for his dribbling and precise finishing.",
      worth: 80000000,
      jerseyNumber: 26,
      age: 31,
    },
    {
        image: "./img/Ederson.jpg",
      name: "Ederson",
      position: "Goalkeeper",
      about:
        "Brazilian goalkeeper, known for his excellent distribution and shot-stopping.",
      worth: 90000000,
      jerseyNumber: 31,
      age: 28,
    },
    {
        image: "./img/João Cancelo.jpg",
      name: "João Cancelo",
      position: "Defender",
      about:
        "Portuguese full-back, known for his versatility and attacking contributions.",
      worth: 70000000,
      jerseyNumber: 27,
      age: 27,
    },
    {
        image: "./img/Bernardo Silva.jpg",
      name: "Bernardo Silva",
      position: "Midfielder",
      about:
        "Portuguese midfielder, known for his work rate and technical skills.",
      worth: 80000000,
      jerseyNumber: 20,
      age: 27,
    },
    {
        image: "./img/Gabriel Jesus.jpg",
      name: "Gabriel Jesus",
      position: "Forward",
      about:
        "Brazilian forward, known for his agility and goal-scoring ability.",
      worth: 90000000,
      jerseyNumber: 9,
      age: 24,
    },
    {
        image: "./img/Rodri.jpg",
      name: "Rodri",
      position: "Midfielder",
      about:
        "Spanish midfielder, known for his passing range and defensive contributions.",
      worth: 80000000,
      jerseyNumber: 16,
      age: 25,
    },
    {
        image: "./img/Ferran Torres.jpg",
      name: "Ferran Torres",
      position: "Forward",
      about: "Spanish forward, known for his pace and technical ability.",
      worth: 70000000,
      jerseyNumber: 21,
      age: 21,
    },
    {
        image: "./img/Nathan Aké.jpg",
      name: "Nathan Aké",
      position: "Defender",
      about:
        "Dutch defender, known for his versatility and defensive qualities.",
      worth: 45000000,
      jerseyNumber: 6,
      age: 26,
    },
    {
        image: "./img/Kyle Walker.jpg",
      name: "Kyle Walker",
      position: "Defender",
      about:
        "English right-back, known for his pace and defensive attributes.",
      worth: 50000000,
      jerseyNumber: 2,
      age: 32,
    },
    {
        image: "./img/Aymeric Laporte.jpg",
      name: "Aymeric Laporte",
      position: "Defender",
      about:
        "French defender, known for his ball-playing skills and positioning.",
      worth: 60000000,
      jerseyNumber: 14,
      age: 28,
    },
    {
        image: "./img/Raheem Sterling.jpg",
      name: "Raheem Sterling",
      position: "Forward",
      about:
        "English forward, known for his speed and dribbling ability.",
      worth: 120000000,
      jerseyNumber: 7,
      age: 28,
    },
    {
        image: "./img/Ilkay Gündogan.jpg",
      name: "Ilkay Gündogan",
      position: "Midfielder",
      about:
        "German midfielder, known for his intelligence and goal-scoring ability.",
      worth: 60000000,
      jerseyNumber: 8,
      age: 31,
    },
    {
        image: "./img/Zack Steffen.jpg",
      name: "Zack Steffen",
      position: "Goalkeeper",
      about: "American goalkeeper, known for his shot-stopping abilities.",
      worth: 25000000,
      jerseyNumber: 13,
      age: 26,
    },
    {
        image: "./img/John Stones.jpg",
      name: "John Stones",
      position: "Defender",
      about:
        "English defender, known for his defensive improvement and composure.",
      worth: 50000000,
      jerseyNumber: 5,
      age: 27,
    },
    {
        image: "./img/Benjamin Mendy.jpg",
      name: "Benjamin Mendy",
      position: "Defender",
      about:
        "French left-back, known for his attacking contributions and crossing.",
      worth: 25000000,
      jerseyNumber: 22,
      age: 27,
    },
    {
        image: "./img/Fernandinho.jpg",
      name: "Fernandinho",
      position: "Midfielder",
      about:
        "Brazilian midfielder, known for his leadership and defensive abilities.",
      worth: 20000000,
      jerseyNumber: 25,
      age: 37,
    },
    {
        image: "./img/Jack Grealish.jpg",
      name: "Jack Grealish",
      position: "Midfielder",
      about:
        "English midfielder, known for his dribbling and creativity on the ball.",
      worth: 100000000,
      jerseyNumber: 10,
      age: 26
    }
];  

console.log(players);

btn.addEventListener("click", () => {
    let input = searchInput.value;
    if(!input){
        alert('Input required!')
    }else{
        let result = players.find((player) =>
        player.name.toLowerCase().includes(input.trim().toLowerCase()) || 
        player.jerseyNumber.toString().toLowerCase().includes(input)   
        )
        console.log(result)    
        if (result) {
            
            playerName.textContent = result.name;
            playerImage.textContent = result.image;
            playerAbout.innerHTML = `<b>About:</b> ${result.about}`;
            playerWorth.innerHTML = `<b>Worth:</b> ${result.worth}`;
            playerNo.innerHTML = `<b>Jersey-Number:</b>  ${result.jerseyNumber}`;
            playerPosition.innerHTML = `<b>Position:</b>${result.position}`;
        } else {
            playerName.textContent = 'Player not found'
            playerAbout.textContent = ""
            playerWorth.textContent = ""
            playerNo.textContent = ""
            playerPosition.textContent = ""
        }
        modal.style.display = "block"; 
    }
    
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});
