//Preloader
$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow':'visible'});
})

$(document).ready(function(){
    //Mobile menu toggle
    if ($('.navbar-burger').length) {
        $('.navbar-burger').on("click", function(){

            var menu_id = $(this).attr('data-target');
            $(this).toggleClass('is-active');
            $("#"+menu_id).toggleClass('is-active');
            $('.navbar.is-light').toggleClass('is-dark-mobile')
        });
    }

    //Animate left hamburger icon and open sidebar
    $('.menu-icon-trigger').on("click", function(e){
        e.preventDefault();
        $('.menu-icon-wrapper').toggleClass('open');
        $('.sidebar').toggleClass('is-active');
    });

    //Close sidebar
    $('.sidebar-close').on("click", function() {
        $('.sidebar').removeClass('is-active');
        $('.menu-icon-wrapper').removeClass('open');
    })

    //Sidebar menu
    if ($('.sidebar').length) {
        $(".sidebar-menu > li.have-children > a").on("click", function(i){
            i.preventDefault();
            if( ! $(this).parent().hasClass("active") ){
                $(".sidebar-menu li ul").slideUp();
                $(this).next().slideToggle();
                $(".sidebar-menu li").removeClass("active");
                $(this).parent().addClass("active");
            }
            else{
                $(this).next().slideToggle();
                $(".sidebar-menu li").removeClass("active");
            }
        });
    }

    //Navbar Clone
    if ($('#navbar-clone').length) {
        $(window).on("scroll", function() {    // this will work when your window scrolled.
            var height = $(window).scrollTop();  //getting the scrolling height of window
            if(height  > 50) {
                $("#navbar-clone").addClass('is-active');
            } else{
                $("#navbar-clone").removeClass('is-active');
            }
        });
    }

    //Init feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    //reveal elements on scroll so animations trigger the right way
    var $window           = $(window),
        win_height_padded = $window.height() * 1.1,
        isTouch           = Modernizr.touch;

    $window.on('scroll', revealOnScroll);

    function revealOnScroll() {
        var scrolled = $window.scrollTop();
        $(".revealOnScroll:not(.animated)").each(function () {
            var $this     = $(this),
                offsetTop = $this.offset().top;

            if (scrolled + win_height_padded > offsetTop) {
                if ($this.data('timeout')) {
                    window.setTimeout(function(){
                        $this.addClass('animated ' + $this.data('animation'));
                    }, parseInt($this.data('timeout'),10));
                } else {
                    $this.addClass('animated ' + $this.data('animation'));
                }
            }
        });
    }

    // Back to Top button behaviour
    var pxShow = 600;
    var scrollSpeed = 500;
    $(window).on("scroll", function() {
        if ($(window).scrollTop() >= pxShow) {
            $("#backtotop").addClass('visible');
        } else {
            $("#backtotop").removeClass('visible');
        }
    });
    $('#backtotop a').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, scrollSpeed);
        return false;
    });

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .on("click", function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 550, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    // Image Modal functionality
    console.log('Initializing image modal...');
    
    // Create modal structure if it doesn't exist
    if (!$('#imageModal').length) {
        $('body').append(`
            <div id="imageModal" class="modal">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <p class="image">
                        <img src="" alt="" id="modalImage">
                    </p>
                </div>
                <button class="modal-close is-large" aria-label="close"></button>
            </div>
        `);
        console.log('Image modal created');
    }

    // Click handler for clickable images
    $(document).on('click', '.clickable-image', function(e) {
        e.preventDefault();
        console.log('Image clicked!', this);
        var imgSrc = $(this).attr('data-fullsize') || $(this).attr('src');
        var imgAlt = $(this).attr('alt');
        console.log('Opening image:', imgSrc);
        $('#modalImage').attr('src', imgSrc).attr('alt', imgAlt);
        $('#imageModal').addClass('is-active');
        $('html').addClass('is-clipped');
    });

    // Close modal handlers
    $(document).on('click', '#imageModal .modal-background, #imageModal .modal-close', function() {
        console.log('Closing modal');
        $('#imageModal').removeClass('is-active');
        $('html').removeClass('is-clipped');
    });

    // ESC key to close modal
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && $('#imageModal').hasClass('is-active')) {
            console.log('Closing modal with ESC');
            $('#imageModal').removeClass('is-active');
            $('html').removeClass('is-clipped');
        }
    });
    
    console.log('Image modal initialized. Clickable images found:', $('.clickable-image').length);
})
