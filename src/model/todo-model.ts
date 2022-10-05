export class TodoModel {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public done: boolean
    ) {}
}
