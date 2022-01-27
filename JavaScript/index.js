

window.sr = ScrollReveal();

    sr.reveal('.scroll', {
        duration: 1500,
        origin: 'bottom',
        distance: '-100px'
    })

    sr.reveal('.scroll-about', {
        duration: 3000,
        origin: 'bottom',
        distance: '-100px'
    })

    sr.reveal('.scroll-festivals', {
        duration: 2000,
        origin: 'left',
        distance: '400px'
    })
    sr.reveal('.scroll-awards', {
        duration: 2000,
        origin: 'right',
        distance: '400px'
    })


///////////ccccc/c/c/c/c/c/c/c//ccc/c/c/c/dcdcdccdc/dc/dcd/cd/cd/cd/cd/cd/
const scroll = document.querySelector('.scroll')
    if (screen.width < 819) {
        sr.reveal('.scroll', {
            duration: 1500,
            origin: 'bottom',
            distance: '0px'
        })
    
        sr.reveal('.scroll-about', {
            duration: 3000,
            origin: 'bottom',
            distance: '0px'
        })
    
        sr.reveal('.scroll-festivals', {
            duration: 2000,
            origin: 'left',
            distance: '0px'
        })
        sr.reveal('.scroll-awards', {
            duration: 2000,
            origin: 'right',
            distance: '0px'
        })
    }