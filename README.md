# Loading Overlay

[![Build Status](https://travis-ci.org/jgerigmeyer/jquery-loading-overlay.svg?branch=master)](https://travis-ci.org/jgerigmeyer/jquery-loading-overlay)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

jQuery Loading Overlay Plugin

Uses Javascript to add/remove a loading overlay to a target element. It can be
called on any element that should receive the loading overlay, and accepts
options for class selectors and loading overlay text. The overlay itself must be
styled via CSS.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/jgerigmeyer/jquery-loading-overlay/master/dist/loading-overlay.min.js
[max]: https://raw.github.com/jgerigmeyer/jquery-loading-overlay/master/dist/loading-overlay.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/loading-overlay.min.js"></script>
<script>
jQuery(function($) {
  // Calling the plugin
  // (prepends a div.loading to the target element)
  $('#target').loadingOverlay();

  // Removing the loading overlay
  $('#target').loadingOverlay('remove');
});
</script>
```

## Demo

See a [working example] of the loading-overlay in action, both with and without
CSS styling.

[working example]: http://jgerigmeyer.github.io/jquery-loading-overlay/demo/

## Documentation

Available options, explictly set to their defaults:

```html
$('#target').loadingOverlay({
  loadingClass: 'loading',          // Class added to target while loading
  overlayClass: 'loading-overlay',  // Class added to overlay (style with CSS)
  spinnerClass: 'loading-spinner',  // Class added to loading overlay spinner
  iconClass: 'loading-icon',        // Class added to loading overlay spinner
  textClass: 'loading-text',        // Class added to loading overlay spinner
  loadingText: 'loading'            // Text within loading overlay
});
```

NOTE: If ``loadingClass`` or ``overlayClass`` options are passed when
initializing the loading overlay, the same options must be passed when removing
that overlay:

```html
$('#target').loadingOverlay('remove', {
  loadingClass: 'loading',
  overlayClass: 'loading-overlay'
});
```

## Release History

* 1.0.2 - (02/19/2014) Add bower.json
* 1.0.1 - (10/13/2013) Don't allow duplicate loading-overlays
* 1.0.0 - (10/11/2013) Initial release
