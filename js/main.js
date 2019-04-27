

function main() {

(function () {
  
    /*====================================
    Preloader image
    ======================================*/
    $(document).ready( function() {
      $("#status").delay(3000).fadeOut('slow');
      $('#preloader').delay(3000).fadeOut('slow');
    });


///////////////////////////////////////////////////////////////////////////////////////////////////


    $('.myLinkToTop').click(function () {
        $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        return false;
    });
    

///////////////////////////////slider for city////////////////////////////////////




    $(document).ready( function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        autoplayHoverPause: true,
        nav:true,
        responsive:{
            0:{
                items:1
            },

            200:{
                items:2
            },

            300:{
                items:2.5,
                autoplay: true,
                autoPlaySpeed: 5000,
            },
            600:{
                items:2.5
            },
            1000:{
                items:2.75
            },

            1024:{
                items:2.75
            }
        }
    })
    });

    ////////////////////////////////////start Rating function////////////////

    $(document).ready(function(){
        $('.customer-logos').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }]
        });
    });

}());





}
main();

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



function toggeleShow() {
    var x = document.getElementById("searchInput");
    var next=document.getElementById("nextSearch");
    if (x.style.display === "none") {
        x.style.display = "block";
        next.style.top="-35px";
    } else {
        x.style.display = "none";
        next.style.top="0px";
    }
}



function closeSearch() {
    document.getElementById("searchInput").style.display="none";
    document.getElementById("nextSearch").style.top="0px";
}


///////////////////////////////////////////////////////////////////////

var x=false;




var button = document.getElementById('searchBtn'); // Assumes element with id='button'

button.onclick = function() {
    var div = document.getElementById('allIcons');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};


///////////////////////////////////////////////////////////////////////////////////////////
// Slide Show activites//

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }









