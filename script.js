// button see
const buttonSee = document.querySelector(".button-see");
const captButton = buttonSee.firstElementChild; // h5

buttonSee.addEventListener('mouseover', function(){
    buttonSee.style.backgroundColor = 'black';
    buttonSee.style.transition = '0.3s';
    buttonSee.style.cursor = 'pointer';
    captButton.style.color = 'white';
});

buttonSee.addEventListener('mouseout', function(){
    buttonSee.style.backgroundColor = 'white';
    buttonSee.style.cursor = 'pointer';
    captButton.style.color = 'black';
});

// const imageHover = document.querySelectorAll(".container-image");
// const captImage = document.querySelectorAll(".title-container");
// for(let i=0; i<imageHover.length; i++){
//     imageHover[i].addEventListener('mouseover', function(){
//         imageHover[i].style.opacity = '0.5';
//         imageHover[i].style.cursor = 'pointer';
//         captImage[i].style.color = 'black';
//         captImage[i].style.opacity = '1';
//     });
//     imageHover[i].addEventListener('mouseout', function(){
//         imageHover[i].style.opacity = '1';
//         imageHover[i].style.cursor = 'pointer';
//         captImage[i].style.color = 'white';
//         captImage[i].style.opacity = '1';
//     });
// }