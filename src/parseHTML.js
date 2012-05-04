/**

@property abeja.parseHTML

@parameter html {string} The string of HTML to be parsed.

@parameter doc {Document} The document object to create the new DOM nodes.

@description

Returns a document fragment that has the children defined by the html string.

var fragment = abeja.parseHTML('<p>alpha beta</p>');
document.body.appendChild(fragment);

Note that a call to this function is relatively expensive and you probably
don't want to have a loop of thousands with calls to this function.

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
