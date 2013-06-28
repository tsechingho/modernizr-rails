//=require modernizr-base
// Thanks to Erik Dahlstrom
tests['svg'] = function() {
    return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
};
