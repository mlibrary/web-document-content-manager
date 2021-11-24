export default {
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
      title: 'Codename',
      name: 'codename',
      type: 'string',
      description: 'The unique name used for querying web documents that belong to this website only. Netlify website will use this as an env var when building the website.'
    },
    {
      title: "Description",
      name: "description",
      type: "string",
      description: "This will be used as the meta description for the website, such as when Slack or social site generates a link preview."
    },
    {
      title: "Landing Web Document",
      name: 'landing_web_document',
      type: 'reference',
      description: 'Used as the landing page when someone visits the Website Link. Also known as a homepage.',
      to: {
        type: 'webdoc'
      }
    },
    {
      title: 'Main Navigation',
      name: 'main_navigation',
      type: 'array',
      of: [
        { type: 'reference', name: 'Link', to: [{ type: 'webdoc' }] }
      ]
    }
  ]
}