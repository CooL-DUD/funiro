function openBurgerMenu(burgerBtn){
    let burgerMenu = document.getElementById('burgerMenu')
    burgerBtn.classList.toggle('_active')
    burgerMenu.classList.toggle('_active')
}

function showSearchbar(){
    document.getElementById('searchbar').classList.toggle('_active')
}
function openSpoiler(submenu){
    let spoiler = submenu.querySelector('[data-spoiler="1"]')
    let arrow = submenu.querySelector('.arrow')
    spoiler.classList.toggle('_active')
    arrow.classList.toggle('_active')
}
function activeBtn(btn){
    let unclick = document.querySelector('[data-clicked="1"]')
    unclick.dataset.clicked = 0
    btn.dataset.clicked = 1
    unclick.classList.remove('_active')
    btn.classList.add('_active')
}
function autoScrollGallery(){
    let windowWidth = window.innerWidth
    let cursorPosition = event.clientX
    // document.querySelector('.gallery__container').style = `scroll-snap-align: unset; transform: translate3d(${cursorPosition - windowWidth}px,0,0);`
    document.querySelector('.gallery__container').style = 'scroll-snap-align: unset;'
    if (cursorPosition > windowWidth/2){
        // document.querySelector('.gallery__container').style = 'scroll-snap-align: end;'
        document.querySelector('.gallery__container').style = `scroll-snap-align: unset; transform: translate3d(${-15}%,0,0);`
    }
    if (cursorPosition < windowWidth/2){
        // document.querySelector('.gallery__container').style = 'scroll-snap-align: start;'
        document.querySelector('.gallery__container').style = `scroll-snap-align: unset; transform: translate3d(${0}%,0,0);`
    }
}

console.log(window.innerWidth)
console.log(window.innerHeight)
window.onresize = () => {
    teleport(document.querySelector('.swiper-paginationAbout'),document.querySelector('.about .swiper-buttons'),1240,document.querySelector('.swiper-button-nextAbout'))
    teleport(document.querySelector('.quality .btnOrange'),document.querySelector('.about'),1240)
}
window.onload = () => {
    teleport(document.querySelector('.swiper-paginationAbout'),document.querySelector('.about .swiper-buttons'),1240,document.querySelector('.swiper-button-nextAbout'))
    teleport(document.querySelector('.quality .btnOrange'),document.querySelector('.about'),1240)
}

function teleport(element,parent,maxSize,insertBefore = null){
    if (window.innerWidth < maxSize) {
        if (insertBefore != null)
            parent.insertBefore(element, insertBefore)
        else
            parent.appendChild(element)
    }
}


const hiddenElems = document.querySelectorAll('._hidden')

const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting){
            e.target.classList.add('_show')
        } else {
            e.target.classList.remove('_show')
        }
    })
})

hiddenElems.forEach(e => observer.observe(e))
