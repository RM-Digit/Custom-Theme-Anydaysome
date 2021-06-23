jQuery(document).ready(function ($) {
    if( $(window).width() < 780 ) {
        console.log("is mobile device")
        $("div#shopify-section-static-product-recommendations").insertBefore("div.yotpo.yotpo-main-widget");
        $('.product-grid-container').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            nextArrow: $('.mobile-carousel__pagination-arrow.mobile-carousel__pagination-arrow--prev'),
            prevArrow: $('.mobile-carousel__pagination-arrow.mobile-carousel__pagination-arrow--next'),
          }); 
           $('.custom.collection-products').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            nextArrow: $('.related-mobile-carousel__pagination-arrow.related-mobile-carousel__pagination-arrow--prev'),
            prevArrow: $('.related-mobile-carousel__pagination-arrow.related-mobile-carousel__pagination-arrow--next'),
          });
    } else {
          $("div#shopify-section-static-product-recommendations").insertBefore("div.yotpo.yotpo-main-widget");
    }



   $(".product-form-submit-wrap>.button,a.cart-link").click(()=>{
    console.clear();
    $( "div" ).remove( ".slidecart_item" );
    console.log("sssss",$("div#slidecarthq .items .quantity-selector>input").val())
    var isQualified =  false;
    if($("div#slidecarthq .items").length == 0 )isQualified = false;
    else if ($("div#slidecarthq .items").length >1) isQualified = true;
    else {
        if($("div#slidecarthq .items .quantity-selector>input").val() !== "0") isQualified = true;
        else isQualified = false;
    }
    var shippingMessage= "<div class='slidecart_item'>You qualify for FREE shipping</div>";

    var discountMessage = !isQualified? "<div class='slidecart_item'>You are one t-shirt away from 20% off your entire order</div>":"<div class='slidecart_item'>you qualify for 20% off your entire order</div>";
    $("<div class='slidecart_msg_container'>"+shippingMessage+discountMessage+"</div>").insertAfter("div#slidecarthq .header")
   })

    // $("input[type=radio][name=option-0]").change(function(){
    //     var value = $.trim($(this).val());
    //     $(".product-select>option").each(function(){
    //        const selected = $.trim($(this).text());
    //        console.log("value", value, "selected", selected)
    //        if(value == selected) $(this).attr("selected","selected");
    //        else $(this).attr("selected",false);
    //     })
    // });

});