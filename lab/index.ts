import Player from './Player';
import ConsistentPlayer from './ConsistentPlayer';
import { displayHeros, playAndPickWinner } from './functions';
import configPrompt from 'prompt-sync';
import RandomPlayer from './RandomPlayer';

// prompt is a function to get user input
const prompt = configPrompt({sigint: true});
// let hero: Player = new ConsistentPlayer("Grant", "rock");
// let villain: Player = new ConsistentPlayer("Bane", "scissors")
// console.log(hero.pickSymbol());
// let winner = playAndPickWinner(hero, villain);
// console.log("winner", winner);
// let color = prompt("Enter a color:");
// console.log("You typed " + color);
let villainArray: Player[] = [
    new ConsistentPlayer("Billy", "rock"),
    new ConsistentPlayer("Katie", "scissors"),
    new ConsistentPlayer("Saniah", "paper"),
    new ConsistentPlayer("Anthony", "rock")
];
let heroArray: Player[] = [
    new ConsistentPlayer("Anneliese", "rock"),
    new ConsistentPlayer("Kaleigh", "rock"),
    new ConsistentPlayer("Curtis", "scissors"),
   
]
displayHeros(heroArray);
for (let villain of villainArray) {
    console.log(`You are facing ${villain.name}`);
    console.log('Who will you pick to battle for you?');
    displayHeros(heroArray);
    let heroChoice = prompt("Type a hero name:");
    const hero = heroArray.find((hero)=> {
        return hero.name === heroChoice;
    });
    if (hero === undefined){
        console.log("NOT A VALID HERO NAME!!!");
        break;
    }
    let winner = playAndPickWinner(hero,villain)
    if(winner === hero){
        hero.winCount += 1;
        console.log("YOUR HERO WINS!");
    } else if (winner === villain) {
        villain.winCount += 1;
        console.log("YOUR HERO LOST!");
    } else {
        console.log("IT'S A TIE!");
    }
}
console.log("GAME OVER");
displayHeros(heroArray);