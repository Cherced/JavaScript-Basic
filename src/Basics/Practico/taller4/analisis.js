function esPar(num) {
    return (num % 2 === 0);
};

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

function medianaSalarios(list) {
    const mitad = parseInt(list.length/2);
    if (esPar(list.length)) {
         const personaMitad1 = list[mitad -1];
         const personaMitad2 = list[mitad];
         const mediana =  calcularMediaAritmetica([personaMitad1, personaMitad2]);
         return mediana;        
    } else {
         const personaMitad = list[mitad];
         return personaMitad;
    }
};


function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};


const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColSorted =  salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);
console.log(medianaGeneralCol, medianaTop10Col);