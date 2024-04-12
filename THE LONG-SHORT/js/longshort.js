
// Responsive navbar

$(document).ready(function(){
    $(".menu_icon").click(function() {
        $(".ls-navlinks").toggleClass('responsive_menu_active');
    });
});


// Ls-tab

function TabItems(event, tabList){

    var tabContent= document.getElementsByClassName("ls-feature-tabcontent");

    for(let i=0; i<tabContent.length; i++){
        tabContent[i].style.display="none";
    }

    var tabLinks=document.getElementsByClassName("ls-feature-tablink");

    for(let i=0; i<tabLinks.length; i++){
        tabLinks[i].className=tabLinks[i].className.replace("ls_feature-active", "");
    }

    document.getElementById(tabList).style.display= "block";

    event.currentTarget.className += " ls_feature-active";

}

document.getElementById("defaultTab").click();


// product-slider

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
  });
