// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      title: "Website",
      name: "website",
      type: "document",
      fields: [
        {
          title: "Link",
          name: "url",
          type: "string",
          description: "This will be used as the web address to visit this website."
        },
        {
          title: "Name",
          name: "name",
          type: "string",
          description: "Used to identify this website. This name will be used as part of the Web Document title and for the Website Header name property."
        },
        {
          title: "Description",
          name: "description",
          type: "string",
          description: "This will be used as the meta description for the website, such as when Slack or social site generates a link preview."
        }
      ]
    },
    {
      title: "Web Document",
      name: "webdoc",
      type: "document",
      preview: {
        select: {
          title: 'title',
          subtitle: 'website.name'
        }
      },
      fields: [
        {
          title: "Website",
          name: 'website',
          type: 'reference',
          description: 'Use to decide how to render the Website Header, such as using the Website name for the Website Header name property.',
          to: {
            type: 'website'
          }
        },
        {
          title: "Title",
          name: "title",
          type: "string",
          description: "The title of the Web Document, displayed in the browser tab and as the h1."
        },
        {
          title: "Slug",
          name: "slug",
          type: "slug",
          description: "Used for a unique Web Document URL.",
          options: {
            source: 'title',
            maxLength: 200, // will be ignored if slugify is set
            slugify: input => input
                                 .toLowerCase()
                                 .replace(/\s+/g, '-')
                                 .slice(0, 200)
          }
        },
        {
          title: "Description",
          name: "description",
          type: "string",
          description: "The meta description of the Web Document, so things like search engines and when sharing the link this will be used as the text when generating that preview, like in Slack or preview cards."
        },
        {
          title: 'Body content', 
          name: 'body',
          type: 'array', 
          of: [
            { type: 'block' },
            {
              name: 'callout',
              type: 'object',
              title: 'Callout',
              fields: [
                {
                  name: 'variant',
                  type: 'string', // controlled list
                  title: 'Variant',
                },
                {
                  title: 'Callout content',
                  name: 'callout_content',
                  type: 'array',
                  of: [
                    {
                      type: 'block'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: "Parent Web Document",
          name: 'parent_webdoc',
          type: 'reference',
          description: 'Used for Web Document heirarchy, such as understanding Web Document siblings, or generating a sitemap.',
          to: {
            type: 'webdoc'
          }
        },
        {
          title: "Child Web Documents",
          name: 'child_webdocs',
          type: 'reference',
          description: 'This will be used for understanding if this Web Document has some babies.',
          to: [
            {
              type: 'webdoc'
            }
          ]
        }
      ]
    }
  ]),
})
