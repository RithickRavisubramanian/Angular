var images = ["img1.jpg","img2.jpg","img3.jpg"];
        var currentIndex = 0;
        var slideshow = document.getElementById("slideshow");
        setInterval(function() {
            slideshow.src = images[currentIndex];
            currentIndex = (currentIndex + 1) % images.length;
        }, 2000);