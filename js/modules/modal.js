
// function openModal(modalSelector, modalTimerId) {
//     const modal = document.querySelector(modalSelector);
//     modal.classList.add('show');
//     modal.classList.remove('hide');
//     document.body.style.overflow = 'hidden';
//
//     console.log(modalTimerId);
//     if(clearInterval){
//         clearInterval(modalTimerId);
//     }
//
// }
// function closeMod(modalSelector){
//     const modal = document.querySelector(modalSelector);
//     modal.classList.add('hide');
//     modal.classList.remove('show');
//     document.body.style.overflow = '';
// }






// function modal(triggerSelector, modalSelector, modalTimerId){
//     // Модальное окно
// // Появление модального окна

//     const modal = document.querySelector(modalSelector);
//     const btnModal = document.querySelectorAll(triggerSelector);


//     btnModal.forEach(btn => {
//         btn.addEventListener('click', () =>  openModal(modalSelector, modalTimerId));
//     });

//     modal.addEventListener('click', (e) => {
//         if(e.target === modal || e.target.getAttribute('data-close') == ''){
//             closeMod(modalSelector);
//         }
//     });
//     document.addEventListener('keydown', (e) => {
//         if(e.code === "Escape" && modal.classList.contains('show')){
//             closeMod(modalSelector);
//         }
//     });

    

//     function showModalByScroll(){
//         if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
//             openModal(modalSelector, modalTimerId);
//             window.removeEventListener('scroll', showModalByScroll);
//         }
    
//     }
//     window.addEventListener('scroll', showModalByScroll);
// }

// // export default modal;
// // export {closeMod};
// export {openModal};