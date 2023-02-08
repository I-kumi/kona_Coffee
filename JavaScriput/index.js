// ページがロードされたら要素をフェードインさせる
$(window).on('load',function(){
    setTimeout(function(){
		$('.l-header__wrapper, .p-hero__wrapper').fadeIn(1000);
	},1000);
});

//スクロールでヘッダー部分非表示
$(function(){
    var pos = 0;
    var header = $('.l-header__container');

    $(window).on('scroll', function(){
        if($(this).scrollTop() < pos ){
            header.removeClass('js-headerHidden');
        }else{
            header.addClass('js-headerHidden');
        }
        pos = $(this).scrollTop();
    });

    // var btn = 0;
    // var menu = $('.c-header__btnBox');

    // $(window).on('scroll', function () {
    //     if ($(this).scrollTop() < btn) {
    //         menu.removeClass('js-btnHidden');
    //     }else{
    //         menu.addClass('js-btnHidden');
    //     }
    //     btn = $(this).scrollTop();
    // });
});

//メインページがheader部分までスクロールされたら背景色をつけるクラスを付与
$(window).on('scroll', function () {
    if (800 < $(this).scrollTop()) {
        $('.l-header__container').addClass('js-background');
    } else {
        $('.l-header__container').removeClass('js-background');
    }
});

//heroイメージの切り替えアニメーション
$(function(){
    $(".p-hero__slickTrack img:not(:first-child)").hide();
    setInterval(function() {
        $(".p-hero__slickTrack img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".p-hero__slickTrack");
    },3000);
});


$(function(){
    $('.p-hero__slickDots li').eq(0).addClass('js-isActiveColor');
    var i=1;
    setInterval(function(){
        $('.p-hero__slickDots li').removeClass('js-isActiveColor').eq(i).addClass('js-isActiveColor');
        i++;
        if(i>=$('.p-hero__slickDots li').length) i=0;
    },3010);
});

//aboutタイトルの非表示
$(window).on('scroll', function () {
    if (800 < $(this).scrollTop()) {
        $('.p-about__title').addClass('js-textHidden');
    } else {
        $('.p-about__title').removeClass('js-textHidden');
    }
});

//aboutテキスト部分の非表示
$(window).on('scroll', function () {
    if (800 < $(this).scrollTop()) {
        $('.p-about__textBox').addClass('_isActiveSlideLeft');
    } else {
        $('.p-about__textBox').removeClass('_isActiveSlideLeft');
    }
});


//スクロール時に発生するアニメーション
$(function() {
    $(window).on('scroll',function (){
        //リストの項目を時間差で表示する
        $('._scrollBothListUp').each(function(i){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            let delay = 150;
            if (scroll > elemPos - windowHeight){
                $(this).delay(i * delay).queue(function(next){
                    $(this).addClass('js-linkSlideUp');
                    next();
                });
            }
        });

        //リストの項目を時間差で表示する
        $('._linkSlideLeft').each(function(i){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            let delay = 30;
            if (scroll > elemPos - windowHeight){
                $(this).delay(i * delay).queue(function(next){
                    $(this).addClass('js-linkSlideLeft');
                    next();
                });
            }
        });

        //スライドアップ
        $('._scrollSlideUp').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('_isActiveSlideUp');
            }
        });

        //スライドレフト
        $('._scrollSlideInLeft').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('_isActiveSlideInLeft');
            }
        });

        //ぼかしの取り外し
        $('._scrollBothListUp').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                setTimeout(() => {
                    $(this).removeClass('js-imgBlur');
                },1200);
            }
        });
    });
});


//ナビゲーションメニューをクリックでモーダルの表示切り替え
$(function() {
    $('.c-header__btnBox').on('click',function(){
        $('.c-header__btnBox').toggleClass('js-active');
        $('.l-header__navSp').fadeToggle();
    });
});

$(function() {
    $('.c-header__btnBox').on('click',function(){
        $('.btn_close').toggleClass('js-btnIsActive');
    });
});

$(function() {
    $('.c-header__btnBox').on('click',function(){
        $('.btn_open').toggleClass('js-btnIsaHidden');
    });
});

//
$(window).on('scroll', function () {
    if (800 < $(this).scrollTop() && $(window).width() < 769) {
        $('.p-about__img').addClass('js-textHidden');
    } else {
        $('.p-about__img').removeClass('js-textHidden');
    }
});

//スクロールで画像動かす
// $(window).on('scroll', function(){
//     var scrollTop = $(window).scrollTop();
//     var bgPosition = scrollTop / 2;
    
//     if(bgPosition){
//         $('.p-location__parallaxInner').css('background-position', 'center top -'+ bgPosition + 'px');
//     }
// });

// $(function(){
//     $('.l-header__title h1').midnight();
// });