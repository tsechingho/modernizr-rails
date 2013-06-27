//=require modernizr-base
// documentMode logic from YUI to filter out IE8 Compat Mode
//   which false positives.
tests['hashchange'] = function() {
  return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
};
