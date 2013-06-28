//=require modernizr-base
// On the S60 and BB Storm, getContext exists, but always returns undefined
// so we actually have to call getContext() to verify
// github.com/Modernizr/Modernizr/issues/issue/97/

tests['canvastext'] = function() {
    return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
};
