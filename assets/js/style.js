var owl = $(".owl-carousel");
owl.owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 2,
    },
    475: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 7,
    },
  },
});
// class="owl-carousel owl-theme"
// class="item"