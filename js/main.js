$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop:true, //Зацикливаем слайдер
        margin:50, //Отступ от элемента справа в 50px
        autoplay:true, //Автозапуск слайдера
        smartSpeed:2000, //Время движения слайда
        autoplayTimeout:5000, //Время смены слайда
        nav: false
    });
});