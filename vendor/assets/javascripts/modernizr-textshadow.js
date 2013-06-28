//=require modernizr-base
// FF3.0 will false positive on this test
tests['textshadow'] = function() {
    return document.createElement('div').style.textShadow === '';
};
