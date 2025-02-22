import p5 from 'p5'

export class Sketch {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly sketch: (p: p5) => void
    ) {}
}
