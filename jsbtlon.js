
window.onscroll = function(){
    console.info(document.documentElement.scrollTop);
    var header = document.getElementById("myhead");
    var gototop = document.getElementById("gototop")
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.style.position = "fixed";
        header.style.left = 0;
        header.style.right = 0;
        header.style.backgroundColor = "rgb(255 ,255 ,255, 0.8)";
        header.style.zIndex = 9999;
        header.style.width = "100%";    
        
        gototop.style.display = "block";
    } else {
        header.style.position = "relative";
        header.style.backgroundColor = "rgb(255 ,255 ,255)";
        header.style.width = "80%";
        gototop.style.display = "none";
    }
}


function goToTop() {
    var timer = setInterval(function() {
        document.documentElement.scrollTop-=10;

        if (document.documentElement.scrollTop <= 0)
            clearInterval(timer);
    }, 1);
}

/*JS slide hinhf anh*/
        var i=0;
        var image= [];
        var time = 1000;

        //image list
        image[0] = 'images/anh1.jpg';
        image[1] = 'images/anh2.jpg';
        image[2] = 'images/anh3.jpg';

        // change image
        function changeimage(){

            document.slide.src = image[i];

            if (i < image.length - 1){
                i++
            } else  {
                i = 0;
            }
            setTimeout("changeimage()", time);
        }

        window.onload = changeimage;

 
    

