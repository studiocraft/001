/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Script = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages
        var scrollMagicController = new ScrollMagic();

        var titleTween = TweenMax.to('#titleAnimation', 0.8, {
          opacity: 1,
          scale: 1,
        });
        var titleScene = new ScrollScene({
          triggerElement: '#titleScene',
            offset: 240
        })
        .setClassToggle('body', 'titleScene_active')
        .setTween(titleTween)
        .addTo(scrollMagicController);

        var stadiumTween = TweenMax.to('#stadiumAnimation', 0.4, {
          opacity: 1
        });

        var flashTween = TweenMax.staggerFromTo('[data-name="light"]', 0.5, {
          fill: '#ffffff'
        },
        {
          fill: 'transparent',
          repeat: 3,
          yoyo: true
        },
          1
        );

        var stadiumScene = new ScrollScene({
          triggerElement: '#stadiumScene',
          offset: -180,
          duration: 460
        })
        .setClassToggle('body', 'stadiumScene_active')
        .setTween(flashTween)
        .addTo(scrollMagicController);

        var scoreboardTween = TweenMax.fromTo('#scoreboardAnimation', 1.4, {
          css:{
            transform: 'translateY(100px)',
            opacity: 0
          }
        },
        {
          css:{
            transform: 'translateY(0px)',
            opacity: 1
          }
        });

        var scoreboardScene = new ScrollScene({
          triggerElement: '#scoreboardScene',
          offset: -100,
        })
        .setClassToggle('body', 'scoreboardScene_active')
        .setTween(scoreboardTween)
        .addTo(scrollMagicController);
        // Add debug indicators fixed on right side
        titleScene.addIndicators();
        stadiumScene.addIndicators();
        scoreboardScene.addIndicators();
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired

      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page

      },
      finalize: function() {

      }
    },
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Script;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
