$(document).ready(function(){

    $(".plus").click(function(){
        $(".dietary1").slideToggle(100)
        if($("#cos").attr("src")==="images/OCR-A_char_Plus_Sign.png"){
        
             $("#cos").attr("src","images/OCR-B_char_Plus_Sign.png");    
            } else{
        $("#cos").attr("src","images/OCR-A_char_Plus_Sign.png");
            }
    });
    


    

    $(".ccc").click(function(){
        $(".viewwindow").fadeIn(500);
        $(".window").fadeIn(500);
        $("body").addClass("stopscroll")
    });

    $(".X").click(function(){
        $(".viewwindow").fadeOut(500);
        $(".window").fadeOut(500);
        $("body").removeClass("stopscroll")
    });

    $(".Dietary-Requirements").click(function(){
        $(".fruit_checkbox").slideDown("fast");
        $(".furit_checkbox").slideToggle(10);
    });









    
     /*   
    $(".price").click(function(){
        $(".price").toggleClass("slidelist2")
        $(".slidelist").slideToggle(100);
    });
    

    $(".slidelist").click(function(){
        $(".Slide").toggleClass("slidelist")
        $(".slidelist").toggleClass("display");
        $(".ppp").toggleClass("slidelist");
    });
    */


});



