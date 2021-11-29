export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'Netlify',
        sites: [
          {
            title: 'Design System Website',
            apiId: process.env.NETLIFY_WEB_DOCUMENT_BUILDER_API_ID,
            buildHookId: process.env.NETLIFY_WEB_DOCUMENT_BUILDER_HOOK_ID,
            name: 'umich-lib-design-system',
            url: 'https://umich-lib-design-system.netlify.app',
          }
        ]
      }
    }
  ]
}