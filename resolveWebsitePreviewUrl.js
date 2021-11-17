export default function resolveProductionUrl(document) {

  console.log('resolveProductionUrl', document)

  return `https://umich-lib-web-documents.netlify.app/${document.slug.current}`
}