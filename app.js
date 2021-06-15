const translate = document.querySelectorAll('.translate');
const zoom = document.querySelectorAll('.zoom');
const title = document.querySelector('.big-title');

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    translate.forEach( element => {
        let speed = element.dataset.speed;
        console.log(speed);
        element.style.transform = `translateY(${scroll * speed}px)`
    })
    zoom.forEach( element => {
        element.style.width = `${scroll/2 + 600}px`
    })
    title.style.opacity = `${100/scroll}`
})