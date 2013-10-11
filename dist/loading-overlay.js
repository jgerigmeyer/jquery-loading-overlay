/*! Loading Overlay - v1.0.0 - 2013-10-11
* https://github.com/jgerigmeyer/jquery-loading-overlay
* Copyright (c) 2013 Jonny Gerig Meyer; Licensed MIT */
(function ($) {

    'use strict';

    var methods = {
        init: function (opts) {
            var options = $.extend({}, $.fn.loadingOverlay.defaults, opts);
            var target = $(this).addClass(options.loadingClass);
            var overlay = '<div class="' + options.overlayClass + '">' +
                '<p class="' + options.spinnerClass + '">' +
                '<span class="' + options.iconClass + '"></span>' +
                '<span class="' + options.textClass + '">' + options.loadingText + '</span>' +
                '</p></div>';
            target.prepend($(overlay));
            return target;
        },

        remove: function (opts) {
            var options = $.extend({}, $.fn.loadingOverlay.defaults, opts);
            var target = $(this);
            target.find('.' + options.overlayClass).detach();
            if (target.hasClass(options.loadingClass)) {
                target.removeClass(options.loadingClass);
            } else {
                target.find('.' + options.loadingClass).removeClass(options.loadingClass);
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
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.loadingOverlay');
        }
    };

    /* Setup plugin defaults */
    $.fn.loadingOverlay.defaults = {
        loadingClass: 'loading',            // Class added to `target` while loading
        overlayClass: 'loading-overlay',    // Class added to loading overlay (to be styled in CSS)
        spinnerClass: 'loading-spinner',    // Class added to loading overlay spinner
        iconClass: 'loading-icon',          // Class added to loading overlay spinner
        textClass: 'loading-text',          // Class added to loading overlay spinner
        loadingText: 'loading'              // Text within loading overlay
    };

}(jQuery));
