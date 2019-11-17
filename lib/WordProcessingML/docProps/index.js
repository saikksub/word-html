const { getTextByTagName, getListNameSpaceURI } = require('../utils')
const tags = require('./tags')

const getCoreProps = function (doc) {
  const namespaces = getListNameSpaceURI(doc)
  return {
    title: getTextByTagName(doc, tags.TAG_TITLE, namespaces),
    subject: getTextByTagName(doc, tags.TAG_SUBJECT, namespaces),
    creator: getTextByTagName(doc, tags.TAG_CREATOR, namespaces),
    lastModifiedBy: getTextByTagName(doc, tags.TAG_LAST_MODIFIED_BY, namespaces),
    revision: getTextByTagName(doc, tags.TAG_REVISION, namespaces),
    lastPrinted: getTextByTagName(doc, tags.TAG_LAST_PRINTED, namespaces),
    created: getTextByTagName(doc, tags.TAG_CREATED, namespaces),
    modified: getTextByTagName(doc, tags.TAG_MODIFIED, namespaces),
  }
}

const getAppProps = function (doc) {
  return {
    template: getTextByTagName(doc, tags.TAG_TEMPLATE, null),
    totalTime: getTextByTagName(doc, tags.TAG_TOTAL_TIME, null),
    pages: getTextByTagName(doc, tags.TAG_PAGES, null),
    words: getTextByTagName(doc, tags.TAG_WORDS, null),
    characters: getTextByTagName(doc, tags.TAG_CHARACTERS, null),
    application: getTextByTagName(doc, tags.TAG_APPLICATION, null),
    docSecurity: getTextByTagName(doc, tags.TAG_DOC_SECURITY, null),
    lines: getTextByTagName(doc, tags.TAG_LINES, null),
    paragraphs: getTextByTagName(doc, tags.TAG_PARAGRAPHS, null),
    scaleCrop: getTextByTagName(doc, tags.TAG_SCALE_CROP, null),
    company: getTextByTagName(doc, tags.TAG_COMPANY, null),
    linksUpToDate: getTextByTagName(doc, tags.TAG_LINKS_UP_TO_DATE, null),
    charactersWithSpace: getTextByTagName(doc, tags.TAG_CHARACTERS_WITH_SPACES, null),
    sharedDoc: getTextByTagName(doc, tags.TAG_SHARED_DOC, null),
    hyperlinksChanged: getTextByTagName(doc, tags.TAG_HYPERLINKS_CHANGED, null),
    appVersion: getTextByTagName(doc, tags.TAG_APP_VERSION, null),
  }
}

module.exports = {
  getCoreProps,
  getAppProps
}
