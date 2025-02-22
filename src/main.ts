import p5 from 'p5'
import { sketches } from './sketch.consts.ts'

let currentP5Instance: p5 | null = null

function loadSketch(sketchKey: string) {
    if (currentP5Instance) {
        currentP5Instance.remove()
        currentP5Instance = null
    }

    const sketch = sketches[sketchKey]
    if (sketch) {
        const container = document.getElementById('sketch-container')!
        currentP5Instance = new p5(sketch.sketch, container)
    } else {
        console.error(`Sketch "${sketchKey}" not found.`)
    }
}

window.addEventListener('load', () => {
    const selector = document.getElementById(
        'sketch-selector'
    ) as HTMLSelectElement
    selector.addEventListener('change', (e) => {
        const target = e.target as HTMLSelectElement
        loadSketch(target.value)
    })

    loadSketch(selector.value)
})
