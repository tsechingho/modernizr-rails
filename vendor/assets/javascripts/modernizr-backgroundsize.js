//=require modernizr-base
// this will false positive in Opera Mini
//   github.com/Modernizr/Modernizr/issues/396

tests['backgroundsize'] = function() {
    return testPropsAll('backgroundSize');
};
