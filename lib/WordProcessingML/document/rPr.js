const main = function (doc, namespaces) {
  const result = {}
  if (doc && doc.childNodes) {
    const keys = Object.keys(doc.childNodes)
    for (let index = 0; index < keys.length; index++) {
      if (doc.childNodes[index] && doc.childNodes[index].localName) {
        if (doc.childNodes[index].getAttribute) {
          result[`${doc.childNodes[index].localName}`] = doc.childNodes[index].getAttribute('w:val')
        }
      }
    }
  }

  return result
}

module.exports = main