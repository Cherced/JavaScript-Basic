
const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function descountCalc(price , descount) {
    const priceNew = price - (price*(descount/100));
    return  priceNew;
}

function calcDescount() {
    const inputPrice = document.getElementById("price");
    const valuePrice = inputPrice.value;

    const inputCoupon = document.getElementById("coupon");
    const valueCoupon = inputCoupon.value;


    let descount
    
    switch (valueCoupon) {
        case "JuanDC_es_Batman":
            descount = 15;
            break;
    
        case "pero_no_le_digas_a_nadie":
            descount = 35;
            break;
    
        case "es_un_secreto":
            descount = 45;
            break;
    
        default:
            alert("El cupon ingresado no existe!")
            break;
    }

    const response = descountCalc(Number.parseFloat(valuePrice), descount);
    const resultP = document.getElementById("ResultP");
    resultP.innerHTML = `el precio de tu articulo con el descuento es de: 
    ${response}`;
}