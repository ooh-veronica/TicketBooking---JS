import airPlane from "./airPlane.js"

const readyPlane = (forms, main, tourData) => {

    const data = [] //записываем данные из формы

    forms.forEach((form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 

            for(const element of form.elements){
                element.disabled = true; // блокируем
            }

            data.push({
                name: form.name.value, // value это то что введет пользователь
                ticket: form.ticket.value,
            })

            if(forms.length === data.length){ // forms.l - кол-во форм = кол-во объектов в массиве дата
                forms.forEach(form => form.remove())
                airPlane(main, data, tourData); 


            }
        })
    })

    return data
}

export default readyPlane