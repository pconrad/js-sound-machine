

module.exports = {
  parseMusicJson: function(filename) {
    var fs = require("fs");
    var contents = fs.readFileSync(filename);
    var jsonContent = JSON.parse(contents);
    return jsonContent;
  }

};

