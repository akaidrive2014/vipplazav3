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

});