"use strict"
window.addEventListener("DOMContentLoaded", ()=>{
    const textP = document.querySelectorAll('.card p');
    console.log(textP.innerHTML);
    
    textP.forEach( (item, ind) => {
        if(item.innerHTML.length > 60){
            item.innerHTML = `${item.innerHTML.substring(0, 60)} ...`;
            console.log(item.innerHTML);
        };
    });


     //modaltab
        // Кнопки с разными аттрибутами и поэтому мы их объеденим одним дата аттрибутом data-modal, допишем в верстку этот селектор
        // <button data-modal class="btn btn_dark">Связаться с нами</button>. Для закрытия окна после вызова(показа) прописываем 
        // в закрывающем элементе data-close  <div data-close class="modal__close">&times;</div>  - это крестик
    const modal = document.querySelector(".modal"),
              modalTrigger = document.querySelectorAll(".card-link"), // *! квадратные скобки что бы обратится к аттрибуту
              modalCloseBtn = document.querySelector("[data-close]");

    // Проверяем функционал выбирая только первую кнопку modalTrigger = document.querySelector("[data-modal]"),
    // добавляем и убираем стили которые раньше прописали в css .show{display:block}.hide{display:none}
    // .fade{animation-name: fade;animation-duration: 1.5s;}@keyframes fade{from{opacity: 0.1;}to{opacity: 1;}}     
    
    // modalTrigger.addEventListener("click", ()=>{
    //     modal.classList.add("show");
    //     modal.classList.remove("hide");
    //     document.body.style.overflow = "hidden";
    // });
    
    // modalCloseBtn.addEventListener("click", ()=>{
    //     modal.classList.add("hide");
    //     modal.classList.remove("show");
    //     document.body.style.overflow = ""; //оставляем пустые скобки и браузер сам возвращает дефолт для прокрутки страницы
    // });
    
    //Страницу можно пролистывать не закрывая окно, многим заказчикам это не нужно. Нужно зафиксировать страницу скрывая скролл
    // document.body.style.overflow = "hidden";
    


    //Делаем через toggle контролируя свойство display через стиль show
    // modalTrigger.addEventListener("click", ()=>{
    //     modal.classList.toggle("show"); //если класса нет - добавит, если есть уберет
    //     document.body.style.overflow = "hidden";
    // });
    
    // modalCloseBtn.addEventListener("click", ()=>{
    //     modal.classList.toggle("show");
    //     document.body.style.overflow = ""; //оставляем пустые скобки и браузер сам возвращает дефолт для прокрутки страницы
    // });
    


    //Создаем функцию для перебора кнопок при querySelectorAll
    modalTrigger.forEach(btn =>{
        btn.addEventListener("click", ()=>{
            modal.classList.add("show");
            modal.classList.remove("hide");
            document.body.style.overflow = "hidden";
        });
    });
    
    // modalCloseBtn.addEventListener("click", ()=>{
    //     modal.classList.add("hide");
    //     modal.classList.remove("show");
    //     document.body.style.overflow = ""; 
    // });
    


    //реализуем закрытие окна по клику на подложку(темную часть) и по кнопке Esc клавиатуры
    //<div class="modal"> - подложка (обертка) (темная)
    //   <div class="modal__dialog"> - область окна (светлая) - вложена в подложку(обертку)
    //єл. подложки в переменной modal
    // modal.addEventListener("click", (e)=>{
    //     if(e.target === modal){    //проверяем строгое равенство объекта по которому кликнули объекту modal
    //         modal.classList.add("hide");
    //         modal.classList.remove("show");
    //         document.body.style.overflow = ""; 
    //     }
    // });
    
    //Можно встретить такой код, но это НЕ везде будет работать, строго привязываемся к названию event, нарушаем логику кода
    //нужно четко говорить что (e) мы используем
    // modal.addEventListener("click", ()=>{
    //     if(event.target === modal){
    
    //Правило Don't Repeat yourself (DRY) если код повторяется нужно его вынести в одну функцию
    function closeModal(){
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow = ""; 
    }
    
    modalCloseBtn.addEventListener("click", closeModal); // тут просто передаем функцию
    
    modal.addEventListener("click", (e)=>{
        if(e.target === modal){    //проверяем строгое равенство объекта по которому кликнули объекту modal
            closeModal();          // тут вызываем функцию
        }
    });
    
    //Реализуем закрытие по кнопке Esc клавиатуры (Коды кнопок  keycode.info или learn.javascript.ru/keyboard-events)
    document.addEventListener("keydown", (e)=>{
        if(e.code === "Escape" && modal.classList.contains("show")){//если код события строго равен Escape(обозначение кнопки Esc)
            closeModal();           // вызываем функцию
        }
    });
    //что бы closeModal(); по Esc срабатывал только когда открыто окно modal.classList.contains("show") 




});


// $(window).on('load', function(){

//     //vide.js -videobackground
//     $('#header').vide('./video/cherry_blossom_up.webm', {
//         bgColor: '#012210'
//     });
// });