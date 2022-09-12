export class BingoData {

    private readonly id: number;
    private readonly author: string;
    private readonly content: string;

    public constructor(id: number, author: string, content: string) {
        this.id = id;
        this.author = author;
        this.content = content;
     }
}
