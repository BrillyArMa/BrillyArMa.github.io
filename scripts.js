$(document).ready(function () {
  // Smooth scrolling for navigation links
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    var target = $(this.hash);
    $("html, body").animate(
      {
        scrollTop: target.offset().top - 60,
      },
      500,
    );
  });
});
