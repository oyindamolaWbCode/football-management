let modal = document.getElementById("modal");
let btn = document.getElementById("indiPlayer");
let span = document.getElementsByClassName("close")[0];
let searchInput = document.querySelector("input");
let playerName = document.getElementById('playerName');
let playerAbout = document.getElementById('playerAbout');
let playerWorth = document.getElementById('playerWorth');
let playerNo = document.getElementById('playerNo')

let players = [
  {
    name: "Kevin De Bruyne",
    about:
      "Belgian midfielder, known for his passing ability and vision on the field.",
    worth: 140000000,
    jerseyNumber: 17,
    age: 31,
  },
  {
    name: "Ruben Dias",
    about:
      "Portuguese defender, known for his leadership and defensive skills.",
    worth: 100000000,
    jerseyNumber: 3,
    age: 25,
  },
  {
    name: "Phil Foden",
    about:
      "English midfielder, known for his creativity and technical ability.",
    worth: 120000000,
    jerseyNumber: 47,
    age: 21,
  },
  {
    name: "Riyad Mahrez",
    about: "Algerian winger, known for his dribbling and precise finishing.",
    worth: 80000000,
    jerseyNumber: 26,
    age: 31,
  },
  {
    name: "Ederson",
    about:
      "Brazilian goalkeeper, known for his excellent distribution and shot-stopping.",
    worth: 90000000,
    jerseyNumber: 31,
    age: 28,
  },
  {
    name: "João Cancelo",
    about:
      "Portuguese full-back, known for his versatility and attacking contributions.",
    worth: 70000000,
    jerseyNumber: 27,
    age: 27,
  },
  {
    name: "Bernardo Silva",
    about:
      "Portuguese midfielder, known for his work rate and technical skills.",
    worth: 80000000,
    jerseyNumber: 20,
    age: 27,
  },
  {
    name: "Gabriel Jesus",
    about: "Brazilian forward, known for his agility and goal-scoring ability.",
    worth: 90000000,
    jerseyNumber: 9,
    age: 24,
  },
  {
    name: "Rodri",
    about:
      "Spanish midfielder, known for his passing range and defensive contributions.",
    worth: 80000000,
    jerseyNumber: 16,
    age: 25,
  },
  {
    name: "Ferran Torres",
    about: "Spanish forward, known for his pace and technical ability.",
    worth: 70000000,
    jerseyNumber: 21,
    age: 21,
  },
  {
    name: "Nathan Aké",
    about: "Dutch defender, known for his versatility and defensive qualities.",
    worth: 45000000,
    jerseyNumber: 6,
    age: 26,
  },
  {
    name: "Kyle Walker",
    about: "English right-back, known for his pace and defensive attributes.",
    worth: 50000000,
    jerseyNumber: 2,
    age: 32,
  },
  {
    name: "Aymeric Laporte",
    about:
      "French defender, known for his ball-playing skills and positioning.",
    worth: 60000000,
    jerseyNumber: 14,
    age: 28,
  },
  {
    name: "Raheem Sterling",
    about: "English forward, known for his speed and dribbling ability.",
    worth: 120000000,
    jerseyNumber: 7,
    age: 28,
  },
  {
    name: "Ilkay Gündogan",
    about:
      "German midfielder, known for his intelligence and goal-scoring ability.",
    worth: 60000000,
    jerseyNumber: 8,
    age: 31,
  },
  {
    name: "Zack Steffen",
    about: "American goalkeeper, known for his shot-stopping abilities.",
    worth: 25000000,
    jerseyNumber: 13,
    age: 26,
  },
  {
    name: "John Stones",
    about:
      "English defender, known for his defensive improvement and composure.",
    worth: 50000000,
    jerseyNumber: 5,
    age: 27,
  },
  {
    name: "Benjamin Mendy",
    about:
      "French left-back, known for his attacking contributions and crossing.",
    worth: 25000000,
    jerseyNumber: 22,
    age: 27,
  },
  {
    name: "Fernandinho",
    about:
      "Brazilian midfielder, known for his leadership and defensive abilities.",
    worth: 20000000,
    jerseyNumber: 25,
    age: 37,
  },
  {
    name: "Jack Grealish",
    about:
      "English midfielder, known for his dribbling and creativity on the ball.",
    worth: 100000000,
    jerseyNumber: 10,
    age: 26,
  },

  {
    name: "Fernando Silva",
    about:
      "Portuguese midfielder, known for his technical skills and creativity.",
    worth: 60000000,
    jerseyNumber: 21,
    age: 27,
  },
  {
    name: "Riyad Mahrez",
    about: "Algerian winger, known for his dribbling and precise finishing.",
    worth: 80000000,
    jerseyNumber: 26,
    age: 31,
  },
  {
    name: "Liam Delap",
    about:
      "English forward, known for his physicality and goal-scoring ability.",
    worth: 20000000,
    jerseyNumber: 47,
    age: 18,
  },
  {
    name: "James McAtee",
    about: "English midfielder, known for his technical ability and vision.",
    worth: 10000000,
    jerseyNumber: 46,
    age: 18,
  },
  {
    name: "Taylor Harwood-Bellis",
    about: "English defender, known for his composure and defensive skills.",
    worth: 15000000,
    jerseyNumber: 48,
    age: 20,
  },
];

console.log(players);

btn.addEventListener("click", () => {
    let input = searchInput.value;
    if(!input){
        alert('Input required!')
    }else{
        let result = players.find((player) =>
        player.name.toLowerCase().includes(input.trim().toLowerCase())
        )
        console.log(result)    
        if (result) {
            playerName.textContent = result.name;
            playerAbout.textContent = result.about;
            playerWorth.textContent = result.worth;
            playerNo.textContent = result. jerseyNumber
        } else {
            playerName.textContent = 'Player not found'
            playerAbout.textContent = ""
            playerWorth.textContent = ""
            playerNo.textContent = ""
        }
        modal.style.display = "block"; 
    }
    
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});
