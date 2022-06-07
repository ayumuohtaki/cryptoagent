jQuery(document).on("click", ".openbtn8" ,function () {
    $(this).toggleClass('active');
})
   


  jQuery(function(){
    jQuery("nav").hide();
    jQuery(document).on("click",".menubtn" ,function(){//メニューボタンをクリックしたとき
        $("nav").slideToggle(300);//0.3秒で表示したり非表示にしたりする
    });
});
  

// jQuery('.zoomInClickTrigger').on('click', function() {
//     $(this).addClass('zoomIn2');
//   })
  
//   jQuery('.news-item').on('click', function() {
//     $(this).addClass('fadeUp2');
//   })
  
  
//   jQuery('.zoomInClickTrigger').on('mouseenter', function() {
//     $(this).addClass('zoomIn');
//   })
//   jQuery('.zoomInClickTrigger').on('mouseenter', function() {
//     $(this).removeClass('zoomOut');
//   })
  
  
//   jQuery('.zoomInClickTrigger').on('mouseleave', function() {
//     $(this).addClass('zoomOut');
//   })
//   jQuery('.zoomInClickTrigger').on('mouseleave', function() {
//     $(this).removeClass('zoomIn');
//   });
  
  jQuery(window).scroll(function (){
    jQuery('.right').each(function(){
        var elemPos = $(this).offset().top-0.1;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeRight');
        }else{
        $(this).removeClass('fadeRight');
        }    });
  });
  jQuery(window).scroll(function (){
    jQuery('.left').each(function(){
        var elemPos = $(this).offset().top-0.1;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeLeft');
        }else{
        $(this).removeClass('fadeLeft');
        }    });
  });
  
  jQuery('.job-1').slick({
    
  
    autoplay: false, //自動でスクロール
      autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
      speed: 300, //スライドが流れる速度を設定
      cssEase: "linear", //スライドの流れ方を等速に設定
      slidesToShow: 2, //表示するスライドの数
      swipe: true, // 操作による切り替えはさせない
      arrows: false, //矢印非表示
      pauseOnFocus: true, //スライダーをフォーカスした時にスライドを停止させるか
      pauseOnHover: true, //スライダーにマウスホバーした時にスライドを停止させるか
      centerMode: true,
      centerPadding: '10%',
      dots: true,
      
    responsive: [
      {
          breakpoint: 1200,
          settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: '0%',
          speed: 300,
      }}
  ]
  });

  jQuery(window).scroll(function (){
    jQuery('.right').each(function(){
        var elemPos = $(this).offset().top-0.1;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeRight');
        }else{
        $(this).removeClass('fadeRight');
        }    });
  });

  jQuery(window).scroll(function (){
    jQuery('.right').each(function(){
        var elemPos = $(this).offset().top-0.1;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeRight');
        }else{
        $(this).removeClass('fadeRight');
        }    });
  });

  jQuery(window).scroll(function (){
    jQuery('.mission-text-1').each(function(){
        var elemPos = $(this).offset().top-0.1;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeIn-1');
        }else{
        $(this).removeClass('fadeIn-1');
        }    });
  });

  jQuery(window).scroll(function (){
    jQuery('.mission-text-2').each(function(){
        var elemPos = $(this).offset().top-0.1;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeIn-2');
        }else{
        $(this).removeClass('fadeIn-2');
        }    });
  });

  jQuery(window).scroll(function (){
    jQuery('.mission-text-3').each(function(){
        var elemPos = $(this).offset().top-0.1;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeIn-3');
        }else{
        $(this).removeClass('fadeIn-3');
        }    });
  });