const rightCategory = document.querySelector('#rightBtnCategory')
const leftCategory = document.querySelector('#leftBtnCategory')
const containerCategory = document.querySelector('#categoryImg')


function handleClick() {
    rightCategory.addEventListener('click' , function () {
        containerCategory.scrollLeft += 60
    })
    leftCategory.addEventListener('click' , function () {
        containerCategory.scrollLeft -= 60
    })
}
handleClick() 

const rightOffer = document.querySelector('#rihgtBtnOffer')
const leftOffer = document.querySelector('#leftBtnOffer')
const containerOffer = document.querySelector('#offerProduct')


function handleClick2() {
    rightOffer.addEventListener('click' , function () {
        containerOffer.scrollLeft += 60
    })
    leftOffer.addEventListener('click' , function () {
        containerOffer.scrollLeft -= 60
    })
}
handleClick2() 