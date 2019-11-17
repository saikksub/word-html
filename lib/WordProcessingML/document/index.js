const { getListNameSpaceURI } = require('../utils')
const pPr = require('./pPr')
const r = require('./r')

const getDocument = function (doc) {
  const document = []
  const namespaces = getListNameSpaceURI(doc)
  let body = null
  for (let index = 0; index < namespaces.length; index ++) {
    const temp = doc.documentElement.getElementsByTagNameNS(namespaces[index], 'body')
    if (temp.length > 0) {
      body = temp
      break
    }
  }
  if (!(body && body.length > 0)) {
    return {}
  }
  const childNodes = body[0].childNodes

  Object.keys(childNodes).forEach(key => {
    const entryNode = {}
    const childObject = childNodes[key]
    entryNode['name'] = childObject.localName
    entryNode['pPr'] = pPr(childObject, namespaces)
    entryNode['r'] = r(childObject, namespaces)
    document.push(entryNode)
  })

  return document
}

module.exports = {
  getDocument
}
