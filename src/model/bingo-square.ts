import { BingoData } from "./bingo-data";

export class BingoSquare {

    public static readonly ALL_DATA = [
        new BingoData(0, "AuroraVandomme", "Copying from Stackoverflow"),
        new BingoData(1, "AuroraVandomme", "Missing semicolon"),
        new BingoData(2, "AuroraVandomme", "Changed nothing, hope it works now"),
        new BingoData(3, "AuroraVandomme", "Deploy on a Friday"),
        new BingoData(4, "AuroraVandomme", "Me when I found a bug"),
        new BingoData(5, "AuroraVandomme", "Can't exit VIM"),
        new BingoData(6, "AuroraVandomme", "PHP Bad"),
        new BingoData(7, "AuroraVandomme", "Arrays start at 0"),
        new BingoData(8, "AuroraVandomme", "HTML is a programming language"),
        new BingoData(9, "AuroraVandomme", "Opening JSON with Visual Studio"),
        new BingoData(10, "AuroraVandomme", "Compiles on a first try"),
        new BingoData(11, "AuroraVandomme", "No semicolons in Python"),
        new BingoData(12, "AuroraVandomme", "Repost from yesterday"),
        new BingoData(13, "AuroraVandomme", "Fixing bugs, now I have more bugs"),
        new BingoData(14, "AuroraVandomme", "JS Bad"),
        new BingoData(15, "AuroraVandomme", "Testing on production"),
        new BingoData(16, "AuroraVandomme", "Real life programming references like 'child'"),
        new BingoData(17, "AuroraVandomme", "'Funnny' boolean comparisons in JS"),
        new BingoData(18, "AuroraVandomme", "When all the tests pass"),
        new BingoData(19, "AuroraVandomme", "Debugging with console.log"),
        new BingoData(20, "AuroraVandomme", "Git blame"),
        new BingoData(21, "AuroraVandomme", "Recursion jokes"),
        new BingoData(22, "AuroraVandomme", "What is documentation?"),
        new BingoData(23, "AuroraVandomme", "Funny repost about debugging"),

        new BingoData(24, "theXpanther", "Question closed on StackOverflow"),
        new BingoData(25, "theXpanther", "Push untested code to prod"),
        new BingoData(26, "theXpanther", "Copy/paste code you don't understand"),
        new BingoData(27, "theXpanther", "Bug that vanishes when debugging"),
        new BingoData(28, "theXpanther", "OutOfMemoryException"),
        new BingoData(29, "theXpanther", "Find years-old undetected bug in prod"),
        new BingoData(30, "theXpanther", "NullPointerException"),
        new BingoData(31, "theXpanther", "Windows vs Linux debate"),
        new BingoData(32, "theXpanther", "Code has been updated; comments haven't"),
        new BingoData(33, "theXpanther", "Project with 3 conflicting naming schemes"),
        new BingoData(34, "theXpanther", "Spend several hours fixing a CSS bug"),
        new BingoData(35, "theXpanther", "Close 10+ tabs after finishing an issue"),
        new BingoData(36, "theXpanther", "Todo tasks grow faster than done tasks"),
        new BingoData(37, "theXpanther", "IDE crashes"),
        new BingoData(38, "theXpanther", "Project depends on multiple versions of same library"),
        new BingoData(39, "theXpanther", "Swearing in comments"),
        new BingoData(40, "theXpanther", "Take twice the time estimate to complete a task"),
        new BingoData(41, "theXpanther", "Stack trace too long to fit on screen"),
        new BingoData(42, "theXpanther", "Third-party library refuses to build"),
        new BingoData(43, "theXpanther", "Endless debate about what library to use"),

        new BingoData(44, "likes_purple", "IntegerOverflowException"),
        new BingoData(45, "likes_purple", "Variable_caseJokes"),
        new BingoData(46, "likes_purple", "CSS breaks everything"),
        new BingoData(47, "likes_purple", "Not understanding memory addressing"),
        new BingoData(48, "likes_purple", "StackOverflow is my job"),
        new BingoData(49, "likes_purple", "[program] uses too much RAM"),
        new BingoData(50, "likes_purple", "Tabs vs Spaces"),
        new BingoData(51, "likes_purple", "Regex is confusing"),
        new BingoData(52, "likes_purple", "Coding in notepad"),
        new BingoData(53, "likes_purple", "Spaghetti code"),
        new BingoData(54, "likes_purple", "Bad UIs"),
        new BingoData(55, "likes_purple", "Callback Hell"),
        new BingoData(56, "likes_purple", "AI is just a bunch of if-else statements"),
        new BingoData(57, "likes_purple", "Turning it off and on again"),

        new BingoData(58, "CrystalMoose", "This works for me, don't touch it!"),
        new BingoData(59, "CrystalMoose", "TODO never done"),
        new BingoData(60, "CrystalMoose", "Will be added later"),
        new BingoData(61, "CrystalMoose", "12% of comments are helpful"),
        new BingoData(62, "CrystalMoose", "// Will fix on Monday"),
        new BingoData(63, "CrystalMoose", "// i was taken so I used ii"),
        new BingoData(64, "CrystalMoose", "1 comment for 250 lines"),
        new BingoData(65, "CrystalMoose", "console.log('made it this far')"),
        new BingoData(66, "CrystalMoose", "// Someone wrote this idk what it does"),
        new BingoData(67, "CrystalMoose", "This works for me, don't touch it!"),
    ]

    private readonly row: number;
    private readonly col: number;
    private readonly data: BingoData;

    public constructor(row: number, col: number, data: BingoData) {
        this.row = row;
        this.col = col;
        this.data = data;
     }
}
