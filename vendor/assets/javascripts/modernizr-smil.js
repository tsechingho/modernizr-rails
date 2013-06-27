//=require modernizr-base
// SVG SMIL animation
tests['smil'] = function() {
    return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
};
