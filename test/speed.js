(function() {

  JSLitmus.test('trimNoNative', function() {
    return _.trim("  foobar  ", " ");
  });

  JSLitmus.test('trim', function() {
    return _.trim("  foobar  ");
  });

  JSLitmus.test('trim object-oriented', function() {
    return _("  foobar  ").trim();
  });

  JSLitmus.test('trim jQuery', function() {
    return jQuery.trim("  foobar  ");
  });

  JSLitmus.test('ltrimp', function() {
    return _.ltrim("  foobar  ", " ");
  });

  JSLitmus.test('rtrimp', function() {
    return _.rtrim("  foobar  ", " ");
  });

  JSLitmus.test('isStartsWith', function() {
    return _.isStartsWith("foobar", "foo");
  });

  JSLitmus.test('isEndsWith', function() {
    return _.isEndsWith("foobar", "xx");
  });

  JSLitmus.test('chop', function(){
    return _('whitespace').chop(2);
  });

  JSLitmus.test('count', function(){
    return _('Hello worls').count('l');
  });

  JSLitmus.test('insert', function() {
    return _('Hello ').insert(6, 'world');
  });

  JSLitmus.test('splice', function() {
    return _('https://edtsech@bitbucket.org/edtsech/underscore.strings').splice(30, 7, 'epeli');
  });

  JSLitmus.test('succ', function(){
    var let = 'a', alphabet = [];

    for (var i=0; i < 26; i++) {
        alphabet.push(let);
        let = _(let).succ();
    }

    return alphabet;
  });

  JSLitmus.test('titleize', function(){
    return _('the titleize string method').titleize()
  });

  JSLitmus.test('truncate', function(){
    return _('Hello world').truncate(5);
  });

  JSLitmus.test('blank', function(){
    return _('').blank();
  });

  JSLitmus.test('escapeHTML', function(){
    _('<div>Blah blah blah</div>').escapeHTML()
  });

  JSLitmus.test('unescapeHTML', function(){
    _('&lt;div&gt;Blah blah blah&lt;/div&gt;').unescapeHTML()
  });

  JSLitmus.test('reverse', function(){
    _('Hello World').reverse();
  });
})();
