@@include('libs/jquery.js')
@@include('libs/datepicker.min.js')
@@include('libs/datepicker.ru-RU.js')
@@include('libs/jquery.fancybox.min.js')
@@include('libs/mask.js')
@@include('libs/mask-phone.js')
@@include('libs/owl.carousel.min.js')
@@include('libs/parallax.min.js')
@@include('libs/validate.js')
@@include('libs/jquery.stickybits.min.js')

$(document).ready(function(){
    $.fn.datepicker.languages['ru-RU'] = {
        format: 'dd.mm.YYYY',
        days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        weekStart: 1,
        startView: 0,
        yearFirst: false,
        yearSuffix: ''
    };
    
    
    $('[data-datepicker]').datepicker({
        language: 'ru-RU',
        format: 'dd.mm.yyyy'
    });


    // $('[data-mask="phone"]').mask("+7 (999) 999-99-99");
    $('[data-mask="date"]').mask("99.99.9999");


    $('[data-paralax-scene]').each(function(i, el){
        var parallaxInstance = new Parallax(el);
    });


    $('.reviews__slider').owlCarousel({
        items: 1,
        dots: true,
        loop: true,
        dotsContainer: ".reviews__slider__dots"
    });

    $('[data-accordion-text]').slideUp();
    $('[data-accordion-link]').click(function(){
        var id = $(this).attr('data-accordion-link');
        $(this).toggleClass('active');
        $('[data-accordion-text="'+id+'"]').slideToggle();
    });

    // $('.catalog__content__left').stickybits();
});

