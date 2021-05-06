import ConsistentPlayer from "./ConsistentPlayer";
import { playAndPickWinner } from "./functions";
import Player from "./Player";


describe("play and pick winner function", () => {
    test("rock vs scissors", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grant", "rock");
        let villain: Player = new ConsistentPlayer("Bane", "scissors")
        // act 
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert 
        expect(result).toBe(hero);
    });
    test("rock vs paper", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grant", "rock");
        let villain: Player = new ConsistentPlayer("Bane", "paper")
        // act 
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert 
        expect(result).toBe(villain);
    });
    test("rock vs rock", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grant", "rock");
        let villain: Player = new ConsistentPlayer("Bane", "rock")
        // act 
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert 
        expect(result).toBe(null);
    });
    test("paper vs scissors", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grant", "paper");
        let villain: Player = new ConsistentPlayer("Bane", "scissors")
        // act 
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert 
        expect(result).toBe(villain);
    });
    test("paper vs rock", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grant", "paper");
        let villain: Player = new ConsistentPlayer("Bane", "rock")
        // act 
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert 
        expect(result).toBe(hero);
    });
    test("paper vs paper", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grant", "paper");
        let villain: Player = new ConsistentPlayer("Bane", "paper")
        // act 
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert 
        expect(result).toBe(null);
    });
    test("scissors vs rock", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grant", "scissors");
        let villain: Player = new ConsistentPlayer("Bane", "rock")
        // act 
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert 
        expect(result).toBe(villain);
    });
    test("scissors vs paper", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grant", "scissors");
        let villain: Player = new ConsistentPlayer("Bane", "paper")
        // act 
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert 
        expect(result).toBe(hero);
    });
    test("scissors vs scissors", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Grant", "scissors");
        let villain: Player = new ConsistentPlayer("Bane", "scissors")
        // act 
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert 
        expect(result).toBe(null);
    });
});


describe("consistent player test", () => {
    test("name is set correctly by the constructor", () => {
        let player: Player = new ConsistentPlayer("Grant", "rock");
        expect(player.name).toBe("Grant")
    });
    test("winCount starts at zero", () => {
        let win: Player = new ConsistentPlayer("Grant", "rock");
        expect(win.winCount).toBe(0);
    });
    test("pickSymbol returns the symbol set in the constructor", () => {
        let result: Player = new ConsistentPlayer("Grant", "rock");
        result.pickSymbol()
        expect(result.pickSymbol()).toBe("rock");
    });
});