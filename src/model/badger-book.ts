const crypto = require('crypto');

import { faker } from '@faker-js/faker';
import { BadgerBookAuthor } from './badger-book-author';

export class BadgerBook {

    private static readonly GENRES = ["MYSTERY", "THRILLER", "HORROR", "HISORICAL", "ROMANCE", "FANTASY", "DYSTOPIAN"];

    private id: string;
    private name: string;
    private description: string;
    private genre: string;
    private price: number;
    private rating: number;
    private publisher: string;
    private imageUrl: string;
    private author: BadgerBookAuthor;

    public constructor(id: string, name: string, description: string, genre: string, price: number, rating: number, publisher: string, imageUrl: string, author: BadgerBookAuthor) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.genre = genre;
        this.price = price;
        this.rating = rating;
        this.publisher = publisher;
        this.imageUrl = imageUrl;
        this.author = author;
    }

    public static getRandomGenre(): string {
        return BadgerBook.GENRES[Math.floor(Math.random() * BadgerBook.GENRES.length)];
    }

    public static constructRandom(): BadgerBook {
        return new BadgerBook(
            crypto.randomUUID(),
            faker.music.songName(),
            faker.lorem.paragraph(),
            BadgerBook.getRandomGenre(),
            parseFloat(faker.finance.amount(10, 99)),
            parseFloat(faker.finance.amount(1, 5)),
            faker.company.name(),
            `https://loremflickr.com/150/200/abstract?random=${BadgerBook.getRandomInteger(1, 9007199254740991)}`,
            BadgerBookAuthor.constructRandom()
        );
    }

    // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    public static getRandomInteger(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
