const WordProcessingML = require('./WordProcessingML')
const parser = require('./parser')

// Word Processing ML Object
const office = { word: null }

const convertHtml = async function (base64FileData) {
  office.word = await WordProcessingML(base64FileData)
  const core = await office.word.get('WordProcessingML:docProps:core')
  const app = await office.word.get('WordProcessingML:docProps:app')
  const document = await office.word.get('WordProcessingML:word:document')
  // const settings = await office.word.get('WordProcessingML:word:settings')
  // const files = await office.word.get('WordProcessingML:meta:files')
  console.log(document)

  return {
    properties: {
      core,
      app
    }
  }
}

module.exports = {
  convertHtml
}
