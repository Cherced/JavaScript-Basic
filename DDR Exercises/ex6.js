function sumar() {
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);

    if (a && b) {
        if (a>b) {
            alert(`EL NUMERO 1:${a} ES MAYOR QUE EL NUMERO 2: ${b}`)

        } else if (a<b) {
            alert(`EL NUMERO 1:${a} ES MENOR QUE EL NUMERO 2: ${b}`)

        } else {
            alert(`EL NUMERO 1:${a} ES IGUAL QUE EL NUMERO 2: ${b}`)
        }

    }  else {
        alert(`SE REQUIEREN DOS NUMEROS PARA PROCESAR`)
    }
}
    
    


 
            

