export class Location {
    street: string = '';
    state: string = '';
    zip: number = null;
    country: string = '';
}

export class Event {
    date: string = '';
    location: Location = new Location();;
}

export class Name {
    first: string = '';
    last: string = '';
}

export class Person {
    name: Name = new Name();
    birth: Event = new Event();
    death: Event = new Event();
    photo: string = '';
    bio: string = '';
    callings: Array<string> = [];
}

export class Calling {
    name: string = '';
    people: Array<string> = [''];
}