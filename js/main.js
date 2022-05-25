window.addEventListener('DOMContentLoaded', function () {

    $('#section01').addClass('on')


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        if(scrollTop >= 850){
            $('#section02').addClass('on')
        }

        if(scrollTop >= 1400){
            $('#section03').addClass('on')
        }

        if(scrollTop >= 3680){
            $('#section05').addClass('on')
        }

        if(scrollTop >= 5480){
            $('#section06').addClass('on')
        }

        if(scrollTop >= 6800){
            $('#section06 .ta_problem').addClass('on')
        }
        if(scrollTop >= 7000){
            $('#section06 .ta_solution').addClass('on')
        }
        if(scrollTop >= 7350){
            $('#section06 .ta_goal').addClass('on')
        }
        if(scrollTop >= 8100){
            $('#section07').addClass('on')
        }
        if(scrollTop >= 10800){
            $('#section09').addClass('on')
        }
        if(scrollTop >= 12300){
            $('#section010').addClass('on')
        }
        if(scrollTop >= 13680){
            $('#section011').addClass('on')
        }
        if(scrollTop >= 16850){
            $('#section013').addClass('on')
        }
        if(scrollTop >= 17850){
            $('#section013 .ma_left_content').addClass('on')
        }
        if(scrollTop >= 17850){
            $('#section013 .ma_right_content').addClass('on')
        }
        if(scrollTop >= 20350){
            $('#section014').addClass('on')
        }
        if(scrollTop >= 21500){
            $('#section015').addClass('on')
        }
        if(scrollTop >= 22400){
            $('#section016').addClass('on')
        }
        if(scrollTop >= 23700){
            $('#section017').addClass('on')
        }
        if(scrollTop >= 25600){
            $('#section018').addClass('on')
        }



















    });



    /*  slide,click event section */



})


