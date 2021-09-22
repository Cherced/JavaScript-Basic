class Vehiculo {
 
    constructor(modelo, marca, precio, km) {
        this._modelo = modelo;
        this._marca = marca;
        this._precio = precio;
        this._km = km;
    }
 
    get modelo() {
        return this._modelo;
    }
 
    set modelo(value) {
        this._modelo = value;
    }
 
    get marca() {
        return this._marca;
    }
 
    set marca(value) {
        this._marca = value;
    }
 
    get precio() {
        return this._precio;
    }
 
    set precio(value) {
        this._precio = value;
    }
     
    get km() {
        return this._km;
    }
 
    set km(value) {
        this._km = value;
    }
 
    mostrarMarcaModelo() {
        console.log(this.marca + ' ' + this.modelo);
    }
 
  
 
}
 

 
    let vehiculo = new Vehiculo("SEAT", "IBIZA", 12000, 30000);
 
    vehiculo.mostrarMarcaModelo();
 
  
 
    console.log(vehiculo);
 
 
