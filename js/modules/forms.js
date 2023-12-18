import {closeMod, openModal} from './modal';
import {postData} from '../services/services';

function forms(formSelector, modalTimerId){
    const forms = document.querySelectorAll(formSelector);
    
    const message = {
        loading: 'Загрузка',
        success: 'Спасибо, скоро свяжемся',
        failure: 'Что-то пошло не так'
    };

    forms.forEach(item => {
        bindPostData(item);
    });


    

    function bindPostData(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);


// XMLHttpRequest
            // const request = XMLHttpRequest();
            // request.open('POST', 'server.php');
            // request.setRequestHeader('Content-type', 'application/json');
            
            // const formData = new FormData(form);

            // let obj = {};
            // formData.forEach(function(value, key){
            //     obj[key] = value;
            // });
            // const json = JSON.stringify(obj);
            // request.send(json);

            
            // request.addEventListener('load', () => {
            //     if(request.status === 200){
            //         console.log(request.response);
            //         showThanksModal( message.success);
            //         form.reset();
            //         statusMessage.remove();

            //     } else {
            //         showThanksModal( message.failure);
            //     }
            // });



// Fetch вместо выше 
            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            
            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal( message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal( message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }


    function showThanksModal(message){
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);


        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
                <div class="modal__content">
                    <div class="modal__close" data-close>×</div>
                    <div class="modal__title">${message}</div>
                </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeMod('.modal');
        }, 4000);
    }

}

export default forms;