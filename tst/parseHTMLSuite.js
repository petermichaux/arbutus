buster.testCase("parseHTML test suite", {

    "test parse text": function() {
        var html = 'some text';
        var frag = arbutus.parseHTML(html);
        assert.same(html, frag.firstChild.nodeValue);
    },

    "test parse paragraph": function() {
        var innerHTML = 'a paragraph';
        var html = '   <p>'+innerHTML+'</p>   ';
        var frag = arbutus.parseHTML(html);
        assert.same('P',  frag.firstChild.tagName);
        assert.same(innerHTML, frag.firstChild.innerHTML);
    },

    "test parse list item": function() {
        var innerHTML = 'a list item';
        var html = '   <li>'+innerHTML+'</li>   ';
        var frag = arbutus.parseHTML(html);
        assert.same('LI',  frag.firstChild.tagName);
        assert.same(innerHTML, frag.firstChild.innerHTML);
    },

    "test parse td": function() {
        var innerHTML = 'a table cell';
        var html = '   <td>'+innerHTML+'</td>   ';
        var frag = arbutus.parseHTML(html);
        assert.same('TD',  frag.firstChild.tagName);
        assert.same(innerHTML, frag.firstChild.innerHTML);
    },

    "test parse th": function() {
        var innerHTML = 'a table cell';
        var html = '   <th>'+innerHTML+'</th>   ';
        var frag = arbutus.parseHTML(html);
        assert.same('TH',  frag.firstChild.tagName);
        assert.same(innerHTML, frag.firstChild.innerHTML);
    },

    "test parse tr": function() {
        var innerHTML = '<td>a table cell</td>';
        var html = '   <tr>'+innerHTML+'</th>   ';
        var frag = arbutus.parseHTML(html);
        assert.same('TR',  frag.firstChild.tagName);
        assert.same('TD',  frag.firstChild.firstChild.tagName);
    },

    "test parse thead": function() {
        var html = '   <thead></thead>   ';
        var frag = arbutus.parseHTML(html);
        assert.same('THEAD',  frag.firstChild.tagName);
    },

    "test parse tbody": function() {
        var html = '   <tbody></tbody>   ';
        var frag = arbutus.parseHTML(html);
        assert.same('TBODY',  frag.firstChild.tagName);
    },

    "test parse tfoot": function() {
        var html = '   <tfoot></tfoot>   ';
        var frag = arbutus.parseHTML(html);
        assert.same('TFOOT',  frag.firstChild.tagName);
    },

    "test parse caption": function() {
        var html = '   <caption>a caption</caption>   ';
        var frag = arbutus.parseHTML(html);
        assert.same('CAPTION',  frag.firstChild.tagName);
    },

    "test parse col": function() {
        var html = '   <col>   ';
        var frag = arbutus.parseHTML(html);
        assert.same('COL',  frag.firstChild.tagName);
    },

    "test parse colgroup": function() {
        var html = '   <colgroup></colgroup>   ';
        var frag = arbutus.parseHTML(html);
        assert.same('COLGROUP',  frag.firstChild.tagName);
    },

    "test parse select": function() {
        var html = '   <select></select>   ';
        var frag = arbutus.parseHTML(html);
        assert.same('SELECT',  frag.firstChild.tagName);
    },

    "test parse unselected option": function() {
        var html = '   <option></option>   ';
        var frag = arbutus.parseHTML(html);
        assert.same('OPTION',  frag.firstChild.tagName);
        assert.same(false, frag.firstChild.selected);
    },

    "test parse selected option": function() {
        var html = '   <option selected="selected"></option>   ';
        var frag = arbutus.parseHTML(html);
        assert.same('OPTION',  frag.firstChild.tagName);
        assert.same(true, frag.firstChild.selected);
    },

    "test parse unchecked radio": function() {
        var html = '   <input type="radio" name="alpha">   ';
        var frag = arbutus.parseHTML(html);
        assert.same('INPUT',  frag.firstChild.tagName);
        assert.same(false, frag.firstChild.checked);
    },

    "test parse checked radio": function() {
        var html = '   <input type="radio" name="alpha" checked="checked">   ';
        var frag = arbutus.parseHTML(html);
        assert.same('INPUT',  frag.firstChild.tagName);
        assert.same(true, frag.firstChild.checked);
    },

    "test parse fieldset": function() {
        var html = '   <fieldset></fieldset>   ';
        var frag = arbutus.parseHTML(html);
        assert.same('FIELDSET',  frag.firstChild.tagName);
    },

    "test parse legend": function() {
        var html = '   <legend>a legend</legend>   ';
        var frag = arbutus.parseHTML(html);
        assert.same('LEGEND',  frag.firstChild.tagName);
    },

    "test parse text": function() {
        var text = 'abc';
        var html = '   '+text+'   ';
        var frag = arbutus.parseHTML(html);
        assert.same('"'+text+'"',  '"'+frag.firstChild.nodeValue+'"');
    },

    "test parse multiple elements": function() {
        var text = 'abc';
        var html = '   <div>asdf</div>'+text+'<span>asdf</span>   ';
        var frag = arbutus.parseHTML(html);
        assert.same('DIV',  frag.firstChild.tagName);
        assert.same('"'+text+'"',  '"'+frag.firstChild.nextSibling.nodeValue+'"');
        assert.same('SPAN',  frag.firstChild.nextSibling.nextSibling.tagName);
    }

});
