$( window ).on( 'load', function() {
    const burger = $('.menu__mobile');
    const menu = $('.menu');
    const productsButton = $('.products__button');
    const orderTitle = $('.order__title');
    const orderText = $('.order__text');
    const orderForm = $('.order__form');
    let orderProducts = $('.order__products');
    const orderSucceeded = $('.order__succeeded');
    const orderBtn = $('#orderBtn');
    const loader = $('.loader');
    let inputs = $('.order__input');
    let isChecked;

    burger.on('click', () => {
        burger.toggleClass('active');
        menu.toggleClass('open');
    });

    $('.menu *').on('click',() => {
        burger.removeClass('active');
        menu.removeClass('open');
    })

    productsButton.each( function () {
        $(this).on('click', function () {
            orderTitle[0].scrollIntoView({ behavior: 'smooth' })
            orderProducts.val($(this).siblings("h3").text());
        })
    })

    $('.order__phone').mask('+375 (00) 000-00-00');

    function openForm() {
        orderForm.removeClass('flip-out').addClass('flip-in');
        orderTitle.css('opacity', '1');
        orderText.css('opacity', '1');
        orderSucceeded.removeClass('flip-in').addClass('flip-out');
    }

    function closeForm() {
        orderForm.removeClass('flip-in').addClass('flip-out');
        orderTitle.css('opacity', '0');
        orderText.css('opacity', '0');
        orderSucceeded.removeClass('flip-out').addClass('flip-in');
    }

    orderBtn.on('click', () => {
        let orderData = {};
        $('.error-input').hide();
        isChecked = true;

        inputs.each(function() {
            if (!$(this).val()) {
                $(this).css('border-color', 'red');
                $(this).next().css('display', 'block');
                isChecked = false;
            } else {
                $(this).css('border-color', '#821328FF');
                orderData[$(this).attr('name')] = $(this).val();
            }
        });

        if (isChecked) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: "https://testologia.ru/checkout",
                data: orderData
            })
                .done(function( msg ) {
                    loader.hide();
                    setTimeout(() => {
                        if (msg.success) {
                            closeForm();

                            setTimeout(openForm, 5000);
                            orderForm[0].reset();
                        } else {
                            alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ.");
                        }
                    }, 500)
                });
        }
    })

})
