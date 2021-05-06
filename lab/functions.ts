import Player from "./Player";
export function playAndPickWinner(player1: Player, player2: Player): Player|null {
    // 1: get symbols (call pickSymbol)
    const player1Symbol: string = player1.pickSymbol();
    const player2Symbol: string = player2.pickSymbol();
    // 2: log name and symbol
    console.log(`${player1.name} plays ${player1Symbol}`);
    console.log(`${player2.name} plays ${player2Symbol}`);
    // 3. determine and return winner (or null)
    // TODO fix this logic and write tests!
    if (player1Symbol === "rock" && player2Symbol === "scissors"){
        return player1;
    } else if (player1Symbol === "rock" && player2Symbol === "paper") {
        return player2;
    } else if (player1Symbol === "paper" && player2Symbol === "scissors") {
        return player2;
    } else if (player1Symbol === "paper" && player2Symbol === "rock") {
        return player1;
    } else if (player1Symbol === "scissors" && player2Symbol === "paper") {
        return player1;
    } else if (player1Symbol === "scissors" && player2Symbol === "rock") {
        return player2;
    } else {
        return null; //Tie
    }
}
export function displayHeros(playersArray: Player[]): void{
    for (let player of playersArray){
        console.log(`- ${player.name} (${player.winCount} wins)`);
    }
}