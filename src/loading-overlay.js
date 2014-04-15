/*
 * loading-overlay
 * https://github.com/jgerigmeyer/jquery-loading-overlay
 *
 * Copyright (c) 2014 Jonny Gerig Meyer
 * Licensed under the MIT license.
 */

(function ($) {

  'use strict';

  var methods = {
    init: function (options) {
      var opts = $.extend({}, $.fn.loadingOverlay.defaults, options);
      var target = $(this).addClass(opts.loadingClass);
      var overlay = '<div class="' + opts.overlayClass + '">' +
        '<p class="' + opts.spinnerClass + '">' +
        '<span class="' + opts.iconClass + '"></span>' +
        '<span class="' + opts.textClass + '">' + opts.loadingText + '</span>' +
        '</p></div>';
      // Don't add duplicate loading-overlay
      if (!target.data('loading-overlay')) {
        target.prepend($(overlay)).data('loading-overlay', true);
      }
      return target;
    },

    remove: function (options) {
      var opts = $.extend({}, $.fn.loadingOverlay.defaults, options);
      var target = $(this).data('loading-overlay', false);
      target.find('.' + opts.overlayClass).detach();
      if (target.hasClass(opts.loadingClass)) {
        target.removeClass(opts.loadingClass);
      } else {
        target.find('.' + opts.loadingClass).removeClass(opts.loadingClass);
      }
      return target;
    },

    // Expose internal methods to allow stubbing in tests
    exposeMethods: function () {
      return methods;
    }
  };

  $.fn.loadingOverlay = function (method) {
    if (methods[method]) {
      return methods[method].apply(
        this,
        Array.prototype.slice.call(arguments, 1)
      );
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.loadingOverlay');
    }
  };

  /* Setup plugin defaults */
  $.fn.loadingOverlay.defaults = {
    loadingClass: 'loading',          // Class added to target while loading
    overlayClass: 'loading-overlay',  // Class added to overlay (style with CSS)
    spinnerClass: 'loading-spinner',  // Class added to loading overlay spinner
    iconClass: 'loading-icon',        // Class added to loading overlay spinner
    textClass: 'loading-text',        // Class added to loading overlay spinner
    loadingText: 'loading'            // Text within loading overlay
  };

}(jQuery));
