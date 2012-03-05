(function(global, _) {

  var DS = (global.DS || (global.DS = {}));

  // ------ data parsers ---------
  DS.Parsers = function( options ) {
    this.options = options || {};
  };

  _.extend(DS.Parsers.prototype, {

    //this is the main function for the parser,
    //it must return an object with the columns names
    //and the data in columns
    parse : function() {},

    _coerceTypes : function(d) {

      // also save raw type function onto column for future computable
      // value extraction
      _.each(d._columns, function(column, index) {
        column.coerce();
      });
      return d;
    }

  });
}(this, _));
