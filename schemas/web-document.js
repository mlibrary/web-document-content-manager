export default {
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
      title: "Title",
      name: "title",
      type: "string",
      description: "The title of the Web Document, displayed in the browser tab and as the h1.",
      validation: Rule => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "string",
      description: "The meta description of the Web Document, so things like search engines and when sharing the link this will be used as the text when generating that preview, like in Slack or preview cards.",
      validation: Rule => Rule.required(),
    },
    {
      title: 'Body Content', 
      name: 'body',
      type: 'builder_blocks', 
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "Used for a unique Web Document URL.",
      validation: Rule => Rule.required(),
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
      title: "Website",
      name: 'website',
      type: 'reference',
      description: 'Use to decide how to render the Website Header, such as using the Website name for the Website Header name property.',
      validation: Rule => Rule.required(),
      to: {
        type: 'website'
      }
    }
  ]
}