$(document).ready(function() {
    var num = 1;
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > num) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }

        if ($(window).scrollTop() > num * 400) {
            $('.navbar').addClass('inview');
        } else {
            $('.navbar').removeClass('inview');
        }


    })

});

$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated animate__backInLeft');
}, {
    offset: '80%'

});

$('.js--wp-1-2').waypoint(function(direction) {
    $('.js--wp-1-2').addClass('animated animate__backInUp');
}, {
    offset: '80%'

});

$('.js--wp-1-3').waypoint(function(direction) {
    $('.js--wp-1-3').addClass('animated animate__backInRight');
}, {
    offset: '80%'

});

$('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated animate__fadeIn');
}, {
    offset: '87%'

});
$('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated animate__fadeIn');
}, {
    offset: '70%'

});
$('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated animate__fadeIn');
}, {
    offset: '60%'

});
$('.js--wp-5').waypoint(function(direction) {
    $('.js--wp-5').addClass('animated animate__fadeIn');
}, {
    offset: '50%'

});
$('.js--wp-6').waypoint(function(direction) {
    $('.js--wp-6').addClass('animated animate__fadeInUp');
}, {
    offset: '80%'

});





filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

$('.products .row .test-popup-link').magnificPopup({
    type: 'image',
    gallery: { enabled: true }
    // other options
});