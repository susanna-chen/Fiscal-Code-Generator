let fiscalCode = [];
let vowelRegex = /[aeiou]/gi;
let consonantRegex =  /[b-df-hj-np-tv-z]/gi;

const lastNameCode = function (lastName) { 

    let vowelArr = lastName.match(vowelRegex);
    let consonantArr = lastName.match(consonantRegex);

    if (consonantArr == null && vowelArr.length > 1) {
        fiscalCode.push(vowelArr[0], vowelArr[1], 'x');
    }
     else if (vowelArr == null) {
        console.log('invalid name');
    }
     else if (consonantArr.length == 1 && vowelArr.length == 1) {
        fiscalCode.push(consonantArr[0], vowelArr[0], 'x');
    }
     else if (consonantArr.length == 1 &&  vowelArr.length > 1) {
        fiscalCode.push(consonantArr[0], vowelArr[0], vowelArr[1]);
    }
     else if (consonantArr.length == 2 && vowelArr.length > 0) {
        fiscalCode.push(consonantArr[0], consonantArr[1], vowelArr[0]);
    }
     else if (consonantArr.length >= 3) {
        fiscalCode.push(consonantArr[0], consonantArr[1], consonantArr[2]);
    }
}

const firstNameCode = function (firstName) { 

    let vowelArr = firstName.match(vowelRegex);
    let consonantArr = firstName.match(consonantRegex);

    if (consonantArr == null || vowelArr == null) {
        console.log('invalid name');
    }
    else if (consonantArr == null && vowelArr.length > 1) {
        fiscalCode.push(vowelArr[0], vowelArr[1], 'x');
    }
    else if (consonantArr.length == 1 && vowelArr.length == 1) {
        fiscalCode.push(consonantArr[0], vowelArr[0], 'x');
    }
    else if (consonantArr.length == 1 && vowelArr.lengthlLength > 1) {
        fiscalCode.push(consonantArr[0], vowelArr[0], vowelArr[1]);
    }
    else if (consonantArr.length == 2 && vowelArr.length > 0) {
        fiscalCode.push(consonantArr[0], consonantArr[1], vowelArr[0]);
    }
    else if (consonantArr.length >= 3) {
        fiscalCode.push(consonantArr[0], consonantArr[1], consonantArr[2]);
    }
    else if (consonantArr.length > 3) {
        fiscalCode.push(consonantArr[0], consonantArr[2], consonantArr[3]);

    }
/*     console.log(fiscalCode); */
}

const birthDateCode = function () { 
    //get code of year
    let date = $('#birth-date').val().split("-");
    let yearResult;
    let year = (date[0] % 100).toString();
    
    if (year < 10) {
        yearResult = "0" + year;
        fiscalCode.push("0", year)
    } else {
        let splitYear = year.split('');
        for ( let i = 0; i < splitYear.length; i++ ) {
            fiscalCode.push(splitYear[i])
        }
    }

    //get code of month
    let month = date[1];
    let monthResult;

    switch(month) {
        case '01':
            monthResult = 'a';
            break;
        case '02':
            monthResult = 'b';
            break;
        case '03':
            monthResult = 'c';
            break;
        case '4':
            monthResult = 'd';
            break;
        case '05':
            monthResult = 'e';
            break;
        case '06':
            monthResult = 'h';
            break;
        case '07':
            monthResult = 'l';
            break;
        case '08':
            monthResult = 'm';
            break;
        case '09':
            monthResult = 'p';
            break;
        case '10':
            monthResult = 'r';
            break;
        case '11':
            monthResult = 's';
            break;
        case '12':
            monthResult = 't';
            break;
    }

    fiscalCode.push(monthResult)

    //get day
    let day = date[2];
    let dayResult;
    let splitDay = day.split('');

    if ( $("input[type=radio]:checked").attr('id') == 'male' ) {
        for ( let i = 0; i < splitDay.length; i++ ) {
            fiscalCode.push(splitDay[i])
        }
    } else if ( $("input[type=radio]:checked").attr('id') == 'female' ) {
        dayResult = (parseInt(day) + 40).toString().split('');
        $.each(dayResult, function (i, v) { 
             fiscalCode.push(v)
        });  
    }
}

/* $.getJSON( "paese.json", function( data ) {
    luoghiNascita = data;
    $.each(luoghiNascita, function (index, paese) { 
         $('#luogo-nascita').append(`<option value="${paese.denominazione}">${paese.codice}</option>`);
        $('#btn').on('click', function () {
                if ( $('#birth-place').val().toUpperCase() === paese.denominazione.toUpperCase()) {
                    let splitCodice = paese.codice.split('')
                    for ( let i = 0; i < splitCodice.length; i++ ) {
                        fiscalCode.push(splitCodice[i])
                    }
                } else {
                    $('#birth-place').attr('placeholder', 'Insert valid birthplace');
                }
            });
    });
}); */

let fiscalCodeOdd = [];
let fiscalCodeEven = [];
let sumArr = [];

