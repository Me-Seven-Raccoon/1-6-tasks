(function() {
  'use strict';
  const breakpoint = window.matchMedia( '(min-width:768px)' );
  let mySwiper;
  const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {
      if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
      return;
    } else if ( breakpoint.matches === false ) {
      return enableSwiper();
    }
  };
  const enableSwiper = function() {
    mySwiper = new Swiper ('.swiper', {
      slidesPerView: 1.2,
      spaceBetween: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();

(function() {
  'use strict';
  const breakpointTo = window.matchMedia( '(min-width:768px)' );
  let mySwiper;
  const breakpointCheckers = function() {
    if ( breakpointTo.matches === true ) {
      if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
      return;
    } else if ( breakpointTo.matches === false ) {
      return enableSwiper();
    }
  };
  const enableSwiper = function() {
    mySwiper = new Swiper ('.swiper-to', {
      slidesPerView: 1.2,
      spaceBetween: 1,
      pagination: {
        el: '.swiper-pagination-to',
        clickable: true,
      },
    });
  };
  breakpointTo.addListener(breakpointCheckers);
  breakpointCheckers();
})();

(function() {
  'use strict';
  const breakpointHe = window.matchMedia( '(min-width:768px)' );
  let mySwipers;
  const breakpointCheckerss = function() {
    if ( breakpointHe.matches === true ) {
      if ( mySwipers !== undefined ) mySwipers.destroy( true, true );
      return;
    } else if ( breakpointHe.matches === false ) {
      return enableSwipers();
    }
  };
  const enableSwipers = function() {
    mySwipers = new Swiper ('.swiper-the', {
      slidesPerView: 1.2,
      spaceBetween: 1,
      pagination: {
        el: '.swiper-pagination-the',
        clickable: true,
      },
    });
  };
  breakpointHe.addListener(breakpointCheckerss);
  breakpointCheckerss();
})();
