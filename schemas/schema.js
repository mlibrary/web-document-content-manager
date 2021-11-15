import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import websiteSchema from './documents/website'
import webDocumentSchema from './documents/web-document'

export default createSchema({
  name: 'main',
  types: schemaTypes.concat([
    websiteSchema,
    webDocumentSchema,
  ]),
})
