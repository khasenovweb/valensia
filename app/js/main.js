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


    $('[data-mask="phone"]').mask("+7 (999) 999-99-99");
    $('[data-mask="date"]').mask("99.99.9999");


    $('[data-paralax-scene]').each(function(i, el){
        var parallaxInstance = new Parallax(el);
    });
});

