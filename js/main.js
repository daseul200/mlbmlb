$(function(){
    //윈도우의 가로길이를 win_width변수에 저장
    var win_width=$(window).width();
    //만약 win_widdth값이 1024이상이면
    if(win_width>1024){
        //pc버전

        //주메뉴에 마우스 오버했을 때 서브메뉴 나옴
        $('header nav > ul > li').hover(function(){
            //서브메뉴가 하나씩 나옴
            // $(this).find('.sub').stop().slideDown();
            //서브메뉴가 하나씩 나옴
            $('.sub').stop().slideDown();
            $('.sub_bg').stop().slideDown();
        },function(){
            //서브메뉴가 하나씩 사라짐
            // $(this).find('.sub').stop().slideUp();
            //서브메뉴가 한꺼번에 나옴
            $('.sub').stop().slideUp();
            $(".sub_bg").stop().slideUp();
        });
        // fullpage
        $('#fullpage').fullpage({
            //options here
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['Main', 'Store','Cap','MLB Heart','T-Shirts','Styling','Kids','MLB Promotion'],
            //fullpage의 내용이 모두 로드(load)되고 나면 funtion(){}의 내용을 실행함
            afterLoad:function(anchorLink,index){
                //만약 section의 인덱스 번호가 9라면
                if(index == 9){
                    //fullpage내비세이션 사라짐
                    $('#fp-nav').fadeOut();
                }else{
                    //fullpage 내비게이션 나타남
                    $('#fp-nav').fadeIn();
                }
            }
        });


        //hive의 6개의 버튼 동그랗게 정렬
        var hive_btns=$('.hive_btns .contents');
        var posx=0, posy=0;
        //윈도우의 가로길이가 1600~1920
        if(win_width > 1600){
            //각 .contents의 가로위치, 세로위치값을 배열에 저장
            var posx=['48%','17%','17%','41%','64%','64%']
            var posy=['-2%','12%','46%','61%','46%','12%']
        //윈도우의 가로길이가 1200~1599
        }else if(win_width > 1200){
            //각 .contents의 가로위치, 세로위치값을 배열에 저장
            var posx=['38%','6%','6%','38%','69%','69%']
            var posy=['-2%','12%','46%','61%','46%','12%']
        // 윈도우의 가로길이가 1024~1199
        }else{
            //각 .contents의 가로위치, 세로위치값을 배열에 저장
            var posx=['38%','1%','1%','38%','74%','74%']
            var posy=['-2%','12%','46%','61%','46%','12%']
        }
        

    //   var hive_width=hive_btns.width();
    //   var hive_height=hive_btns.height();

      //.contents 개수만큼 반복
      hive_btns.each(function(){
        //.contents버튼의 인덱스 번호를 저장하는 변수
        var num=$(this).index();
        //배열에 저장된 위치값으로 배치하기
        $(this).css({'left':posx[num],'top':posy[num]});
      });

      $('.hive_contents div').hide();
      $('.hive_contents div:first').show();
      //hive의 6개 버튼에 마우스오버 이벤트 설정
      hive_btns.hover(function(){
        var hive_num=$(this).index();
        $('.hive_contents div').hide();
        $('.hive_contents div').eq(hive_num).fadeIn();
      });

    }else{
        //태블릿 버전, 모바일 버전
        //모바일 버전 주메뉴를 클릭했을 때 서브메뉴 나옴
        $('.mobile_nav .mobile_nav_in nav > ul > li').click(function(){
            //만약 클릭한 주메뉴에 active가 없다면
            //$(this).attr('class') : 클릭한 메뉴의 class속성
            if($(this).attr('class') != 'active'){
                $('.mobile_nav .mobile_nav_in nav > ul > li').removeClass('active');
                $(this).addClass('active');
                $('.mobile_nav .mobile_nav_in nav > ul > li .sub').stop().slideUp();
                $(this).find('.sub').stop().slideDown();
            //클릭한 메뉴에 active속성이 있으면
            }else{
                $(this).removeClass('active');
                $(this).find('.sub').stop().slideUp();
            }
        });
        //메뉴 버튼을 클릭하면 세로 메뉴 영역 나옴
        $('.menu_btn').click(function(){
            $('.mobile_nav').animate({
                right:0
            });
        });
        //닫기 버튼을 클릭하면 세로 메뉴 영역 들어감
        $('.mobile_close').click(function(){
            $('.mobile_nav').animate({
                right:'-100%'
            });
        });
    }
    //swiper slide(pc, 태블릿, 모바일)
    var swiper = new Swiper('.mySwiper', {
        autoplay: {
            delay: 4000
        },
        loop:true,
        effect:'fade',
        pagination: {
            el: ".swiper-pagination",
            clickable:true
        },
    });
    // banner section 안의 도형 애니메이션
    // .li_bg 에 마우스 오버 이벤트 설정
    $('.contents .hover_ani').on('mouseenter',function(){
        // 마우스 오버 이벤트가 설정된 li 안의 자식객체 .li_bg를 찾아서 $child 변수에 저장
        var $child=$(this).find('.li_bg');
        var $line=$(this).find('.li_line');
        // 애니메이션 실행 시간
        var duration=0.5;
        // 애니메이션 하기 전 대기시간
        var delay=0.1;

        TweenMax.to($child, duration, {
            scaleY:1.1, ease:Expo.easeOut
        });
        TweenMax.to($child, duration, {
            scaleX:1.1, scaleY:1, ease:Back.easeOut,
            easeParams:[3], delay:delay
        });
        TweenMax.to($child, duration*1.25, {
            scaleX:1, scaleY:1,
            ease:Back.easeOut,
            easeParams:[6], delay:delay*3
        });

        TweenMax.to($line, duration, {
            scaleY:1.1, ease:Expo.easeOut
        });
        TweenMax.to($line, duration, {
            scaleX:1.1, scaleY:1, ease:Back.easeOut,
            easeParams:[3], delay:delay
        });
        TweenMax.to($line, duration*1.25, {
            scaleX:1, scaleY:1,
            ease:Back.easeOut,
            easeParams:[6], delay:delay*3
        });
    });


    //slick slider(.six_tab)
    // $('.product').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear'
    // });

    //splide를 사용한 line_tab
    var main = new Splide( '#main-carousel', {
        type      : 'fade',
        rewind    : true,
        pagination: false,
        arrows    : false,
      } );
    
      var thumbnails = new Splide( '#thumbnail-carousel', {
        fixedWidth  : 'auto',
        fixedHeight : 60,
        gap         : 10,
        rewind      : true,
        pagination  : false,
        isNavigation: true,
        focus       : 'center'
        // breakpoints : {
        //   600: {
        //     fixedWidth : 60,
        //     fixedHeight: 44,
        //   },
        // },
      });
    
      main.sync( thumbnails );
      main.mount();
      thumbnails.mount();

      //.photo 영역의 slide
      var swiper = new Swiper(".mySwiper3", {
        autoplay : {
            delay:4000
        },
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable:true
        },
      });
      //top 버튼 클릭하면 맨 위로 이동함
      $('.top').click(function(){
        $.fn.fullpage.moveTo(1, 1);
      });

      //화면이 스크롤 되면 header에 active 추가  
      setInterval(header_color,1);
      function header_color(){
        if($('body').hasClass('fp-viewing-0')===true){
            $('header').removeClass('active');
        }else{
            $('header').addClass('active');
        }
    }
});