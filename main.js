 function() {
   
    var randomImg = ["assets/homepage-1.jpg", "assets/homepage-2.jpg", "assets/homepage-3.jpg", "assets/homepage-4.jpg"];
    
    $("#leftImage").css({'background-image': 'url(http://mirthandco.com/faces/' + images[Math.floor(Math.random() * images.length)] + ')'});
    var whatPicture = Math.floor(Math.random() * homepagePics.length);
    
});
    
 function leftImg() {
    
    document.getElementById("LeftRandomImage").src= homepagePics[whatPicture];
    
    
    
};

function rightImg() {
    document.getElementById("RightRandomImage").src= homepagePics[whatPicture];
    
};
/*
  //  $(".LeftHalf").mouseenter(
    
        $("#LeftRandomImage").attr("src", homepagePics[whatPicture]);
    
    );
    
    $(".LeftHalf").mouseleave (
    
        var whatPicture = Math.floor(Math.random() * homepagePics.length);
    );
    
    $(".RightHalf").mouseenter (
    
        $("#RightRandomImage").attr("src", homepagePics[whatPicture]);
    );
    
    $(".RightHalf").mouseleave (
    
        var whatPicture = Math.floor(Math.random() * homepagePics.length);
    );
    
    
    
});
*/