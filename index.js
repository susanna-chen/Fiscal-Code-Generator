let fiscalCode = [];
let vowelRegex = /[aeiou]/gi;
let consonantRegex =  /[b-df-hj-np-tv-z]/gi;

const lastNameCode = function (lastName) { 

    let vowelArr = lastName.match(vowelRegex);
    let consonantArr = lastName.match(consonantRegex);

        if ( vowelArr == null || vowelArr.length < 2 && consonantArr == null) {
        $('#last-name').attr('placeholder', 'Insert valid last name');
    }
     else if (consonantArr == null && vowelArr.length > 1) {
        fiscalCode.push(vowelArr[0], vowelArr[1], 'x');
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

    if (vowelArr == null || vowelArr.length < 2 && consonantArr == null) {
        $('#first-name').attr('placeholder', 'Insert valid first name');
    }
    else if (consonantArr == null && vowelArr.length > 1) {
        fiscalCode.push(vowelArr[0], vowelArr[1], 'x');
    }
    else if (consonantArr.length == 1 && vowelArr.length == 1) {
        fiscalCode.push(consonantArr[0], vowelArr[0], 'x');
    }
    else if (consonantArr.length == 1 && vowelArr.length > 1) {
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

let evenVal = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'a': 0,
    'b': 1,
    'c': 2,
    'd': 3,
    'e': 4,
    'f': 5,
    'g': 6,
    'h': 7,
    'i': 8,
    'j': 9,
    'k': 10,
    'l': 11,
    'm': 12,
    'n': 13,
    'o': 14,
    'p': 15,
    'q': 16,
    'r': 17,
    's': 18,
    't': 19,
    'u': 20,
    'v': 21,
    'w': 22,
    'x': 23,
    'y': 24,
    'z': 25
}

const oddVal = {
    '0': 1,
    '1': 0,
    '2': 5,
    '3': 7,
    '4': 9,
    '5': 13,
    '6': 15,
    '7': 17,
    '8': 19,
    '9': 21,
    'a': 1,
    'b': 0,
    'c': 5,
    'd': 7,
    'e': 9,
    'f': 13,
    'g': 15,
    'h': 17,
    'i': 19,
    'j': 21,
    'k': 2,
    'l': 4,
    'm': 18,
    'n': 20,
    'o': 11,
    'p': 3,
    'q': 6,
    'r': 8,
    's': 12,
    't': 14,
    'u': 16,
    'v': 10,
    'w': 22,
    'x': 25,
    'y': 24,
    'z': 23       
}

const remainderVal = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
    10:	"k",
    11:	"l",
    12:	"m",
    13:	"n",
    14:	"o",
    15:	"p",
    16:	"q",
    17:	"r",
    18:	"s",
    19:	"t",
    20:	"u",
    21:	"v",
    22:	"w",
    23:	"x",
    24:	"y",
    25:	"z"	

}

let fiscalCodeOdd = [];
let fiscalCodeEven = [];
let sumArr = [];


const controlNumCode = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            fiscalCodeOdd.push(arr[i])
        } else {
            fiscalCodeEven.push(arr[i])
        }
    }

    fiscalCodeOdd.forEach(element => {
        if (element in oddVal) {
            sumArr.push(oddVal[element])
        }
    });
    fiscalCodeEven.forEach(element => {
        if (element in evenVal) {
            sumArr.push(evenVal[element])
        }
    });
    let sumRemainder = sumArr.reduce((a, b) => (a + b) % 26)
    if (remainderVal.hasOwnProperty(sumRemainder)) {
        fiscalCode.push(remainderVal[sumRemainder])
    }
    console.log(sumArr);
    console.log(sumRemainder);
};

function birthplaceCode() {
    $.each(luoghiNascita, function (index, paese) {
        if ($('#birth-place').val().toUpperCase() === paese.denominazione.toUpperCase()) {
            let splitCodice = paese.codice.split('');
            for (let i = 0; i < splitCodice.length; i++) {
                fiscalCode.push(splitCodice[i].toLowerCase());
            }
        } else if ($('#birth-place').val() === "") {
            $('#birth-place').attr('placeholder', 'Insert valid birthplace');
        }
    });
}

let luoghiNascita = [];
const getPaeseJSON = async () => {

    const response = await fetch('paese.json');
    luoghiNascita = await response.json();

    $.each(luoghiNascita, function (index, paese) { 
        $('#luogo-nascita').append(`<option value="${paese.denominazione}">${paese.codice}</option>`);
       /* $('#btn').on('click', function () {
               if ( $('#birth-place').val().toUpperCase() === paese.denominazione.toUpperCase()) {
                   let splitCodice = paese.codice.split('')
                   for ( let i = 0; i < splitCodice.length; i++ ) {
                       fiscalCode.push(splitCodice[i].toLowerCase())
                   }
               } else {
                   $('#birth-place').attr('placeholder', 'Insert valid birthplace');
               }
           });
           controlNumCode(fiscalCode)
   }); */
});

}
getPaeseJSON()

$('#btn').on('click', function () {
    let lastNameInputVal = $('#last-name').val().toLowerCase();
    let firstNameInputVal = $('#first-name').val().toLowerCase();
    
    lastNameCode(lastNameInputVal)
    firstNameCode(firstNameInputVal)
    birthDateCode()
    birthplaceCode()
    controlNumCode(fiscalCode)
    $('.container').html(
        `<div class="result">
        <h2>Your Fiscal Code</h2>
        <p>${fiscalCode.join("").toUpperCase()}</p>
        <button onClick="window.location.reload();" class="btn">New Fiscal Code</button>
        <div>`
    );
});

/* getBirthplace()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message)) */
    
 