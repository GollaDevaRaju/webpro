// $(document).ready(function(){
//     $(".video").hover(function(){
//         $(this).css("background-color", "#4399fa");
//         $(this).css("color","white");
//         $(this).css("border-color","#4399fa");
//     }, function(){
//         $(this).css("background-color", "darkblue");
//         $(this).css("border-color","darkblue");
//     })
//     $(".know").hover(function(){
//         $(this).css("background-color", "darkblue");
//         $(this).css("color","white");
//         $(this).css("border-color","darkblue");
//     }, function(){
//         $(this).css("background-color", "#4399fa");
//         $(this).css("border-color","#4399fa");
//     })
//     $(".dropdown-item").hover(function(){
//         $(this).css("background-color", "#002c73");
//     }, function(){
//         $(this).css("background-color", "#002c73");
//     })
//     $(".cnt").hover(function(){
//         $(this).css("background-color", "#4399fa");
//         $(this).css("color","white");
//         $(this).css("border-color","#4399fa");
//     }, function(){
//         $(this).css("background-color", "darkblue");
//         $(this).css("border-color","darkblue");
//     })
//     $(".foo").hover(function(){
//       $(this).css("border","solid 1px #002d75");
//       $(this).css("background-color","#002d75");
//     },function(){
//       $(this).css("border","solid 1px black");
//       $(this).css("background-color","black");
//     })
//     $('.line5 a').hover(function () {
//       $(this).addClass('scroll');
//       },function () {
//         $(this).removeClass('scroll');
//     });
// });

// $(document).ready(function() {
//     let $carouselItems = $('.text-wrapper');
//     let $indicators = $('.indicators button');
//     let currentIndex = 0;
//     let slideInterval;
//     function showSlide(index) {
//       $carouselItems.removeClass('active');
//       $indicators.removeClass('active');
//       $carouselItems.eq(index).addClass('active');
//       $indicators.eq(index).addClass('active');
//       $('.inner').css('transform', 'translateX(' + (-index * 100) + '%)');
//     }
//     $indicators.on('click', function() {
//       currentIndex = $(this).data('slide-to');
//       showSlide(currentIndex);
//     });
//     function nextSlide() {
//       currentIndex = (currentIndex + 1) % $carouselItems.length;
//       showSlide(currentIndex);
//     }
//     slideInterval = setInterval(nextSlide, 5000);
//     $('.carousel').hover(function() {
//       clearInterval(slideInterval);
//     }, function() {
//       slideInterval = setInterval(nextSlide, 5000);
//     });
//     showSlide(currentIndex);
//   });
  

// // $(document).ready(function() {
// //   let $carouselItems = $('.team-wrapper'); 
// //   let $indicators = $('.indicators1 button');
// //   let currentIndex = 0;
// //   let slideInterval;

// //   function showSlide(index) {
// //     $carouselItems.removeClass('active');
// //     $indicators.removeClass('active');
// //     $carouselItems.eq(index).addClass('active');
// //     $indicators.eq(index).addClass('active');    
// //     $('.inner').css('transform', 'translateX(' + (-index * 100) + '%)');
// //   }
// //   $indicators.on('click', function() {
// //     currentIndex = $(this).data('slide-to');
// //     showSlide(currentIndex);
// //   });
// //   function nextSlide() {
// //     currentIndex = (currentIndex + 1) % $carouselItems.length;
// //     showSlide(currentIndex);
// //   }
// //   slideInterval = setInterval(nextSlide, 5000);
// //   $('.carousel1').hover(function() {
// //     clearInterval(slideInterval);
// //   }, function() {
// //     slideInterval = setInterval(nextSlide, 5000);
// //   });
// //   showSlide(currentIndex);
// // });


// $(document).ready(function(){
//   $('.fa-facebook-f').click(function(){
//     window.location.href='https://www.facebook.com';
//   })
//   $('.fa-linkedin').click(function(){
//     window.location.href='https://www.linkedin.com';
//   })
//   $('.fa-google-plus-g').click(function(){
//     window.location.href='https://www.google.com';
//   });
//   $('.fa-twitter').click(function(){
//     window.location.href='https://www.twitter.com';
//   });
// });

// $(document).ready(function() {
//     $("#play-video-btn").click(function() {
//       $(".pop-video").addClass("active");
//     });
//     $("#close-video").click(function() {
//       $(".pop-video").removeClass("active");
//       var iframe = $("#video-player")[0];
//       var iframeSrc = iframe.src;
//       iframe.src = '';
//       iframe.src = iframeSrc; 
//     });
//     $(".pop-video").click(function(event) {
//       if (event.target === this) {
//         $("#close-video").click(); 
//       }
//     });
//   });


// $(document).ready(function () {
//     var $navLinks = $('nav a');
//     var $sections = $('section');
//     $(window).on('scroll', function () {
//       var scrollPos = $(document).scrollTop();  
//       var windowHeight = $(window).height();
//       var activeSectionId = null;  
//       $sections.each(function () {
//         var $currentSection = $(this);
//         var sectionTop = $currentSection.offset().top; 
//         var sectionBottom = sectionTop + $currentSection.outerHeight(); 
    
//         if (scrollPos + windowHeight / 2 >= sectionTop && scrollPos + windowHeight / 2 < sectionBottom) {
//           activeSectionId = $currentSection.attr('id'); 
//         }
//       });
//       $navLinks.removeClass('active');
//       if (activeSectionId) {
//         $('a[href="#' + activeSectionId + '"]').addClass('active');
//       }
//     });
//     $navLinks.on('click', function (e) {
//       e.preventDefault(); 
//       var targetId = $(this).attr('href');
//       var $targetSection = $(targetId);    
//       $navLinks.removeClass('active');
//       $(this).addClass('active');
//       $('html, body').animate({
//         scrollTop: $targetSection.offset().top - 10 
//       }, 500);
//     });
//   });
  

