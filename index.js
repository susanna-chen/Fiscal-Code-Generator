let fiscalCode = [];
let vowelRegex = /[aeiou]/gi;
let consonantRegex =  /[b-df-hj-np-tv-z]/gi;

/* const findVowel = function(str) {
    let vowels = str.match(/[aeiou]/g);
    console.log(vowels)
}

findVowel('zio pane anche se separato')

const findConsonat = function(str) {

} */

/* let firstName = 'mario';
let vowelRegex = /[aeiou]/g;
let results = firstName.match(vowelRegex);

if (results.length > 3) {
    console.log(results.slice(0, 3))
} */

/* const findVowel = function (str) { 
    let vowelRegex = /[aeiou]/g;
    let results = str.match(vowelRegex);

    if (results.length > 3) {
        let finale = results.slice(0, 3)
        fiscalCode.push(finale)
        console.log(fiscalCode);
    } else {
        console.log('niente');
    }
} */

const lastNameCode = function (lastName) { 

    let vowelArr = lastName.match(vowelRegex);
    let consonantArr = lastName.match(consonantRegex);
/*     let consLength = consonantArr.length;
 */    /* let vowelLength = vowelArr.length; */

/*     switch () {
        case consLength > 3:
            fiscalCode.push(consonantArr.slice(0,3));
            break;
        case consLength == 2 && vowelLength > 0:
            fiscalCode.push(consonantArr, vowelArr[0]);
            break;
        case consLength == 1 && vowelLength > 1:
            fiscalCode.push(consonantArr, vowelArr.slice(0, 2));
            break;
        case consLength == 1 && vowelLength == 1:
            fiscalCode.push(consonantArr, vowelArr, 'x');
            break;
        case consLength == 0 && vowelLength > 1:
            fiscalCode.push(vowelArr, 'x');
            break;
    } */

/*     if (consLength >= 3) {
        fiscalCode.push(consonantArr.slice(0,3));
    } else if (consLength == 2 && vowelLength > 0) {
        fiscalCode.push(consonantArr.slice(0,2), vowelArr[0]);
    } else if (consLength == 1 && vowelLength > 1) {
        fiscalCode.push(consonantArr[0], vowelArr.slice(0, 2));
    } else if (consLength == 1 && vowelLength == 1) {
        fiscalCode.push(consonantArr[0], vowelArr.slice(0,2), 'x');
    } else if (consLength == 0 && vowelLength > 1) {
        fiscalCode.push(vowelArr.slice(0,2), 'x');
    } */

    if (consonantArr == null && vowelArr.length > 1) {
        fiscalCode.push(vowelArr.slice(0,2), 'x');
    }
     else if (vowelArr == null) {
        alert('non valid surname')
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
    
    console.log(vowelArr);
    console.log(consonantArr);
    console.log(fiscalCode);
}

lastNameCode('cc')
