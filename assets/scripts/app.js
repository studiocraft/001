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
        var scrollController = new ScrollMagic();
        var titleHeight = $('#titleAnimation').height();
        var titleTween = TweenMax.fromTo('#titleAnimation', 0.8, {css:{ transform: 'scale(0)', opacity: 0 }}, {css:{ transform: 'scale(1)', opacity: 1}});
        var titleScene = new ScrollScene({triggerElement: '#titleScene', offset: titleHeight/2})
          .setClassToggle('body', 'titleScene_active')
          .setTween(titleTween)
          .addTo(scrollController);

        var stadiumTween = TweenMax.staggerFromTo('[data-name="light"]', 0.5, {css:{fill: '#ffffff'}}, {css:{fill: 'transparent'}, repeat: 3, yoyo: true }, 1);
        var stadiumScene = new ScrollScene({triggerElement: '#stadiumScene', offset: -240, duration: 760})
          .setClassToggle('body', 'stadiumScene_active')
          .setTween(stadiumTween)
          .addTo(scrollController);

        var scoreboardTween = TweenMax.fromTo('#scoreboardAnimation', 1.4, {css:{transform: 'translateY(100px)', opacity: 0}}, {css:{transform: 'translateY(0px)', opacity: 1}});
        var scoreboardScene = new ScrollScene({triggerElement: '#scoreboardScene', offset: -120})
          .setClassToggle('body', 'scoreboardScene_active')
          .setTween(scoreboardTween)
          .addTo(scrollController);

        var fiftyYardTween = TweenMax.fromTo('#fiftyYardAnimation', 1.4, {css:{transform: 'translateX(-320px)', opacity: 0}}, {css:{transform: 'translateX(0px)', opacity: 1}});
        var fiftyYardScene = new ScrollScene({triggerElement: '#fiftyYardScene', offset: -120})
          .setClassToggle('body', 'fiftyYardScene_active')
          .setTween(fiftyYardTween)
          .addTo(scrollController);

        var voiceGuyTween = new TimelineMax();
        voiceGuyTween.add([
          TweenMax.staggerFromTo('[data-name="comment"]', 0.5, {css:{fill: 'transparent'}}, {css:{fill: '#ffffff'}, repeat: 0 }, 0.2),
          TweenMax.fromTo('#voiceGuyAnimation', 0.8, { css:{transform: 'translateX(420px)', opacity: 0}}, {css:{transform: 'translateX(0px)', opacity: 1}})
        ]);
        var voiceGuyScene = new ScrollScene({ triggerElement: '#voiceGuyScene', offset: 80})
          .setClassToggle('body', 'voiceGuyScene_active')
          .setTween(voiceGuyTween)
          .addTo(scrollController);

        var thirtyYardTween = TweenMax.fromTo('#thirtyYardAnimation', 1.4, {css:{transform: 'translateY(240px)', opacity: 0}}, {css:{transform: 'translateY(-120px)', opacity: 1}});
        var thirtyYardScene = new ScrollScene({triggerElement: '#thirtyYardScene', offset: -240})
          .setClassToggle('body', 'thirtyYardScene_active')
          .setTween(thirtyYardTween)
          .addTo(scrollController);

          var brainGuyTween = new TimelineMax();
          brainGuyTween.add([
            TweenMax.staggerFromTo('[data-name="lightbulb"]', 0.4, {css:{opacity: '0'}}, {css:{opacity: '1'}, repeat: 0 }, 0.2),
            TweenMax.fromTo('#brainGuyAnimation', 0.8, { css:{transform: 'translateX(420px)', opacity: 0}}, {css:{transform: 'translateX(0px)', opacity: 1}})
          ]);
          var brainGuyScene = new ScrollScene({ triggerElement: '#brainGuyScene', offset: 80})
            .setClassToggle('body', 'brainGuyScene_active')
            .setTween(brainGuyTween)
            .addTo(scrollController);

          var heartGuyTween = new TimelineMax();
          heartGuyTween.add([
            TweenMax.fromTo('[data-name="heart"]', 0.8, {css:{strokeWidth: '1rem', stroke: '#FF4338'}}, {css:{strokeWidth: '0', stroke: '#FF4338'}, repeat: -1, yoyo: true }, 1),
            TweenMax.fromTo('#heartGuyAnimation', 0.8, { css:{transform: 'translateX(420px)', opacity: 0}}, {css:{transform: 'translateX(0px)', opacity: 1}})
          ]);
          var heartGuyScene = new ScrollScene({ triggerElement: '#heartGuyScene', offset: 80})
            .setClassToggle('body', 'heartGuyScene_active')
            .setTween(heartGuyTween)
            .addTo(scrollController);

        //
        // var lightBulbTween = TweenMax.fromTo('[data-name="comment"]', 0.8, { css:{transform: 'scale(1)', opacity: 0}}, {css:{transform: 'scale(1)', opacity: 1}});
        // var lightBulbScene = new ScrollScene({ triggerElement: '#lightBulbScene', offset: 320, duration: 360})
        //   .setClassToggle('body', 'brainScene_active')
        //   .setTween(lightBulbTween)
        //   .addTo(scrollController);
        //
        var tenYardTween = TweenMax.fromTo('#tenYardAnimation', 1.4, {css:{transform: 'translateY(240px)', opacity: 0}}, {css:{transform: 'translateY(-120px)', opacity: 1}});
        var tenYardScene = new ScrollScene({triggerElement: '#tenYardScene', offset: -240})
          .setClassToggle('body', 'tenYardScene_active')
          .setTween(tenYardTween)
          .addTo(scrollController);
        //
        // var heartGuyTween = TweenMax.fromTo('#heartGuyAnimation', 0.8, { css:{transform: 'translateX(0px) scale(1)', opacity: 1}}, {css:{transform: 'translateX(-420px) scale(.5)', opacity: 0}});
        // var heartGuyScene = new ScrollScene({ triggerElement: '#heartGuyScene', offset: 320, duration: 360})
        //   .setClassToggle('body', 'heartGuyScene_active')
        //   .setTween(heartGuyTween)
        //   .addTo(scrollController);
        //
        // var heartBeatTween = TweenMax.fromTo('#heartBeatAnimation', 0.8, { css:{transform: 'translateX(0px) scale(1)', opacity: 1}}, {css:{transform: 'translateX(-420px) scale(.5)', opacity: 0}});
        // var heartBeatScene = new ScrollScene({ triggerElement: '#heartBeatScene', offset: 320, duration: 360})
        //   .setClassToggle('body', 'heartBeatScene_active')
        //   .setTween(heartBeatTween)
        //   .addTo(scrollController);

        // Add debug indicators fixed on right side
        titleScene.addIndicators();
        stadiumScene.addIndicators();
        scoreboardScene.addIndicators();
        fiftyYardScene.addIndicators();
        voiceGuyScene.addIndicators();
        thirtyYardScene.addIndicators();
        brainGuyScene.addIndicators();
        tenYardScene.addIndicators();
        heartGuyScene.addIndicators();
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
