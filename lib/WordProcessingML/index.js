const JSZip = require('../jszip/jszip.min')
const xmlDom = require('./xmldom')
const settings = require('./settings')
const docProps = require('./docProps')
const zip = new JSZip()

const WordProcessingML = function (data) {
  const self = this

  self.get = function (cmd) {
    return new Promise(resolve => {
      switch (cmd) {
        case 'WordProcessingML:docProps:core':
          if (!this.content.files['docProps/core.xml']) {
            resolve({})
          }
          this.content.files['docProps/core.xml'].async('binarystring')
            .then(content => {
              const doc = xmlDom(content.toString())
              resolve(docProps.getCoreProps(doc))
            })
          break
        case 'WordProcessingML:docProps:app':
          if (!this.content.files['docProps/app.xml']) {
            resolve({})
          }
          this.content.files['docProps/app.xml'].async('binarystring')
            .then(content => {
              const doc = xmlDom(content.toString())
              resolve(docProps.getAppProps(doc))
            })
          break
        case 'WordProcessingML:word:settings':
          if (!this.content.files['word/settings.xml']) {
            resolve({})
          }
          this.content.files['word/settings.xml'].async('binarystring')
            .then(content => {
              const doc = xmlDom(content.toString())
              resolve(settings.getSettings(doc))
            })
          break
        case 'WordProcessingML:word:fontTable':
            if (!this.content.files['word/fontTable.xml']) {
              resolve({})
            }
            this.content.files['word/fontTable.xml'].async('binarystring')
              .then(content => {
                console.log(content)
                // const doc = xmlDom(content.toString())
                resolve({})
              })
            break
        case 'WordProcessingML:meta:files':
          resolve(Object.keys(this.content.files))
          break
        default:
          resolve({})
          break
      }
    })
  }
  

  return new Promise((resolve, reject) => {
    zip.loadAsync(data, { base64: true })
      .then(content => {
        self.content = content
        resolve(self)
      })
  })
}

module.exports = WordProcessingML
