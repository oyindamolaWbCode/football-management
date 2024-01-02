
let modal = document.getElementById("modal");
let btn = document.getElementById("indiPlayer");
var span = document.getElementsByClassName("close")[0];

let players = [
    {
        name: "Lionel Messi",
        about: "Argentinian forward, known for incredible dribbling and goal-scoring ability.",
        worth: 300000000,
        jerseyNumber: 30,
        age: 34
    },
    {
        name: "Cristiano Ronaldo",
        about: "Portuguese forward, known for his athleticism and goal-scoring prowess.",
        worth: 250000000,
        jerseyNumber: 7,
        age: 37
    },
    {
        name: "Kylian Mbappé",
        about: "French forward, recognized for his speed and technical skill.",
        worth: 200000000,
        jerseyNumber: 10,
        age: 23
    },
    {
        name: "Neymar Jr.",
        about: "Brazilian forward, famed for his dribbling and creativity on the field.",
        worth: 180000000,
        jerseyNumber: 10,
        age: 30
    },
    {
        name: "Mohamed Salah",
        about: "Egyptian forward, known for his pace and goal-scoring ability.",
        worth: 150000000,
        jerseyNumber: 11,
        age: 30
    },
    {
        name: "Robert Lewandowski",
        about: "Polish striker, known for his goal-scoring prowess and technical ability.",
        worth: 120000000,
        jerseyNumber: 9,
        age: 33
    },
    {
        name: "Kevin De Bruyne",
        about: "Belgian midfielder, known for his passing ability and vision on the field.",
        worth: 140000000,
        jerseyNumber: 17,
        age: 31
    },
    {
        name: "Sergio Ramos",
        about: "Spanish defender, known for his leadership and defensive skills.",
        worth: 90000000,
        jerseyNumber: 4,
        age: 36
    },
    {
        name: "Harry Kane",
        about: "English striker, known for his finishing and goal-scoring ability.",
        worth: 160000000,
        jerseyNumber: 10,
        age: 28
    },
    {
        name: "Virgil van Dijk",
        about: "Dutch defender, known for his strength and composure in defense.",
        worth: 100000000,
        jerseyNumber: 4,
        age: 30
    },
    {
        name: "Jan Oblak",
        about: "Slovenian goalkeeper, known for his shot-stopping abilities.",
        worth: 120000000,
        jerseyNumber: 13,
        age: 29
    },
    {
        name: "Gareth Bale",
        about: "Welsh winger, known for his pace and powerful strikes.",
        worth: 80000000,
        jerseyNumber: 11,
        age: 33
    },
    {
        name: "Paul Pogba",
        about: "French midfielder, known for his physicality and passing range.",
        worth: 110000000,
        jerseyNumber: 6,
        age: 29
    },
    {
        name: "Raheem Sterling",
        about: "English forward, known for his speed and dribbling ability.",
        worth: 120000000,
        jerseyNumber: 7,
        age: 28
    },
    {
        name: "Jadon Sancho",
        about: "English winger, known for his dribbling and creativity on the wing.",
        worth: 100000000,
        jerseyNumber: 7,
        age: 21
    },
    {
        name: "Trent Alexander-Arnold",
        about: "English right-back, known for his crossing and set-piece ability.",
        worth: 100000000,
        jerseyNumber: 66,
        age: 23
    },
    {
        name: "Alphonso Davies",
        about: "Canadian left-back, known for his speed and attacking prowess.",
        worth: 90000000,
        jerseyNumber: 19,
        age: 21
    },
    {
        name: "Romelu Lukaku",
        about: "Belgian striker, known for his physicality and goal-scoring ability.",
        worth: 120000000,
        jerseyNumber: 9,
        age: 28
    },
    {
        name: "Erling Haaland",
        about: "Norwegian striker, known for his speed and prolific goal-scoring.",
        worth: 150000000,
        jerseyNumber: 9,
        age: 21
    },
    {
        name: "Luis Suárez",
        about: "Uruguayan striker, known for his goal-scoring instincts and technique.",
        worth: 70000000,
        jerseyNumber: 9,
        age: 35
    },
    {
        name: "Marquinhos",
        about: "Brazilian defender, known for his versatility and defensive abilities.",
        worth: 90000000,
        jerseyNumber: 5,
        age: 28
    }
];

console.log(players)

btn.addEventListener('click', () =>{
    modal.style.display = "block";
})

span.addEventListener('click', () =>{
      modal.style.display = "none";
})


