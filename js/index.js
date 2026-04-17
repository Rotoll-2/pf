$(function(){
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();

        $('.hero').toggleClass('shrink', scrollTop > 50);
    })

    $('header ul li').click(function(){
        $(this).addClass('on').siblings('header ul li').removeClass('on');

        let idx = $(this).index();

        // alert(idx);
        // console.log(idx);

        let sd = $('main section').eq(idx).offset().top-150;

        $('html,body').animate({
            scrollTop : sd
        })


    })
    
    $(window).scroll(function(){
        $('main section').each(function(){

            let first = $('main section:first');

            if($(this).offset().top <= $(window).scrollTop()+250)
            {
                let idx = $(this).index()-1;

                $('header ul li').eq(idx).addClass('on').siblings('header ul li').removeClass('on');
            }
            else if(first.offset().top > $(window).scrollTop()+250){
                $('header ul li').removeClass('on');
            }

        })
    })

    $('header button').click(function(){

        $('html,body').animate({
            
            scrollTop : 0
        })
    })

    // 영상 재생 관리


    $('.interV.linkButton').click(function(){
        $('.popup.interVV').addClass('on')
        $("body").addClass("hideOver");
    })
    
    $('.typoG.linkButton').click(function(){
        $('.popup.typoV').addClass('on')
        $("body").addClass("hideOver");
    })

    $('.blend.linkButton').click(function(){
        $('.popup.blendV').addClass('on')
        $("body").addClass("hideOver");
    })

    $('.prod.backImage').click(function(){
        $('.popup.prodI').addClass('on')
        $("body").addClass("hideOver");
    })
    $('.ch1.backImage').click(function(){
        $('.popup.ch1I').addClass('on')
        $("body").addClass("hideOver");
    })
    $('.ch2.backImage').click(function(){
        $('.popup.ch2I').addClass('on')
        $("body").addClass("hideOver");
    })



    $('.popup button, .popup').click(function(){
        $('.popup.interVV').removeClass('on');
        $('.popup.typoV').removeClass('on');
        $('.popup.blendV').removeClass('on');
        $('.popup.prodI').removeClass('on');
        $('.popup.ch1I').removeClass('on');
        $('.popup.ch2I').removeClass('on');
        $("body").removeClass("hideOver");
    })

})