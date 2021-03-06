//=require modernizr-base
// This test is only for clip paths in SVG proper, not clip paths on HTML content
// demo: srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg

// However read the comments to dig into applying SVG clippaths to HTML content here:
//   github.com/Modernizr/Modernizr/issues/213#issuecomment-1149491
tests['svgclippaths'] = function() {
    return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
};
