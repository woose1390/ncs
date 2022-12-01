

$(document).ready(function(){
    //.navi의 li 태그에 mouseover 이벤트 설정
    $('.navi > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500); 
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    $('.imgslide > a:gt(0)').hide();

    setInterval(function(){
        $('.imgslide a:first-child').fadeOut()
        .next('a').fadeIn()
        .end().appendTo('.imgslide');
    },3000);

    $(function(){
        $('.tabmenu > li > a').click(function(){
            $(this).parent().addClass("active")
            .siblings().removeClass("active")
  
            return false;
        });
    });


    $(".notice li:first").click(function(){
        $("#layer").addClass("active");
    });

    $(".btn").click(function(){
        $("#layer").removeClass("active");
    });
    


    $(function(){
        $('.banner').vegas({
            slides: [
                {   src: '../resources/images/tour3.jpg',
                    video: {
                        src: [
                            '../resources/videos/tour.mp4'
                        ],
                        loop: true,
                        mute: true
                    }
                }
            ]
            });
    
        });



});
