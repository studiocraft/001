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
          window.onload = function () {
          var windowElement = $('html');
          var bodyElement = $('body');
          var loaderOverlay = document.getElementById('loaderOverlay');
            if (loaderOverlay && loaderOverlay.parentNode && loaderOverlay.parentNode.nodeType === 1) {
              loaderOverlay.parentNode.removeChild(loaderOverlay);
              loaderOverlay = null;
              windowElement.removeClass('locked');
              bodyElement.addClass('animated fadeIn');
            }
          };
          var scrollController = new ScrollMagic.Controller();
          var windowHeight = $(window).height();

          var introSceneHeight = $('#introAnimation').height();
          var introTextTween = new TimelineMax();
          introTextTween.staggerFromTo('#intro > text', 0.1, {opacity: 0}, {opacity: 1}, 0.1)
            .fromTo('#ball', 0.8, {scale: 0, opacity: 0}, {scale: 1, opacity: 1})
            .fromTo('#subTitle', 0.2, {opacity: 0}, {opacity: 1});
          var introScene = new ScrollMagic.Scene({triggerElement: '#introScene', offset: introSceneHeight/2, duration: introSceneHeight/2})
            .setClassToggle('body', 'introTextScene_active')
            .setPin('#introScene', {pushFollowers: true})
            .setTween(introTextTween)
            .addTo(scrollController);
          introScene.addIndicators({name:'Intro - Offset: '+ introSceneHeight/2 +'px'});

          var stadiumSceneHeight = $('#stadiumScene').height();
          var stadiumTween = TweenMax.staggerFromTo('[data-name="light"]', 0.5, {css:{fill: '#ffffff'}}, {css:{fill: 'transparent'}, repeat: 4, yoyo: true}, 1);
          var stadiumScene = new ScrollMagic.Scene({triggerElement: '#stadiumScene', offset: -stadiumSceneHeight/2, duration: stadiumSceneHeight*2})
            .setClassToggle('body', 'stadiumScene_active')
            .setTween(stadiumTween)
            .addTo(scrollController);
          stadiumScene.addIndicators({name:'Stadium - Offset: -'+ stadiumSceneHeight/2 +'px'});

          var scoreboardSceneHeight = $('#scoreboardScene').height();
          var scoreboardTween = TweenMax.fromTo('#scoreboardAnimation', 1.4, {css:{transform: 'translateY(100px)', opacity: 0}}, {css:{transform: 'translateY(0)', opacity: 1}});
          var scoreboardScene = new ScrollMagic.Scene({triggerElement: '#scoreboardScene', offset: -scoreboardSceneHeight/4})
            .setClassToggle('body', 'scoreboardScene_active')
            .setTween(scoreboardTween)
            .addTo(scrollController);
          scoreboardScene.addIndicators({name:'Scoreboard - Offset: '+ scoreboardSceneHeight/4 +'px'});

          var fiftyYardSceneHeight = $('#fiftyYardScene').height();
          var fiftyYardTween = new TimelineMax();
          fiftyYardTween.fromTo('#fiftyYardTextAnimation', 0.8, {css:{transform: 'translateX(-100px)', opacity: 0}}, {css:{transform: 'translateX(0)', opacity: 1}})
            .fromTo('#voiceGuyAnimation', 0.4, { css:{transform: 'translateX(100px)', opacity: 0}}, {css:{transform: 'translateX(0)', opacity: 1}})
            .staggerFromTo('[data-name="comment"]', 0.8, {css:{fill: 'transparent'}}, {css:{fill: '#ffffff'}, repeat: 0 }, 0.2);
          var fiftyYardScene = new ScrollMagic.Scene({ triggerElement: '#fiftyYardScene', offset: 0})
            .setClassToggle('body', 'fiftyYardScene_active')
            .setTween(fiftyYardTween)
            .addTo(scrollController);
          fiftyYardScene.addIndicators({name:'Fifty Yard - Offset: '+ 0 +'px'});

          var thirtyYardSceneHeight = $('#thirtyYardScene').height();
          var thirtyYardTween = new TimelineMax();
          thirtyYardTween.fromTo('#thirtyYardTextAnimation', 0.8, {css:{transform: 'translateX(-100px)', opacity: 0}}, {css:{transform: 'translateX(0)', opacity: 1}})
            .fromTo('#brainGuyAnimation', 0.8, { css:{transform: 'translateX(100px)', opacity: 0}}, {css:{transform: 'translateX(0)', opacity: 1}})
            .staggerFromTo('[data-name="lightbulb"]', 0.2, {css:{opacity: '0'}}, {css:{opacity: '1'}, repeat: 0 }, 0.1);
          var thirtyYardScene = new ScrollMagic.Scene({ triggerElement: '#thirtyYardScene', offset:0})
            .setClassToggle('body', 'thirtyYardScene_active')
            .setTween(thirtyYardTween)
            .addTo(scrollController);
          thirtyYardScene.addIndicators({name:'Thirty Yard - Offset: '+ 0 +'px'});

          var tenYardSceneHeight = $('#tenYardScene').height();
          var tenYardTween = new TimelineMax();
          tenYardTween.fromTo('#tenYardTextAnimation', 0.8, {css:{transform: 'translateX(-100px)', opacity: 0}}, {css:{transform: 'translateX(0)', opacity: 1}})
            .fromTo('#heartGuyAnimation', 0.8, { css:{transform: 'translateX(100px)', opacity: 0}}, {css:{transform: 'translateX(0px)', opacity: 1}})
            .fromTo('[data-name="heart"]', 0.6, {css:{strokeWidth: '1rem', stroke: '#FF4338'}}, {css:{strokeWidth: '0', stroke: '#FF4338'}, repeat: -1, yoyo: true }, 1);
          var tenYardScene = new ScrollMagic.Scene({ triggerElement: '#tenYardScene', offset: 0})
            .setClassToggle('body', 'tenYardScene_active')
            .setTween(tenYardTween)
            .addTo(scrollController);
          tenYardScene.addIndicators({name:'Ten Yard - Offset: '+ 0 +'px'});

          var endZoneSceneHeight = $('#endZoneScene').height();
          var endZoneTween = new TimelineMax();
          endZoneTween.fromTo('#endZoneTextAnimation', 0.8, {css:{transform: 'translateX(-100px)', opacity: 0}}, {css:{transform: 'translateX(0)', opacity: 1}})
          .fromTo('#goalPostAnimation', 1.4, {css:{transform: 'translateY(100px)', opacity: 0}}, {css:{transform: 'translateY(0)', opacity: 1}});
          var endZoneScene = new ScrollMagic.Scene({ triggerElement: '#endZoneScene', offset: endZoneSceneHeight/4})
            .setClassToggle('body', 'endZoneScene_active')
            .setTween(endZoneTween)
            .addTo(scrollController);
          endZoneScene.addIndicators({name:'End Zone - Offset: '+ endZoneSceneHeight/4 +'px'});

          //
          // var actOnePinTween = TweenMax.fromTo('#playersGroupOne td object', 0.2, {css:{transform: 'rotate(-5deg)'}}, {css:{transform: 'rotate(5deg)'},repeat: -1, yoyo: true}, 2);
          // var actOnePinHeight = $('#helmetOneScene').height();
          // var actOnePin = new ScrollMagic.Scene({ triggerElement: '#helmetOneScene', offset: actOnePinHeight/2, duration: windowHeight})
          //   .setClassToggle('body', 'helmetOneScenePin_active')
          //   .setPin('#playersGroupOne')
          //   .setTween(actOnePinTween)
          //   .addTo(scrollController);
          //
          // var actOneFoulTween = new TimelineMax();
          // actOneFoulTween.fromTo('[data-foul-one="true"]', 0.6, {scale: 1, rotation: 0, display: 'block'}, {scale: 0, rotation: 360, display: 'none'}, 1, 'foul')
          //   .fromTo('[data-name="flagOne"]', 0.6, {scale: 0, rotation: 0, display: 'none'}, {scale: 1, rotation: 360, display: 'block'}, 1, 'foul+=.25');
          // var actOneFoulScene = new ScrollMagic.Scene({ triggerElement: '#helmetOneScene', offset: actOnePinHeight})
          //   .setClassToggle('body', 'actOneFoul_active')
          //   .setTween(actOneFoulTween)
          //   .addTo(scrollController);
          //
          // var actTwoSceneHeight = $('#actTwoScene').height();
          // var actTwoTween = new TimelineMax();
          // actTwoTween.fromTo('#textTwoAnimation', 0.8, {css:{transform: 'translateX(-100px)', opacity: 0}}, {css:{transform: 'translateX(0)', opacity: 1}})
          //   .fromTo('#brainGuyAnimation', 0.8, { css:{transform: 'translateX(100px)', opacity: 0}}, {css:{transform: 'translateX(0)', opacity: 1}})
          //   .staggerFromTo('[data-name="lightbulb"]', 0.4, {css:{opacity: '0'}}, {css:{opacity: '1'}, repeat: 0 }, 0.2);
          // var actTwoScene = new ScrollMagic.Scene({ triggerElement: '#actTwoScene', offset: -actTwoSceneHeight/3})
          //   .setClassToggle('body', 'actTwoScene_active')
          //   .setTween(actTwoTween)
          //   .addTo(scrollController);
          //
          // var actTwoPinTween = TweenMax.fromTo('#playersGroupTwo td object', 0.2, {css:{transform: 'rotate(-5deg)'}}, {css:{transform: 'rotate(5deg)'},repeat: -1, yoyo: true}, 2);
          // var actTwoPinHeight = $('#helmetTwoScene').height();
          // var actTwoPin = new ScrollMagic.Scene({ triggerElement: '#helmetTwoScene', offset: actTwoPinHeight/2, duration: windowHeight})
          //   .setClassToggle('body', 'helmetTwoScenePin_active')
          //   .setPin('#playersGroupTwo')
          //   .setTween(actTwoPinTween)
          //   .addTo(scrollController);
          //
          // var actTwoFoulTween = new TimelineMax();
          // actTwoFoulTween.fromTo('[data-foul-two="true"]', 0.6, {scale: 1, rotation: 0, display: 'block'}, {scale: 0, rotation: 360, display: 'none'}, 1, 'foul')
          //   .fromTo('[data-name="flagTwo"]', 0.6, {scale: 0, rotation: 0, display: 'none'}, {scale: 1, rotation: 360, display: 'block'}, 1, 'foul+=.25');
          // var actTwoFoulScene = new ScrollMagic.Scene({ triggerElement: '#helmetTwoScene', offset: actTwoPinHeight})
          //   .setClassToggle('body', 'actTwoFoul_active')
          //   .setTween(actTwoFoulTween)
          //   .addTo(scrollController);
          //
          // var actThreeSceneHeight = $('#actThreeScene').height();
          // var actThreeTween = new TimelineMax();
          // actThreeTween.fromTo('#textThreeAnimation', 0.8, {css:{transform: 'translateX(-100px)', opacity: 0}}, {css:{transform: 'translateX(0)', opacity: 1}})
          //   .fromTo('#heartGuyAnimation', 0.8, { css:{transform: 'translateX(100px)', opacity: 0}}, {css:{transform: 'translateX(0px)', opacity: 1}})
          //   .fromTo('[data-name="heart"]', 0.8, {css:{strokeWidth: '1rem', stroke: '#FF4338'}}, {css:{strokeWidth: '0', stroke: '#FF4338'}, repeat: -1, yoyo: true }, 1);
          // var actThreeScene = new ScrollMagic.Scene({ triggerElement: '#actThreeScene', offset: 0})
          //   .setClassToggle('body', 'actThreeScene_active')
          //   .setTween(actThreeTween)
          //   .addTo(scrollController);
          //
          // var actThreePinTween = TweenMax.fromTo('#playersGroupThree td object', 0.2, {css:{transform: 'rotate(-5deg)'}}, {css:{transform: 'rotate(5deg)'},repeat: -1, yoyo: true}, 2);
          //
          // var actThreePinHeight = $('#helmetThreeScene').height();
          // var actThreePin = new ScrollMagic.Scene({ triggerElement: '#helmetThreeScene', offset: actThreePinHeight/2, duration: windowHeight})
          //   .setClassToggle('body', 'helmetThreeScenePin_active')
          //   .setPin('#playersGroupThree')
          //   .setTween(actThreePinTween)
          //   .addTo(scrollController);
          //
          // var actThreeFoulTween = new TimelineMax();
          // actThreeFoulTween.fromTo('[data-foul-three="true"]', 0.6, {scale: 1, rotation: 0, display: 'block'}, {scale: 0, rotation: 360, display: 'none'}, 1, 'foul')
          //   .fromTo('[data-name="flagThree"]', 0.6, {scale: 0, rotation: 0, display: 'none'}, {scale: 1, rotation: 360, display: 'block'}, 1, 'foul+=.25');
          // var actThreeFoulScene = new ScrollMagic.Scene({ triggerElement: '#helmetThreeScene', offset: actThreePinHeight})
          //   .setClassToggle('body', 'actThreeFoul_active')
          //   .setTween(actThreeFoulTween)
          //   .addTo(scrollController);
          //
          // var encoreSceneHeight = $('#encoreScene').height();
          // var encoreTween = new TimelineMax();
          // encoreTween.fromTo('#encoreTextAnimation', 0.8, {css:{transform: 'translateX(-100px)', opacity: 0}}, {css:{transform: 'translateX(0)', opacity: 1}});
          // var encoreScene = new ScrollMagic.Scene({ triggerElement: '#encoreScene', offset: 0})
          //   .setClassToggle('body', 'encoreScene_active')
          //   .setTween(encoreTween)
          //   .addTo(scrollController);
          //
          // var encorePinTween = TweenMax.fromTo('#playersGroupFour td object', 0.2, {css:{transform: 'rotate(-5deg)'}}, {css:{transform: 'rotate(5deg)'},repeat: -1, yoyo: true}, 2);
          // var encorePinHeight = $('#helmetFourScene').height();
          // var encorePin = new ScrollMagic.Scene({ triggerElement: '#helmetFourScene', offset: encorePinHeight/2, duration: windowHeight})
          //   .setClassToggle('body', 'helmetFourScenePin_active')
          //   .setPin('#playersGroupFour')
          //   .setTween(encorePinTween)
          //   .addTo(scrollController);
          //
          // var encoreFoulTween = new TimelineMax();
          // encoreTween.staggerFromTo('[data-foul-four="true"]', 0.6, {scale: 1, rotation: 0, display: 'block'}, {scale: 0, rotation: 360, display: 'none'}, 1, 'foul')
          //   .staggerFromTo('[data-name="flagFour"]', 0.6, {scale: 0, rotation: 0, display: 'none'}, {scale: 1, rotation: 360, display: 'block'}, 1, 'foul+=.25');
          // var encoreFoulScene = new ScrollMagic.Scene({ triggerElement: '#helmetFourScene', offset: encorePinHeight})
          //   .setClassToggle('body', 'encoreFoul_active')
          //   .setTween(encoreFoulTween)
          //   .addTo(scrollController);
          //
          // var chalkBoardHeight = $('#chalkBoardScene').height();
          // var chalkBoardTween = TweenMax.fromTo('#chalkBoardAnimation', 1.4, {css:{transform: 'translateY(-240px)', opacity: 0}}, {css:{transform: 'translateY(0)', opacity: 1}});
          // var recapScene = new ScrollMagic.Scene({triggerElement: '#chalkBoardScene', offset: -chalkBoardHeight/3})
          //   .setClassToggle('body', 'chalkBoardScene_active')
          //   .setTween(chalkBoardTween)
          //   .addTo(scrollController);

          // Add debug indicators fixed on right side
          // stadiumScene.addIndicators({name:titleScene});
          // scoreboardScene.addIndicators({name:titleScene});

          // actOneScene.addIndicators({name:titleScene});
          // actOnePin.addIndicators({name:titleScene});
          // actOneFoulScene.addIndicators({name:titleScene});
          //
          // actTwoScene.addIndicators({name:titleScene});
          // actTwoPin.addIndicators({name:titleScene});
          // actTwoFoulScene.addIndicators({name:titleScene});
          //
          // actThreeScene.addIndicators({name:titleScene});
          // actThreePin.addIndicators({name:titleScene});
          // actThreeFoulScene.addIndicators({name:titleScene});
          //
          // encoreScene.addIndicators({name:titleScene});
          // encorePin.addIndicators({name:titleScene});
          //
          // recapScene.addIndicators({name:titleScene});

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
