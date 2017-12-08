$(document).ready(function() {
    
function randomImage() {
    
    var images = ["work/travel/1.jpg", "work/travel/2.jpg", "work/travel/3.jpg", "work/travel/4.jpg", "work/travel/6.jpg", "work/travel/7.jpg", "work/travel/8.jpg", "work/travel/9.jpg", "assets/homepage-10.jpg", "assets/homepage-11.jpg", "work/travel/10.jpg", "assets/homepage-13.jpg", "work/travel/11.jpg", "work/travel/12.jpg",  "work/travel/14.jpg", "work/travel/18.jpg", "work/travel/19.jpg","work/london/1.jpg", "work/london/2.jpg", "work/london/3.jpg", "work/london/4.jpg", "work/london/5.jpg", "work/london/7.jpg", "work/london/8.jpg", "work/london/9.jpg", "work/london/10.jpg", "work/london/11.jpg", "work/london/12.jpg", "work/london/14.jpg", "work/london/15.jpg","work/london/16.jpg", "assets/homepage-6.jpg", "assets/homepage-7.jpg", "assets/homepage-9.jpg"];
    
    return images[Math.floor(Math.random() * images.length)];
}
    
    $("#leftImg").attr('src', randomImage());
     
    $("#rightImg").attr('src', randomImage());

//    $(".fade").css('opacity', '0') 
    
    $("#leftZone").mouseover (function(){
    
        $("#leftImg").fadeTo("slow" , "1");
        
        $("#rightImg").css("opacity", "0");
            
            $("#rightImg").attr('src', randomImage());
        
        $("#about").css('color', 'black').css('font-weight', '200').css('text-shadow', '0px 0px #000000');
        
        $("#work").delay( 2000 ).css('color', 'white').css('font-weight','700').css('text-shadow', '1px 1px #505050');
        
        
    });
    
    $("#rightZone").mouseover (function(){
       
        $("#rightImg").fadeTo("slow", "1");
        
        $("#leftImg").css("opacity", "0");
        
            $("#leftImg").attr('src', randomImage());
        
        $("#work").css('color', 'black').css('font-weight', '200').css('text-shadow', '0px 0px #000000');
        
        $("#about").delay( 2000 ).css('color', 'white').css('font-weight','700').css('text-shadow', '1px 1px #505050');
        
        
//        make left img random
    
        
    });
    
    
    });