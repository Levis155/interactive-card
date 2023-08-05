document.querySelector('#cn-textbox').addEventListener("input", (e) => {e.target.value = e.target.value = e.target.value.replace(/[^\dA-Z]/g, "").replace(/(.{4})/g, "$1 ").trim();});


const submitBtn = document.querySelector('#confirm-btn');
const inputCn = document.querySelector('#cn-textbox').value



submitBtn.addEventListener('click', () => {
    let isValid = false;
    
    
    const inputName = document.querySelector('#name-textbox').value


    const inputCn = document.querySelector('#cn-textbox').value

    const inputMonth = document.querySelector('#month-textbox').value;
    
    const inputYear = document.querySelector('#year-textbox').value;

    const inputCVC = document.querySelector('#cvc-textbox').value
    
    if(inputName === '') {
        document.querySelector('#card-name')
        .innerHTML = 'JANE APPLESEED'
        document.querySelector('#name-error')
        .innerHTML = "can't be blank"
    } else if (inputName !== '' && inputCn === '' || inputMonth === '' || inputYear === '' || inputCVC === '') {
        document.querySelector('#card-name')
        .innerHTML = 'JANE APPLESEED'
        document.querySelector('#name-error')
        .innerHTML = ''
    } else{
        isValid = true;
        document.querySelector('#card-name')
        .innerHTML = `${inputName}`
        document.querySelector('#name-error')
        .innerHTML = ''
    }

    if (inputName === '') {
        document.querySelector('#name-textbox')
        .classList.add('name-textbox-error')
    }else{
        document.querySelector('#name-textbox')
        .classList.remove('name-textbox-error')
    }




    if(inputCn === '') {
        document.querySelector('#card-num')
        .innerHTML = '0000 0000 0000 0000'
        document.querySelector('#error-cn')
        .innerHTML = "can't be blank"
    } else if(inputCn !== '' && inputName === '' || inputMonth === '' || inputYear === '' || inputCVC === '') {
        document.querySelector('#card-num')
        .innerHTML = '0000 0000 0000 0000'
        document.querySelector('#error-cn')
        .innerHTML = '';
    }else{
        isValid = true
        document.querySelector('#card-num')
        .innerHTML = `${inputCn}`
        document.querySelector('#error-cn')
        .innerHTML = ''
    }

    if(inputCn === '') {
        document.querySelector('#cn-textbox')
        .classList.add('cn-textbox-error')
    } else{
        document.querySelector('#cn-textbox')
        .classList.remove('cn-textbox-error')
    }


    
    if(inputMonth === '' || inputYear === '') {
        document.querySelector('#month-year-error')
        .innerHTML = "Can't be blank"
        document.querySelector('#card-date')
        .innerHTML = '00/00';
    } else if(inputMonth !== '' && inputName === '' ||inputCn === '' || inputYear === '' || inputCVC === '') {
        document.querySelector('#card-date')
        .innerHTML = '00/00';
        document.querySelector('#month-year-error')
        .innerHTML = '';
    } else{
        isValid = true;
        document.querySelector('#card-date')
        .innerHTML = `${inputMonth}/${inputYear}`
        document.querySelector('#month-year-error')
        .innerHTML = '';
    }

    if(inputMonth === '') {
        document.querySelector('#month-textbox')
        .classList.add('month-textbox-error')
    } else{
        document.querySelector('#month-textbox')
        .classList.remove('month-textbox-error')
    }


    if(inputYear === '') {
        document.querySelector('#year-textbox')
        .classList.add('year-textbox-error')
    } else{
        document.querySelector('#year-textbox')
        .classList.remove('year-textbox-error')
    }





    if(inputCVC === '') {
        document.querySelector('#cvc-error')
        .innerHTML = "Can't be blank"
    } else if(inputCVC !== '' &&inputName === '' || inputCn === '' || inputMonth === '' || inputYear === ''){
        document.querySelector('#card-cvc')
        .innerHTML = '000'
        document.querySelector('#cvc-error')
        .innerHTML = '';
    } else{
        isValid = true;
        document.querySelector('#card-cvc')
        .innerHTML = `${inputCVC}`
        document.querySelector('#cvc-error')
        .innerHTML = '';
    }

    if(inputCVC === '') {
        document.querySelector('#cvc-textbox')
        .classList.add('cvc-textbox-error')
    } else {
        document.querySelector('#cvc-textbox')
        .classList.remove('cvc-textbox-error')
    }



    if(isValid === true) {
        document.querySelector('#details-field-cont')
        .classList.add('details-field-cont-toggled')

        document.querySelector('#complete-cont')
        .classList.add('complete-cont-toggled')
    }
})

const continueBtn = document.querySelector('#continue-btn')

continueBtn.addEventListener('click', () => {
    document.querySelector('#details-field-cont')
    .classList.remove('details-field-cont-toggled')

    document.querySelector('#complete-cont')
    .classList.remove('complete-cont-toggled')

    document.querySelector('#name-textbox').value = ''
    document.querySelector('#cn-textbox').value = ''
    document.querySelector('#month-textbox').value = ''
    document.querySelector('#year-textbox').value = ''
    document.querySelector('#cvc-textbox').value = ''
})