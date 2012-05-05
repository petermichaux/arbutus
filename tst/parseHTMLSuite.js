buster.testCase("parseHTML test suite", {

    "test parse text": function() {
        var html = 'some text';
        var frag = abeja.parseHTML(html);
        assert.same(html, frag.firstChild.nodeValue);
    },

    "test parse paragraph": function() {
        var innerHTML = 'a paragraph';
        var html = '<p>'+innerHTML+'</p>';
        var frag = abeja.parseHTML(html);
        assert.same('P',  frag.firstChild.tagName);
        assert.same('a paragraph', frag.firstChild.innerHTML);
    }

});
