const p1 = {
    x: 0,
    y: 4,
    moverEnX: function(x) { this.x = this.x + x },
    moverEnY: function(y) { this.y = this.y + y }
}

const p2 = {
    x: 3,
    y: 0,
    moverEnX: function(x) { this.x = this.x + x },
    moverEnY: function(y) { this.y = this.y + y }
}

function distance(p1 , p2) {
    const x = p1.x - p2.x
    const y = p1.y - p2.y

    return Math.sqrt(x*x + y*y)
}

console.log(distance(p1,p2))
//console.log(distance(p1, { x: 20, y: -7 }))
//console.log(distance(p1, { horizontal: 20, vertical: -7 })) // NaN

console.log(distance(p1, p2))
p1.moverEnX(10)
console.log(distance(p1, p2))
p2.moverEnY(-4)
console.log(distance(p1, p2))


