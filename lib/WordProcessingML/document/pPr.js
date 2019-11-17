const main = function (doc, namespaces) {
  const result = {}
  if (doc && doc.childNodes) {
    const keys = Object.keys(doc.childNodes)
    for (let index = 0; index < keys.length; index++) {
      if (doc.childNodes[keys[index]].localName === 'pPr') {
        const pPrNode = doc.childNodes[keys[index]].childNodes
        Object.keys(pPrNode).forEach(key => {
          if (pPrNode[key].getAttribute) {
            result[`${pPrNode[key].localName}`] = pPrNode[key].getAttribute('w:val')
          }
        })
      }
    }
  }

  return result
}

module.exports = main