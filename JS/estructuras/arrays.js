// metodos de arrays en JS
// para adicion y substraccion:

// push: agrega un elemento al final del array
// pop: borra el ultimo elemento del array
// unshift: agrega unj elemento al inicio del arrays
// shift: borra el primer elemento del array
// splice: agrega un elemento en una parte del arrays

// hay dos tipos de arrays, dinamicos y estaticos, y js los arranca dinamicos... sin limite de espacio en almacenamiento.
// array estatico : array = [1, 2, 3]; dinamico : array = [] siempre si pedimos 6 da mas, serian 12 si se llega al 13 serian 23 meas y asi. 

const array = ["camilo", "cardo", "amaaaaa"];

class MyArray {
    // creamos un constructor, en este ingresamos el tamaño inicial, y el tipo de dato que es un objeto
     constructor() {
        this.length = 0;
        this.data = {};
    }
    // tomamos con get, el dato de entrada que va ser el indice de una lista.
    get(index) {
        return this.data[index];
    };
    // creamos metodo de empuje PUSH
    push(item) {
        // decimos que en el objeto data, en la posicion que existe de length, ingrese el item;
        this.data[this.length] = item;
        // sume ese tiem y cree una nueva posicion en el array
        this.length++;
        // finalmente retorne el dato
        return this.data;
    }
    unshift(item) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
        return this.data;
    }
    pop(){
        const lastItem = this.data[this.length -1];
        delete this.data[this.length -1];
        this.length--;
        return "deleted " + lastItem;
    }
    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item
    }
    shift(){
        return this.delete(0);
    }
    shiftIndex(index){
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length -1];
        this.length--;
    }
}

const myArray = new MyArray();