let Btn = document.querySelector('.ptn_up')




window.addEventListener('scroll', () => {
    if (window.scrollY >= 600) {
        Btn.style.cssText = 'opacity : 1 ; z-index : 22'
    }
    else {
        Btn.style.cssText = 'opacity : 0 ; z-index : -1'
    }
})

Btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})