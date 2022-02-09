import createElement from "./createElement.js"

const createFormPerson = (n) => {  // 
    const form = createElement('form', {
        className: 'person',
    })

    const title = createElement('h2', {
        className: 'person__title',
        textContent : `Пассажир #${n+1}`,
    })

    const fieldName = createElement('div',{
        className: 'field',
    })

    const labelName = createElement('label', {
        className : 'field__label', 
        for : `name ${n}`,
        textContent : 'ФИО',
    })

    const inputName = createElement('input', {
        className : 'field__input', 
        id: `name${n}`, 
        name: 'name', 
        type : 'text', 
        placeholder : 'Введите Ваше ФИО', 
        requiered: true, //обязат для заполнения и вместо '' мы ставим true
    })

    const fieldNumber = createElement('div', {
        className: 'field',
    })

    const labelNumber = createElement('label', {
        className: 'field__label',
        for: `ticket ${n}`,
        textContent: 'Номер билета (10 цифр)', 
    })

    const inputNumber = createElement('input', {
        className: 'field__input',
        id: 'ticket0',
        name: 'ticket',
        type: 'text',
        placeholder: 'Номер билета',
        required: true,
        minLenth: 10,
        maxLength: 10,
    })

    fieldName.append(labelName, inputName)
    fieldNumber.append(labelNumber, inputNumber)

    const button = createElement('button', {
        className: 'btn-confirm', 
        type : 'submit', 
        textContent : 'Подтвердить',
    })

    form.append(title, fieldName, fieldNumber, button)

    return form
}


const getFormPerson = (count) => {  // count кол-во форм
    const forms = []
    //i порядковый номер 

    if(count > 6) count = 6
    
    for(let i=0; i < count; i++){
        forms.push(createFormPerson(i))
    }

    return forms
}

export default getFormPerson