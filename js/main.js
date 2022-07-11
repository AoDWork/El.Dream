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
});


// $(window).on('load', function(){

//     //vide.js -videobackground
//     $('#header').vide('./video/cherry_blossom_up.webm', {
//         bgColor: '#012210'
//     });
// });