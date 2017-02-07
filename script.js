(function() {

  var tagsToReplace = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };

  function replaceTag(tag) {
      return tagsToReplace[tag] || tag;
  }

  function safe_tags_replace(str) {
      return str.replace(/[&<>]/g, replaceTag);
  }

  var array = [];

  $('button').on('click', function(e) {
    var langreader = new FileReader();

    // assigning handler
    langreader.onloadend = function(evt) {
        lines = evt.target.result.split(/\r?\n/);

        lines.forEach(function (line) {
            if (line.trim().length > 0) array.push(line.trim());
        });

        var stringreader = new FileReader();

        // assigning handler
        stringreader.onloadend = function(evt) {
          lines = evt.target.result.split(/\r?\n/);

          var htmlDump = '';
          lines.forEach(function (line) {
            if (line.trim().length > 0) htmlDump += (safe_tags_replace(line.trim()) + '</br>');
          });

          $('.ola').html(htmlDump);

          $('.controls').hide();

          var keys = [];
          var values = [];

          var odd = true;
          array.forEach(function(item) {
            if (odd) keys.push(item);
            else values.push(item);
            odd = !odd;
          });

          // console.log(keys, values);
          // console.log('>'+keys[0]+'<');

          keys.forEach(function(key, i) {
            var replaced = $(".ola").html().replace('&gt;'+keys[i]+'&lt;','&gt;'+values[i]+'&lt;');
            $(".ola").html(replaced);
          })
        };

        // getting File instance
        var stringfile = $("#strings")[0].files[0];

        // start reading
        stringreader.readAsText(stringfile);
    };

    // getting File instance
    var langfile = $("#lang")[0].files[0];

    // start reading
    langreader.readAsText(langfile);

  });

})();
