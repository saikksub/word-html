const {getAttributeValueFromTag, getTagElementFromNS } = require('../utils')

const main = function (doc, namespaces) {
  const temp = getTagElementFromNS(doc, 'pPr', namespaces)
  if (temp) {
    if (temp.length === 36) {
      console.log(doc.localName)
    }
  }
}

module.exports = main