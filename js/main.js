let zmiennaStr1;
let zmiennaStr2;

zmiennaStr1 = "Uwielbiam JavaScript";
zmiennaStr2 = "Jestem świetnym programistą";

function porownajStr(parametr1, parametr2) {
    if (parametr1.length > parametr2.length) {
        console.log(parametr1);
    } else {
        console.log(parametr2);
    }
}

porownajStr(zmiennaStr1, zmiennaStr2);
