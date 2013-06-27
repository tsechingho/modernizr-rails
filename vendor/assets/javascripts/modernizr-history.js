//=require modernizr-base
// Per 1.6:
// This used to be Modernizr.historymanagement but the longer
// name has been deprecated in favor of a shorter and property-matching one.
// The old API is still available in 1.6, but as of 2.0 will throw a warning,
// and in the first release thereafter disappear entirely.
tests['history'] = function() {
  return !!(window.history && history.pushState);
};
