import { example1Sketch } from './sketches/chapter1/Example1.ts'
import { Sketch } from './sketch.types.ts'

export const sketches: Record<string, Sketch> = {
    example1: new Sketch('example1', 'Example 1', example1Sketch),
}
