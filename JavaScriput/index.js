
window.onload = function() {
    luxy.init();
}


// ページがロードされたら要素をフェードインさせる
$(window).on('load',function(){
    setTimeout(function(){
		$('.l-header__title, .l-header__nav, .p-hero__wrapper').fadeIn(1000);
	},1500);
});


//スクロール時ページの背景色によってヘッダーの文字色変更
$(window).on('scroll', function () {
    if (760 < $(this).scrollTop()) {
        $('.l-header__title').addClass('js-textColor');
    } else {
        $('.l-header__title').removeClass('js-textColor');
    }
});

$(window).on('scroll', function () {
    if (760 < $(this).scrollTop()) {
        $('.l-header__navLink').addClass('js-textColor');
    } else {
        $('.l-header__navLink').removeClass('js-textColor');
    }
});

$(window).on('scroll', function () {
    if (760 < $(this).scrollTop()) {
        $('.c-header__btnBox').addClass('js-textColor');
    } else {
        $('.c-header__btnBox').removeClass('js-textColor');
    }
});

//スクロール時ページの背景色によって画像の色を変更
$(window).on('scroll', function () {
    if (700 < $(this).scrollTop()) {
        $('.l-header__logoDeepBlue').addClass('js-logoImg');
    } else {
        $('.l-header__logoDeepBlue').removeClass('js-logoImg');
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
    //スクロールでヘッダー部分非表示
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

    $(window).on('scroll',function (){

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
    });

    //リストの項目を下から上に時間差で表示する
    $(window).on('scroll resize', function() {
        var setHeight = 100;
        var wHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        $('._scrollBothListUp').each(function() {
            var targetPosition = $(this).offset().top;
            if(scrollTop > targetPosition - wHeight + setHeight) {
                $(this).addClass('show');

            }
        });

        //リストの項目を左から右に時間差で表示する
        var setHeight = 100;
        var wHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        $('._linkSlideLeft').each(function() {
            var targetPosition = $(this).offset().top;
            if(scrollTop > targetPosition - wHeight + setHeight) {
                $(this).addClass('show');

            }
        });

        //ぼかしの取り外し
        var setHeight = 100;
        var wHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        $('.js-imgBlur').each(function() {
            var targetPosition = $(this).offset().top;
            if(scrollTop > targetPosition - wHeight + setHeight) {
                setTimeout(() => {
                    $(this).addClass('addBlur');
                },1000);
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