//   $(document).ready(function () {
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             $(entry.target).toggleClass('scroll', entry.isIntersecting);
//         });
//     });
//     const classesToObserve = ['.line2', '.line3', '.line4'];
//     classesToObserve.forEach(className => {
//         $(className).each(function () {
//             observer.observe(this);
//         });
//     });
// });

// $(document).ready(function () {
//     function fadeInOnScroll() {
//         $('.fade-in, .slide-up, .slide-down').each(function () {
//             const elementTop = $(this).offset().top;
//             const windowBottom = $(window).scrollTop() + $(window).height();
//             if (elementTop < windowBottom - 50) {
//                 $(this).addClass('visible');
//             } else {
//                 $(this).removeClass('visible');
//             }
//         });
//     }
//     fadeInOnScroll();
//     $(window).on('scroll', fadeInOnScroll);
// });






$(document).ready(function () {

    // hovering
    $(".video").hover(function () {
        $(this).css("background-color", "#4399fa");
        $(this).css("color", "white");
        $(this).css("border-color", "#4399fa");
    }, function () {
        $(this).css("background-color", "darkblue");
        $(this).css("border-color", "darkblue");
    });

    $(".know").hover(function () {
        $(this).css("background-color", "darkblue");
        $(this).css("color", "white");
        $(this).css("border-color", "darkblue");
    }, function () {
        $(this).css("background-color", "#4399fa");
        $(this).css("border-color", "#4399fa");
    });

    $(".dropdown-item").hover(function () {
        $(this).css("background-color", "#002c73");
    }, function () {
        $(this).css("background-color", "#002c73");
    });

    $(".cnt").hover(function () {
        $(this).css("background-color", "#4399fa");
        $(this).css("color", "white");
        $(this).css("border-color", "#4399fa");
    }, function () {
        $(this).css("background-color", "darkblue");
        $(this).css("border-color", "darkblue");
    });

    $(".foo").hover(function () {
        $(this).css("border", "solid 1px #002d75");
        $(this).css("background-color", "#002d75");
    }, function () {
        $(this).css("border", "solid 1px black");
        $(this).css("background-color", "black");
    });

    $('.line5 a').hover(function () {
        $(this).addClass('scroll');
    }, function () {
        $(this).removeClass('scroll');
    });

    // Vision carsouel
    let $carouselItems = $('.text-wrapper');
    let $indicators = $('.indicators button');
    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        $carouselItems.removeClass('active');
        $indicators.removeClass('active');
        $carouselItems.eq(index).addClass('active');
        $indicators.eq(index).addClass('active');
        $('.inner').css('transform', 'translateX(' + (-index * 100) + '%)');
    }

    $indicators.on('click', function () {
        currentIndex = $(this).data('slide-to');
        showSlide(currentIndex);
    });

    function nextSlide() {
        currentIndex = (currentIndex + 1) % $carouselItems.length;
        showSlide(currentIndex);
    }

    slideInterval = setInterval(nextSlide, 5000);

    $('.carousel').hover(function () {
        clearInterval(slideInterval);
    }, function () {
        slideInterval = setInterval(nextSlide, 5000);
    });

    showSlide(currentIndex);

    // icons-link
    $('.fa-facebook-f').click(function () {
        window.location.href = 'https://www.facebook.com';
    });

    $('.fa-linkedin').click(function () {
        window.location.href = 'https://www.linkedin.com';
    });

    $('.fa-google-plus-g').click(function () {
        window.location.href = 'https://www.google.com';
    });

    $('.fa-twitter').click(function () {
        window.location.href = 'https://www.twitter.com';
    });

    // pop-up video
    $("#play-video-btn").click(function () {
        $(".pop-video").addClass("active");
    });

    $("#close-video").click(function () {
        $(".pop-video").removeClass("active");
        var iframe = $("#video-player")[0];
        var iframeSrc = iframe.src;
        iframe.src = '';
        iframe.src = iframeSrc;
    });
    $(".pop-video").click(function (event) {
        if (event.target === this) {
            $("#close-video").click();
        }
    });

    // scroll-spy
    var $navLinks = $('nav a');
    var $sections = $('section');
    $(window).on('scroll', function () {
        var scrollPos = $(document).scrollTop();
        var windowHeight = $(window).height();
        var activeSectionId = null;

        $sections.each(function () {
            var $currentSection = $(this);
            var sectionTop = $currentSection.offset().top;
            var sectionBottom = sectionTop + $currentSection.outerHeight();

            if (scrollPos + windowHeight / 2 >= sectionTop && scrollPos + windowHeight / 2 < sectionBottom) {
                activeSectionId = $currentSection.attr('id');
            }
        });

        $navLinks.removeClass('active');
        if (activeSectionId) {
            $('a[href="#' + activeSectionId + '"]').addClass('active');
        }
    });
    $navLinks.on('click', function (e) {
        e.preventDefault();
        var targetId = $(this).attr('href');
        var $targetSection = $(targetId);
        $navLinks.removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $targetSection.offset().top - 10
        }, 500);
    });

    // underlines
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            $(entry.target).toggleClass('scroll', entry.isIntersecting);
        });
    });
    const classesToObserve = ['.line2', '.line3', '.line4'];
    classesToObserve.forEach(className => {
        $(className).each(function () {
            observer.observe(this);
        });
    });

    // animations
    function fadeInOnScroll() {
        $('.fade-in, .slide-up, .slide-down').each(function () {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            if (elementTop < windowBottom - 50) {
                $(this).addClass('visible');
            } else {
                $(this).removeClass('visible');
            }
        });
    }

    fadeInOnScroll();
    $(window).on('scroll', fadeInOnScroll);
});
