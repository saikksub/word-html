var DOMParserXML = require('xmldom').DOMParser;

const index = function (xml) {
  return new DOMParserXML().parseFromString(xml.toString(), 'text/xml')
}

module.exports = index
