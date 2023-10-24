const menu = document.querySelector('.menu_open .icon')
const opened = document.querySelector('.icons')
const visivility = document.querySelector('.style_cope')
const mostrar = document.querySelector('.fondo')

menu.addEventListener('click', () => {
    opened.classList.toggle("mover")
    visivility.classList.toggle("active")
    mostrar.classList.toggle("visible")
})

window.addEventListener('click', e => {
    if (opened.classList.contains('mover')
        && e.target != opened && e.target != menu) {
        opened.classList.toggle("mover")
        visivility.classList.toggle("active")
        mostrar.classList.toggle("visible")
    }
})

// const nav = document.querySelector('.start', '.OnAirPrograma')
// window.addEventListener('scroll', fixNav)