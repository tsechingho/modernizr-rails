//=require modernizr-base
// In FF4, if disabled, window.localStorage should === null.

// Normally, we could not test that directly and need to do a
//   `('localStorage' in window) && ` test first because otherwise Firefox will
//   throw bugzil.la/365772 if cookies are disabled

// Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
// will throw the exception:
//   QUOTA_EXCEEDED_ERRROR DOM Exception 22.
// Peculiarly, getItem and removeItem calls do not throw.

// Because we are forced to try/catch this, we'll go aggressive.

// Just FWIW: IE8 Compat mode supports these features completely:
//   www.quirksmode.org/dom/html5.html
// But IE8 doesn't support either with local files

tests['localstorage'] = function() {
    try {
        localStorage.setItem(mod, mod);
        localStorage.removeItem(mod);
        return true;
    } catch(e) {
        return false;
    }
};
