import { v4 as uuid4 } from 'uuid';

export class User {
    public readonly id: string;
    constructor(
        public name: string,
        public email: string,
        public password: string,
    ) {this.id = uuid4();}
}