const controlNumCode = arr => {

    for (let i = 0; i < fiscalCode.length; i++) {
        if (i % 2 === 0) {
            fiscalCodeEven.push(fiscalCode[i])
        } else {
            fiscalCodeOdd.push(fiscalCode[i])
        }
    }

    for (let i = 0; i < fiscalCodeEven.length; i++) { 
        if (fiscalCodeEven[i] === 'a' || '0') {
            sumArr.push(0)
        } else if (fiscalCodeEven[i] == 'b' || '1') {
            sumArr.push(1)
        } else if (fiscalCodeEven[i] == 'c' || '2') {
            sumArr.push(2)
        } else if (fiscalCodeEven[i] == 'd' || '3') {
            sumArr.push(3)
        } else if (fiscalCodeEven[i] == 'e' || '4') {
            sumArr.push(4)
        } else if (fiscalCodeEven[i] == 'f' || '5') {
            sumArr.push(5)
        } else if (fiscalCodeEven[i] == 'g' || '6') {
            sumArr.push(6)
        } else if (fiscalCodeEven[i] == 'h' || '7') {
            sumArr.push(7)
        } else if (fiscalCodeEven[i] == 'i' || '8') {
            sumArr.push(8)
        } else if (fiscalCodeEven[i] == 'j' || '9') {
            sumArr.push(9)
        } else if (fiscalCodeEven[i] == 'k') {
            sumArr.push(10)
        } else if (fiscalCodeEven[i] == 'l') {
            sumArr.push(11)
        } else if (fiscalCodeEven[i] == 'm') {
            sumArr.push(12)
        } else if (fiscalCodeEven[i] == 'n') {
            sumArr.push(13)
        } else if (fiscalCodeEven[i] == 'o') {
            sumArr.push(14)
        } else if (fiscalCodeEven[i] == 'p') {
            sumArr.push(15)
        } else if (fiscalCodeEven[i] == 'q') {
            sumArr.push(16)
        } else if (fiscalCodeEven[i] == 'r') {
            sumArr.push(17)
        } else if (fiscalCodeEven[i] == 's') {
            sumArr.push(18)
        } else if (fiscalCodeEven[i] == 't') {
            sumArr.push(19)
        } else if (fiscalCodeEven[i] == 'u') {
            sumArr.push(20)
        } else if (fiscalCodeEven[i] == 'v') {
            sumArr.push(21)
        } else if (fiscalCodeEven[i] == 'w') {
            sumArr.push(22)
        } else if (fiscalCodeEven[i] == 'x') {
            sumArr.push(23)
        } else if (fiscalCodeEven[i] == 'y') {
            sumArr.push(24)
        } else if (fiscalCodeEven[i] == 'z') {
            sumArr.push(25)
        } 
    };

    for (let i = 0; i < fiscalCodeOdd.length; i++) { 
        if (fiscalCodeOdd[i] === 'a' || '0') {
            sumArr.push(1)
        } else if (fiscalCodeOdd[i] == 'b' || '1') {
            sumArr.push(0)
        } else if (fiscalCodeOdd[i] == 'c' || '2') {
            sumArr.push(5)
        } else if (fiscalCodeOdd[i] == 'd' || '3') {
            sumArr.push(7)
        } else if (fiscalCodeOdd[i] == 'e' || '4') {
            sumArr.push(9)
        } else if (fiscalCodeOdd[i] == 'f' || '5') {
            sumArr.push(13)
        } else if (fiscalCodeOdd[i] == 'g' || '6') {
            sumArr.push(15)
        } else if (fiscalCodeOdd[i] == 'h' || '7') {
            sumArr.push(17)
        } else if (fiscalCodeOdd[i] == 'i' || '8') {
            sumArr.push(19)
        } else if (fiscalCodeOdd[i] == 'j' || '9') {
            sumArr.push(21)
        } else if (fiscalCodeOdd[i] == 'k') {
            sumArr.push(2)
        } else if (fiscalCodeOdd[i] == 'l') {
            sumArr.push(4)
        } else if (fiscalCodeOdd[i] == 'm') {
            sumArr.push(18)
        } else if (fiscalCodeOdd[i] == 'n') {
            sumArr.push(20)
        } else if (fiscalCodeOdd[i] == 'o') {
            sumArr.push(11)
        } else if (fiscalCodeOdd[i] == 'p') {
            sumArr.push(3)
        } else if (fiscalCodeOdd[i] == 'q') {
            sumArr.push(6)
        } else if (fiscalCodeOdd[i] == 'r') {
            sumArr.push(8)
        } else if (fiscalCodeOdd[i] == 's') {
            sumArr.push(12)
        } else if (fiscalCodeOdd[i] == 't') {
            sumArr.push(14)
        } else if (fiscalCodeOdd[i] == 'u') {
            sumArr.push(16)
        } else if (fiscalCodeOdd[i] == 'v') {
            sumArr.push(10)
        } else if (fiscalCodeOdd[i] == 'w') {
            sumArr.push(22)
        } else if (fiscalCodeOdd[i] == 'x') {
            sumArr.push(25)
        } else if (fiscalCodeOdd[i] == 'y') {
            sumArr.push(24)
        } else if (fiscalCodeOdd[i] == 'z') {
            sumArr.push(23)
        }
        sumArr.push(100);
    };

console.log(sumArr);

}

let luoghiNascita = [];
const getPaeseJSON = async () => {

    const response = await fetch('paese.json');
    luoghiNascita = await response.json();

    $.each(luoghiNascita, function (index, paese) { 
        $('#luogo-nascita').append(`<option value="${paese.denominazione}">${paese.codice}</option>`);
       $('#btn').on('click', function () {
               if ( $('#birth-place').val().toUpperCase() === paese.denominazione.toUpperCase()) {
                   let splitCodice = paese.codice.split('')
                   for ( let i = 0; i < splitCodice.length; i++ ) {
                       fiscalCode.push(splitCodice[i])
                   }
               } else {
                   $('#birth-place').attr('placeholder', 'Insert valid birthplace');
               }
           });
   });
};

getPaeseJSON()
    .then(controlNumCode())

$('#btn').on('click', function () {
    let lastNameInputVal = $('#last-name').val();
    let firstNameInputVal = $('#first-name').val();
    
    lastNameCode(lastNameInputVal)
    firstNameCode(firstNameInputVal)
    birthDateCode()
    
    console.log(fiscalCode);
});

/* getBirthplace()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message)) */
    
 