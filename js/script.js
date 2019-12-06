$(document).ready(()=> {
    
    var slideIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("int");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) { slideIndex = 1 }
        x[slideIndex - 1].style.display = "block";
        setTimeout(carousel, 4500);
    }
    //  

    var myIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var x = document.getElementsByClassName("slide");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) { myIndex = 1 }
        x[myIndex - 1].style.display = "block";
        setTimeout(showSlides, 7000); // Change image every  seconds
    }
       


        var flipIndex = 0;
        flipSlides();

        function flipSlides() {
            var i;
            var x = document.getElementsByClassName("fli");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            flipIndex++;
            if (flipIndex > x.length) { flipIndex = 1 }
            x[flipIndex - 1].style.display = "inline-block";
            setTimeout(flipSlides, 3000); // Change image every  seconds
        }
});