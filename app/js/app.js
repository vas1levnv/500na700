const accordion = document.getElementsByClassName('info__item');
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android()
            || isMobile.BlackBerry()
            || isMobile.iOS()
            || isMobile.Opera()
            || isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch')

    let menuArrows = document.querySelectorAll('.menu__arrow')
    if (menuArrows.length > 0) {
        for (let i = 0; i < menuArrows.length; i++) {
            const menuArrow = menuArrows[i]
            menuArrow.addEventListener('click', function (e){
                menuArrow.parentElement.classList.toggle('_active')
            })
        }
    }

} else {
    document.body.classList.add('_pc')
}

const iconMenu = document.querySelector('.menu__icon')
if(iconMenu){
    const menuBody = document.querySelector('.menu__body')
    iconMenu.addEventListener("click", function (e){
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}

new Swiper('.carousel',{

    navigation: {
        nextEl:'.slide-button__right',
        prevEl:'.slide-button__left',

    },

   /* slidesPerView: 1.2,*/
    spaceBetween: 20,
    initialSlide: 1,
    centredSlides: true,
})

new Swiper('.news-small',{

    slidesPerView: 1.4,
    spaceBetween: 20,
})

