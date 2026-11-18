$(function () {
        // hamburger menu
        const $menu = $("#nav-menu"),
          $toggle = $("#nav-toggle");
        const setMenu = (open) => {
          $menu.toggleClass("open", open);
          $toggle
            .attr("aria-expanded", open)
            .find("i")
            .toggleClass("fa-bars", !open)
            .toggleClass("fa-times", open);
        };
        $toggle.on("click", () => setMenu(!$menu.hasClass("open")));
        $(document).on("click", (e) => {
          if (!$(e.target).closest("#site-nav").length) setMenu(false);
        });
        $(document).on("keydown", (e) => {
          if (e.key === "Escape") setMenu(false);
        });
        $(window).on("resize", () => {
          if (window.innerWidth >= 1024) setMenu(false);
        });
      });
