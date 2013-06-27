//=require modernizr-base
// Chrome incognito mode used to throw an exception when using openDatabase
// It doesn't anymore.
tests['websqldatabase'] = function() {
  return !!window.openDatabase;
};
