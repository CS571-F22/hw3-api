import { faker } from '@faker-js/faker';

export class BadgerBookAuthor {

    private firstName: string;
    private lastName: string;
    private aboutMe: string;
    private homeCountry: string;

    public constructor(firstName: string, lastName: string, aboutMe: string, homeCountry: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.aboutMe = aboutMe;
        this.homeCountry = homeCountry;
     }

    public static constructRandom(): BadgerBookAuthor {
        return new BadgerBookAuthor(faker.name.firstName(), faker.name.lastName(), faker.lorem.paragraphs(3), faker.address.country());
    }
}
