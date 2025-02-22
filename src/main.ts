import p5 from 'p5'
import { example1Sketch } from './sketches/chapter1/Example1'
// Import more sketches here
// import { example2Sketch } from "./sketches/chapter1/Example2";
// ...

// A dictionary of all available sketches:
const sketches: Record<string, (p: p5) => void> = {
    example1: example1Sketch,
    // example2: example2Sketch,
    // ...
}

let currentP5Instance: p5 | null = null

// Create a function that "loads" a sketch by creating a new p5 instance:
function loadSketch(sketchKey: string) {
    // If there's already a running p5 instance, destroy it:
    if (currentP5Instance) {
        currentP5Instance.remove()
        currentP5Instance = null
    }

    // Get the selected sketch function
    const sketchFunction = sketches[sketchKey]
    if (sketchFunction) {
        // Create a new p5 instance and attach it to #sketch-container
        const container = document.getElementById('sketch-container')!
        currentP5Instance = new p5(sketchFunction, container)
    } else {
        console.error(`Sketch "${sketchKey}" not found.`)
    }
}

// Attach an event listener to the dropdown:
window.addEventListener('load', () => {
    const selector = document.getElementById(
        'sketch-selector'
    ) as HTMLSelectElement
    selector.addEventListener('change', (e) => {
        const target = e.target as HTMLSelectElement
        loadSketch(target.value)
    })

    // Load the default sketch on page load (if you want):
    loadSketch(selector.value)
})
