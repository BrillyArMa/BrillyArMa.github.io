$(document).ready(function(){
    // You can add jQuery functionality here if needed.
    // Example: Smooth scrolling for anchor links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800); // The number here represents the speed of the scroll in milliseconds.
    });
});
