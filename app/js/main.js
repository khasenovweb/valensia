@@include('libs/jquery.js')

@@include('libs/datepicker.min.js')
@@include('libs/datepicker.ru-RU.js')
@@include('libs/jquery.fancybox.min.js')
@@include('libs/mask.js')
@@include('libs/mask-phone.js')
@@include('libs/owl.carousel.min.js')
@@include('libs/parallax.min.js')
@@include('libs/validate.js')

@@include('partials/modal.js')

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

    // Изменнение кол-ва в input
    $('body').on('click', '[data-input-number-group-plus]', function(){
        var val = $(this).closest('[data-input-number-group]').find('[data-input-number-group-input]').val();
        var newval = Number(val) + 1;
        $(this).closest('[data-input-number-group]').find('[data-input-number-group-input]').val(newval);
        $(this).closest('[data-input-number-group]').find('[data-input-number-group-input]').trigger('change');
    });
    $('body').on('click', '[data-input-number-group-minus]',function(){
        var val = $(this).closest('[data-input-number-group]').find('[data-input-number-group-input]').val();
        var newval;
        if( val > 1 ) {
            newval = Number(val) - 1;
        }else {
            newval = 1;
        }
        $(this).closest('[data-input-number-group]').find('[data-input-number-group-input]').val(newval);
        $(this).closest('[data-input-number-group]').find('[data-input-number-group-input]').trigger('change');;
    });
    // END Изменнение кол-ва в input


    $('[data-mobile-menu-show]').click(function(){
        $('[data-mobile-nav]').addClass('active');
        $('.global__wrapper').addClass('hidden-y');
    });
    $('[data-mobile-menu-hide]').click(function(){
        $('[data-mobile-nav]').removeClass('active');
        $('.global__wrapper').removeClass('hidden-y');
    });


    $('.reviews__slider__dots').each(function() {
      $(this).find('.owl-dot').each(function(index) {
        $(this).attr('aria-label', index + 1);
      });
    });

    
    $('img[data-lazy-src]').each(function(i, el){
        var src = $(el).attr('data-lazy-src');
        $(this).attr('src',src);
    });


    // $(window).scroll(function(){
    //     $('.global__wrapper').append('<link rel="stylesheet" href="css/main.css">');
    // });

    $.validator.addMethod(
        "phone",
        function (value) {
            return value.replace(/\D+/g, "").length >= 11;
        },
        "Введите номер телефона полностью"
    );

    $("form[data-form-validate]").each(function (i, el) {
        $(el).validate({
            rules: {
                phone: "phone",
                date: "required",
                politics: "required"
            },
            messages: {
                date: "Выберите дату"
            },
            submitHandler: function(form) {
                var data = $(form).serialize();
                console.log('Валидно');
            }
        });
    });

});