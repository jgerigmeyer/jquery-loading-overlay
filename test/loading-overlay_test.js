(function($) {

  'use strict';

  module('loadingOverlay', {
    setup: function () {
      this.container = $('#qunit-fixture #target');
      this.overlayHTML = '<div class="loading-overlay">' +
        '<p class="loading-spinner">' +
        '<span class="loading-icon"></span>' +
        '<span class="loading-text">loading</span>' +
        '</p></div>';
      this.overlay = $(this.overlayHTML);
    }
  });

  test('init is chainable', function () {
    ok(this.container.loadingOverlay().is(this.container), 'is chainable');
  });

  test('remove is chainable', function () {
    ok(this.container.loadingOverlay('remove').is(this.container), 'is chainable');
  });

  test('adds and removes loadingClass on target', function () {
    this.container.loadingOverlay({loadingClass: 'test-class'});

    ok(this.container.hasClass('test-class'), 'target has loadingClass');

    this.container.loadingOverlay('remove', {loadingClass: 'test-class'});

    ok(!this.container.hasClass('test-class'), 'target no longer has loadingClass');
  });

  test('prepends and removes overlay in target', function () {
    this.container.loadingOverlay();
    var expected = this.overlay.get(0).outerHTML;

    strictEqual(this.container.find('.loading-overlay').get(0).outerHTML, expected, 'overlay has been prepended to target');

    this.container.loadingOverlay('remove');

    ok(!this.container.find('.loading-overlay').length, 'overlay has been removed from target');
  });

  test('adds data-loading-overlay to prevent duplicate overlays', function () {
    this.container.loadingOverlay();

    ok(this.container.data('loading-overlay'), 'data-loading-overlay has been added to target');

    this.container.loadingOverlay('remove');

    ok(!this.container.data('loading-overlay'), 'data-loading-overlay has been removed from target');

    this.container.data('loading-overlay', true);
    this.container.loadingOverlay();

    ok(!this.container.find('.loading-overlay').length, 'overlay has not been prepended to target');
  });

  test('can call "remove" on a container element', function () {
    this.container.loadingOverlay();

    ok(this.container.find('.loading-overlay').length, 'overlay has been prepended to target');
    ok(this.container.hasClass('loading'), 'target has loadingClass');

    $('body').loadingOverlay('remove');

    ok(!this.container.find('.loading-overlay').length, 'overlay has been removed from target');
    ok(!this.container.hasClass('loading'), 'target no longer has loadingClass');
  });


  module('loadingOverlay methods', {
    setup: function () {
      this.container = $('#qunit-fixture');
      this.methods = this.container.loadingOverlay('exposeMethods');
      this.initStub = sinon.stub(this.methods, 'init');
    },
    teardown: function () {
      this.initStub.restore();
    }
  });

  test('if no args, calls init method', function () {
    this.container.loadingOverlay();

    ok(this.initStub.calledOnce, 'init was called once');
  });

  test('if first arg is an object, calls init method with args', function () {
    this.container.loadingOverlay({test: 'data'}, 'more');

    ok(this.initStub.calledOnce, 'init was called once');
    ok(this.initStub.calledWith({test: 'data'}, 'more'), 'init was passed args');
  });

  test('if first arg is a method, calls method with remaining args', function () {
    this.container.loadingOverlay('init', {test: 'data'}, 'more');

    ok(this.initStub.calledOnce, 'init was called once');
    ok(this.initStub.calledWith({test: 'data'}, 'more'), 'init was passed remaining args');
  });

  test('if first arg not a method or object, returns an error', function () {
    sinon.stub($, 'error');
    this.container.loadingOverlay('test');

    ok(!this.initStub.called, 'init was not called');
    ok($.error.calledOnce, '$.error was called once');
    ok($.error.calledWith('Method test does not exist on jQuery.loadingOverlay'), '$.error was passed error msg');

    $.error.restore();
  });

}(jQuery));
