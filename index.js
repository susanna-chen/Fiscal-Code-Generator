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
     else if (consonantArr.length == 1 && vowevowelArr.length > 1) {
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
    else if (consonantArr.length == 1 && vowevowelArr.lengthlLength > 1) {
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
        fiscalCode.push(yearResult)
    } else {
        fiscalCode.push(year)
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
        for ( let i=0; i < splitDay.length; i++ ) {
            fiscalCode.push(splitDay[i])
        }
        fiscalCode.push(day[0], day[1])
    } else if ( $("input[type=radio]:checked").attr('id') == 'female' ) {
        dayResult = (parseInt(day) + 40).toString().split('');
        $.each(dayResult, function (i, v) { 
             fiscalCode.push(v)
        });  
    }
}

let luoghiNascita;

$.getJSON( "paese.json", function( data ) {
    luoghiNascita = data;
    $.each(luoghiNascita, function (index, paese) { 
         $('#luogo-nascita').append(`<option value="${paese.denominazione}">${paese.codice}</option>`);
        $('#btn').on('click', function () {
                if ( $('#birth-place').val().toUpperCase() === paese.denominazione.toUpperCase()) {
                    let splitCodice = paese.codice.split('')
                    for ( let i=0; i < splitCodice.length; i++ ) {
                        fiscalCode.push(splitCodice[i])
                    }
                } else {
                    $('#birth-place').attr('placeholder', 'Insert valid birthplace');
                }
            });
    });
    
});

const carattereControlloCode = function () {
    let splitArr;
    splitArr = fiscalCode.join('').split('')
    console.log(splitArr);

}

$('#btn').on('click', function () {
    let lastNameInputVal = $('#last-name').val();
    let firstNameInputVal = $('#first-name').val();
    
    lastNameCode(lastNameInputVal)
    firstNameCode(firstNameInputVal)
    birthDateCode()
    carattereControlloCode()

    console.log(fiscalCode); 

});

/* getBirthplace()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message)) */
    
