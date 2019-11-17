const getListNameSpaceURI = function (doc) {
  const result = []
  if (doc) {
    Object.keys(doc.documentElement.attributes).forEach(key => {
      if (
        doc.documentElement.attributes[key] &&
        doc.documentElement.attributes[key].name &&
        doc.documentElement.attributes[key].name.split('xmlns').length > 1
      ) {
        result.push(doc.documentElement.attributes[key].value)
      }
    })
  }

  return result
}

const getTextByTagName = function (doc, tagName, namespaces) {
  let element = null
  let result = ''

  if (doc) {
    if (namespaces && namespaces.length > 0) {
      for (let index = 0; index < namespaces.length - 1; index++) {
        let temp = null
        temp = doc.documentElement
          ? doc.documentElement.getElementsByTagNameNS(
            namespaces[index],
            tagName
          )
          : doc.getElementsByTagNameNS(
            namespaces[index],
            tagName
          )
        if (temp && temp.length > 0) {
          element = temp
          break
        }
      }
    } else {
      element = doc.documentElement
        ? doc.documentElement.getElementsByTagName(tagName)
        : doc.getElementsByTagName(tagName)
    }
  }

  if (element && element.length > 0) {
    // result = `${tagName}:${element[0].textContent}`
    result = element[0].textContent
  }

  return result
}

const getAttributeValueFromTag = function (doc, tagName, namespaces) {
  let element = null
  let result = ''

  if (doc) {
    if (namespaces && namespaces.length > 0) {
      for (let index = 0; index < namespaces.length - 1; index++) {
        let temp = null
        temp = doc.documentElement
          ? doc.documentElement.getElementsByTagNameNS && doc.documentElement.getElementsByTagNameNS(
            namespaces[index],
            tagName
          )
          : doc.getElementsByTagNameNS && doc.getElementsByTagNameNS(
            namespaces[index],
            tagName
          )
        if (temp && temp.length > 0) {
          element = temp
          break
        }
      }
    } else {
      element = doc.documentElement
        ? doc.documentElement.getElementsByTagName && doc.documentElement.getElementsByTagName(tagName)
        : doc.getElementsByTagName && doc.getElementsByTagName(tagName)
    }
  }

  if (element && element.length > 0) {
    // result = `${tagName}:${element[0].textContent}`
    // result = element[0].textContent
    console.log(element.length)
  }

  return result
}

const getTagElementFromNS = function (doc, tagName, namespaces) {
  let element = null
  let result = ''

  if (doc) {
    if (namespaces && namespaces.length > 0) {
      for (let index = 0; index < namespaces.length - 1; index++) {
        let temp = null
        temp = doc.documentElement
          ? doc.documentElement.getElementsByTagNameNS && doc.documentElement.getElementsByTagNameNS(
            namespaces[index],
            tagName
          )
          : doc.getElementsByTagNameNS && doc.getElementsByTagNameNS(
            namespaces[index],
            tagName
          )
        if (temp && temp.length > 0) {
          element = temp
          break
        }
      }
    } else {
      element = doc.documentElement
        ? doc.documentElement.getElementsByTagName && doc.documentElement.getElementsByTagName(tagName)
        : doc.getElementsByTagName && doc.getElementsByTagName(tagName)
    }
  }

  if (element && element.length > 0) {
    // result = `${tagName}:${element[0].textContent}`
    // result = element[0].textContent
    result = element
  }

  return result
}

module.exports = {
  getTextByTagName,
  getListNameSpaceURI,
  getTagElementFromNS,
  getAttributeValueFromTag
}
