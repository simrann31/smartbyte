jQuery("#carousel").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 20,

  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 2
    },

    1024: {
      items: 3
    },

    1366: {
      items: 4
    }
  }
});




jQuery(document).ready(function($) {
"use strict";
$('#customers-testimonials').owlCarousel( {
		loop: true,
		center: true,
		items: 3,
		margin: 30,
		autoplay: true,
		dots:true,
    nav:true,
		autoplayTimeout: 4000,
		smartSpeed: 450,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 3
			},
			1170: {
				items: 4
			}
		}
	});
});
