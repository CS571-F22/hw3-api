import { BingoSquare } from "./bingo-square";

export class BingoCard {

    private readonly contents: BingoSquare[];
    private readonly generated: Date;

    public constructor(contents: BingoSquare[], generated: Date) {
        this.contents = contents;
        this.generated = generated;
    }

    // https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
    public static constructRandom(): BingoCard {
        const squares = [];
        const shuffledData = BingoSquare.ALL_DATA.sort(() => 0.5 - Math.random()).slice(0, 25);        
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (i == 2 && j == 2) {
                    continue;
                }
                squares.push(new BingoSquare(i, j, shuffledData[i * 5 + j]));
            }
        }
        return new BingoCard(squares, new Date());
    }
}
