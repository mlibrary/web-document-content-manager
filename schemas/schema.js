import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import websiteSchema from './website'
import webDocumentSchema from './web-document'
import localNavigation from './local-navigation'
import builderBlocks from './builder-blocks'

const defaultSchema = createSchema({
  name: 'main',
  types: schemaTypes.concat([
    websiteSchema,
    webDocumentSchema,
    localNavigation,
    builderBlocks
  ]),
})

export default defaultSchema