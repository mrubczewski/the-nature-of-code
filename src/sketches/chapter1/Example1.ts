import p5 from 'p5'

export const example1Sketch = (p: p5) => {
    let x = 0
    let y = 0

    p.setup = () => {
        p.createCanvas(400, 400)
        x = p.width / 2
        y = p.height / 2
    }

    p.draw = () => {
        p.background(220)
        p.fill(255, 0, 0)
        p.ellipse(x, y, 50, 50)

        x += p.random(-2, 2)
        y += p.random(-2, 2)
    }
}
