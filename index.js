let fiscalCode = [];
let vowelRegex = /[aeiou]/gi;
let consonantRegex =  /[b-df-hj-np-tv-z]/gi;

const lastNameCode = function (lastName) { 

    let vowelArr = lastName.match(vowelRegex);
    let consonantArr = lastName.match(consonantRegex);

    if (consonantArr == null && vowelArr.length > 1) {
        fiscalCode.push(vowelArr.slice(0,2), 'x');
    }
     else if (vowelArr == null) {
        console.log('non valid surname');
    }
     else if (consonantArr.length == 1 && vowelArr.length == 1) {
        fiscalCode.push(consonantArr[0], vowelArr[0], 'x');
    }
     else if (consonantArr.length == 1 && vowevowelArr.lengthlLength > 1) {
        fiscalCode.push(consonantArr[0], vowelArr.slice(0, 2));
    }
     else if (consonantArr.length == 2 && vowelArr.length > 0) {
        fiscalCode.push(consonantArr.slice(0,2), vowelArr[0]);
    }
     else if (consonantArr.length >= 3) {
        fiscalCode.push(consonantArr.slice(0,3));
    }
}

const firstNameCode = function (firstName) { 
    let vowelArr = firstName.match(vowelRegex);
    let consonantArr = firstName.match(consonantRegex);

    if (consonantArr == null || vowelArr == null) {
        console.log('non valid name');
    }
    else if (consonantArr == null && vowelArr.length > 1) {
        fiscalCode.push(vowelArr.slice(0,2), 'x');
    }
    else if (consonantArr.length == 1 && vowelArr.length == 1) {
        fiscalCode.push(consonantArr[0], vowelArr[0], 'x');
    }
    else if (consonantArr.length == 1 && vowevowelArr.lengthlLength > 1) {
        fiscalCode.push(consonantArr[0], vowelArr.slice(0, 2));
    }
    else if (consonantArr.length == 2 && vowelArr.length > 0) {
        fiscalCode.push(consonantArr.slice(0,2), vowelArr[0]);
    }
    else if (consonantArr.length >= 3) {
        fiscalCode.push(consonantArr.slice(0,3));
    }
    else if (consonantArr.length > 3) {
        fiscalCode.push(consonantArr[0], consonantArr[2], consonantArr[3]);

    }
    console.log(fiscalCode);
}

lastNameCode('rossi')
firstNameCode('mariololo')


