export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Web Document Builder',
            apiId: process.env.NETLIFY_WEB_DOCUMENT_BUILDER_API_ID,
            buildHookId: process.env.NETLIFY_WEB_DOCUMENT_BUILDER_HOOK_ID,
            name: 'umich-lib-web-documents',
            url: 'https://umich-lib-web-documents.netlify.app',
          }
        ]
      }
    }
  ]
}