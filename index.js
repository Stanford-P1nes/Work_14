const link = document.querySelectorAll('.link-js');

link.forEach( el => {
    el.addEventListener('mouseenter', () => {
        el.parentElement.classList.add('active-start')
        el.parentElement.classList.remove('active-end')
    } )
})

link.forEach( el => {
    el.addEventListener('mouseleave', () => {
        el.parentElement.classList.remove('active-start')
        el.parentElement.classList.add('active-end')
        setTimeout( e => el.parentElement.classList.remove('active-end'), 201 )
    } )
})