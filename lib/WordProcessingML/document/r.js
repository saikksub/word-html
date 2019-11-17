const rPr = require('./rPr')

const main = function (doc, namespaces) {
  const result = {}
  if (doc && doc.childNodes) {
    const keys = Object.keys(doc.childNodes)
    for (let index = 0; index < keys.length; index++) {
      if (doc.childNodes[keys[index]].localName === 'r') {
        const rNode = doc.childNodes[keys[index]].childNodes
        Object.keys(rNode).forEach(key => {
          if (rNode[key].localName === 'rPr') {
            result['rPr'] = Object.assign({}, rPr(rNode[key]))
          } else if (rNode[key].localName === 't') {
            // result['t'] = rNode[key].nodeValue
            result['t'] = rNode[key].childNodes[0].nodeValue
          }
        })
      }
    }
  }

  return result
}

module.exports = main