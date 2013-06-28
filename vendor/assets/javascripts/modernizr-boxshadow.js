//=require modernizr-base
// WebOS unfortunately false positives on this test.
tests['boxshadow'] = function() {
    return testPropsAll('boxShadow');
};
