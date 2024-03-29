"use strict"
window.addEventListener("DOMContentLoaded", () => {

    // Modal Window
    const modal = document.querySelector(".modal"),
        modalTrigger = document.querySelectorAll(".card-link"),
        modalCloseBtn = document.querySelector("[data-close]"),
        parentContantWrap = document.querySelector(".modal-content")


    // map triggers
    modalTrigger.forEach(btn => {
        console.log(location.pathname)
        btn.addEventListener("click", (e) => {
            const parentCard = e.target.parentNode.parentNode

            if (parentCard.classList.contains("card")) {
                const modalContent = document.createElement('div')

                modalContent.innerHTML = `
                            <h3 class="modal-title">${parentCard.querySelector('.card-title').innerHTML}</h3>
                            <div class='modal-container'>
                                <img class="modal-img" src="${parentCard.querySelector('[src]').src}" alt="${parentCard.querySelector('.card-title').innerHTML}">
                                <p>${parentCard.querySelector('p').innerHTML}</p>
                            </div>`

                parentContantWrap.appendChild(modalContent)

                modal.classList.add("show")
                modal.classList.remove("hide")

                // Запрет скролла бади при открытии модального окна
                const scrollY = document.documentElement.style.getPropertyValue('--scroll-y')
                const body = document.body
                body.classList.add("fixed")
                body.style.top = `-${scrollY}`
            }
        })
    })


    // close modal
    function closeModal() {
        modal.classList.add("hide")
        modal.classList.remove("show")
        parentContantWrap.innerHTML = ""

        // Скролл бади на позицию 
        const body = document.body
        const scrollY = body.style.top
        body.classList.remove("fixed")
        body.style.top = ''
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
        document.getElementById('dialog').classList.remove('show')
    }

    modalCloseBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            e.preventDefault()
            closeModal()
        }
    })

    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
    })


    // close modal on Esc
    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal()
        }
    })

})
