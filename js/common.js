jQuery(function($){
    $(".hover-freeshipping").mouseover(function(){
        $(".c-freeshipping").show().mouseover(function(){
            $(this).show();
        });
    });
    $(".hover-freeshipping").mouseout(function(){
        if($(".c-freeshipping").is(":visible")){
            $(".c-freeshipping").hide();
        }
    });
    $(".c-freeshipping").mouseout(function(){
        if($(".c-freeshipping").is(":visible")){
            $(".c-freeshipping").hide();
        }
    });

    /*banner tab promo header*/
    $(".banner-promo-tab .tab-header li a").click(function(){
        var titleTab = $(this).attr('def');
        $(".banner-promo-tab .tab-header li a").removeClass('active');
        $(this).addClass('active');
        $(".tab-content .content").hide();
        $(".tab-content #"+titleTab).show();
        return false;
    });

    /*box event hover*/
    $(".box.event .image").mouseover(function(){
        var ovId = $(this).attr('def');
        $("#"+ovId).show();
    });
    $(".box.event .image").mouseout(function(){
        $(".overlayer-shop").hide();
    });
    /*/box event hover*/

    /*product-filter-panel*/
    $(".filter-point h1").click(function(){
        var chilFilterLvl1 = $(this).attr('def');
        if($("#"+chilFilterLvl1).is(":visible")){
            $("#"+chilFilterLvl1).slideUp();
            $(this).find("i").addClass('glyphicon-plus');
            $(this).find("i").removeClass('glyphicon-minus');
        }else{
            $("#"+chilFilterLvl1).slideDown();
            $(this).find("i").removeClass('glyphicon-plus');
            $(this).find("i").addClass('glyphicon-minus');
        }
    });
    /*product-filter-panel*/

    /*floating filter*/
    var topPosition = 0;
    $(window).scroll(function() {
        console.log($(window).scrollTop());
        //console.log(parseInt($('.footer-wrapper').offset().top - $(window).scrollTop()));

        if($(window).scrollTop() + $('.filter-box').offset() == $('.footer-wrapper').offset()) {
            //console.log('baratum');
        }
        /*if(($('.footer-wrapper').offset().top - $(window).scrollTop())>599){
            $(".filter-box").removeClass('fixestatic');
            $(".filter-box").addClass('fixed');
        }*/
        /*if(($('.footer-wrapper').offset().top - $(window).scrollTop())<573){
            $(".filter-box").removeClass('fixed');
            $(".filter-box").addClass('fixestatic');
        }*/
        if($(window).scrollTop() >= 1103){
            console.log('xxxxxxxxxxx');
            $(".filter-box").removeClass('fixed');
            $(".filter-box").addClass('fixestatic');
        }else if($(window).scrollTop() >= 181) {
            console.log('tttesssssst');
            //console.log($(window).scrollTop());
            $(".filter-box").addClass('fixed');
            $(".filter-box").removeClass('fixestatic');
        }else if($(window).scrollTop()<=181){
            $(".filter-box").removeClass('fixed');
            $(".filter-box").removeClass('fixestatic');
        }

    });
    /*/floating filter*/

    /* dropdown hover menu */
    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').show();
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').hide();
        }
    );
    /* /dropdown hover menu */

    /* click share */
    $('#txt-share').popover({
        html : true,
        container : '#txt-share',
        trigger: 'hover',
        content : function(){
            return $('#share-content').html();
        },
        template : '<div class="popover" role="tooltip"><div class="popover-content"></div></div>'

    });

});