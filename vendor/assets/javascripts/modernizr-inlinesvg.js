//=require modernizr-base
// specifically for SVG inline in HTML, not within XHTML
// test page: paulirish.com/demo/inline-svg
tests['inlinesvg'] = function() {
  var div = document.createElement('div');
  div.innerHTML = '<svg/>';
  return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
};
