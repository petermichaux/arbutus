/**

@property abeja.parseHTML

@parameter html {string} The string of HTML to be parsed.

@parameter doc {Document} The document object to create the new DOM nodes.

@description

Returns a document fragment that has the children defined by the html string.

var fragment = abeja.parseHTML('<p>alpha beta</p>');
document.body.appendChild(fragment);

*/
abeja.parseHTML = function(html, doc) {
    doc = doc || document;
    var parser = doc.createElement('div');
    var fragment = doc.createDocumentFragment();
    parser.innerHTML = html;
    while (parser.firstChild) {
        fragment.appendChild(parser.firstChild);
    }
    return fragment;
};
