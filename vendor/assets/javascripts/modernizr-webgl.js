//=require modernizr-base
// webk.it/70117 is tracking a legit WebGL feature detect proposal

// We do a soft detect which may false positive in order to avoid
// an expensive context creation: bugzil.la/732441

tests['webgl'] = function() {
    return !!window.WebGLRenderingContext;
};
