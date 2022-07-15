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



    // Modal Window
    const modal = document.querySelector(".modal"),
              modalTrigger = document.querySelectorAll(".card-link"),
              modalCloseBtn = document.querySelector("[data-close]");


    // ф-я перебора триггеров
    modalTrigger.forEach(btn =>{
        btn.addEventListener("click", ()=>{
            modal.classList.add("show");
            modal.classList.remove("hide");
            
            // Запрет скролла бади при открытии модального окна
            const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
            const body = document.body;
            body.classList.add("fixed");
            body.style.top = `-${scrollY}`;

        });
    });
    

    // ф-я закрытия модального окна
    function closeModal(){
        modal.classList.add("hide");
        modal.classList.remove("show");

        // Скролл бади на позицию 
        const body = document.body;
        const scrollY = body.style.top;
        body.classList.remove("fixed");
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        document.getElementById('dialog').classList.remove('show');
    }
    
    modalCloseBtn.addEventListener("click", closeModal); 
    
    modal.addEventListener("click", (e)=>{
        if(e.target === modal){    
            closeModal();          
        }
    });
    
    window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });


    // закрытие по кнопке Esc 
    document.addEventListener("keydown", (e)=>{
        if(e.code === "Escape" && modal.classList.contains("show")){
            closeModal();           
        }
    });


});
