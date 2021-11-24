export default {
  title: 'Local Navigation',
  name: 'local_navigation',
  type: 'document',
  fields: [
    {
      type: 'reference',
      name: 'local_navigation_landing',
      title: 'Local Navigation Landing Web Document',
      to: [{ type: 'webdoc' }]
    },
    {
      type: 'array',
      name: 'local_navigation_links',
      title: "Local Navigaton Links",
      of: [
        { type: 'reference', name: 'Link', title: "Web Document", to: [{ type: 'webdoc' }] }
      ]
    }
  ],
  preview: {
    select: {
      title: 'local_navigation_landing.title'
    }
  }
}