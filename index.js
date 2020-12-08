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

const birthDateCode = function () { 
    //get code of year
    let date = $('#birth-date').val().split("-");
    let yearResult;
    console.log(date);
    let year = date[0] % 100;
    
    if (year < 10) {
        yearResult = "0" + year;
    }
    
    fiscalCode.push(yearResult)

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

    //get day
    let day = date[2];
    let dayResult;

    if ( $("input[type=radio]:checked").attr('id') == 'male' ) {
        console.log(dayResult);
    } else if ( $("input[type=radio]:checked").attr('id') == 'female' ) {
        dayResult = (parseInt(day) + 40).toString()
        console.log(dayResult);
    }
}





const getBirthplace = async searchBirthplace => {
        const response = await fetch('paese.json');
/*         if (response.status !== 200) {
            throw new Error('cannot fetch the data');
        } */
        const data = await response.json();

        // filter
        
        let matches = data.filter(paese => {
            const regex = new RegExp(`^${searchBirthplace}`, 'gi');
            if (paese.denominazione.match(regex)) {
                return paese
            }
        })
        console.log(matches);
        
        if (searchBirthplace.length === 0) {
            matches = [];
        } 
    }

$('#birth-place').on('input', () => getBirthplace($('#birth-place').val()));

/* getBirthplace()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message)) */
    
