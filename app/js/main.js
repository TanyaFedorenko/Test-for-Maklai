const btnResult = document.querySelector('#calculate');
let numbers = document.querySelector('#inputnumbers');
const result = document.querySelector('#block-form__result-show');
const operation = document.querySelector('#inputoperations');


const arrNum = numbers.value.split(',');
const clearInput =(input, input2)=>{
input.value = '';
input2.value = '';
}
const createNumArr = (str) => {
    const arrValue = str.value.split(',');
    const arrNum = arrValue.filter(el => {
        if (+el !== +el) {
            console.log(el)
        } else {
            return el
        }
    })

    return arrNum;

}
let resultSum;
const createResult = (arr, oper) => {

    if (oper.value === '+') {

        const resultSum = arr.reduce((total, amount) => {

            return Math.round( parseInt(total) + parseInt(amount))
        })
        
        return result.innerHTML = `<p>${resultSum}</p>`;
    } else if (oper.value === '-') {

        const resultSum = arr.reduce((total, amount) => {

            return Math.round( parseInt(total) - parseInt(amount))
        })
        return result.innerHTML = `<p>${resultSum}</p>`;
    } else if (oper.value === '*') {

        const resultSum = arr.reduce((total, amount) => {

            return Math.round( parseInt(total) * parseInt(amount))
        })
        return result.innerHTML = `<p>${resultSum}</p>`;
    } else if (oper.value === '/') {

        const resultSum = arr.reduce((total, amount) => {

            Math.round( parseInt(total) / parseInt(amount))
        })
        return result.innerHTML = `<p>${resultSum}</p>`;
    } else {
        return result.innerHTML = `<p>${'Choose correct operation'}</p>`;
    }

}

btnResult.addEventListener('click', (e) => {
    e.preventDefault();

    const numbersArr = createNumArr(numbers);

     createResult(numbersArr, operation);
     clearInput(numbers, operation);

});
