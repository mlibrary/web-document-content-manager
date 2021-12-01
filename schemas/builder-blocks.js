// Docs reference: https://www.sanity.io/docs/block-type#wx1MT31k
const dont_and_dos_options = {
  styles: [],
  lists: [
    { title: 'Bullet', value: 'bullet' },
  ]
}

export default {
  title: 'Builder Blocks',
  name: 'builder_blocks',
  type: 'array',
  of: [
    {
      type: 'block'
    },
    {
      title: "Don't and Do",
      name: 'dont_and_do',
      type: 'object',
      fields: [
        {
          name: 'dont_and_do_dont',
          type: "array",
          title: "Don't",
          of: [{ type: 'block', ...dont_and_dos_options }],
          
        },
        {
          name: 'dont_and_do_do',
          type: "array",
          title: "Do",
          of: [{ type: 'block', ...dont_and_dos_options }],
          
        }
      ]
    },
    {
      title: 'Code Preview',
      name: 'code_preview',
      type: 'object',
      fields: [
        {
          title: 'HTML',
          name: 'code_preview_code',
          type: 'code',
          options: {
            language: 'html'
          }
        }
      ]
    },
    {
      title: 'Callout',
      name: 'callout',
      type: 'object',
      fields: [
        {
          title: 'Content',
          type: 'array',
          name: 'callout_content',
          of: [
            {
              type: 'block'
            }
          ]
        }
      ]
    },
    {
      title: 'Colors',
      name: 'colors',
      type: 'object',
      readOnly: true,
      fields: [
        {
          title: 'Optional note',
          name: 'colors_string',
          type: 'string',
          description: 'This input is not used for anyhting, although Sanity requires at least one field. Maybe there is another way...'
        }
      ]
    }
  ]
}