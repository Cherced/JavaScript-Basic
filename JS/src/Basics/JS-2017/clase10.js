const Punto = {
    init: function init(x,y) {
        this.x=x;
        this.y=y;
    },
    moverEnX:  function moverEnX(x) {
        this.x+=x;
    },
    moverEnY: function moverEnY(y) {
        this.y+=y;
    },
    distance: function distance(p) {
        const x = this.x - p.x;
        const y = this.y - p.y;
    
        return Math.sqrt(x*x + y*y);
    }
}

const p1 = Object.create(Punto);
const p2 = Object.create(Punto);

p1.init(0,4);
p2.init(3,0);
console.log(p1.distance(p2));
p1.moverEnX(10);
console.log(p1.distance(p2));
p2.moverEnY(-4);
console.log(p1.distance(p2));

// explicacion clase 8 a 10


// “Hay 3 formas de crear objetos”:

// Creando una funcion y usando prototipos
// Creando un objeto y usando Createobject()
// Creando una clase y creando una instancia de la misma


