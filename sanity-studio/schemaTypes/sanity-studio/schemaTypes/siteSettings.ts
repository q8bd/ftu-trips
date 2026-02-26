import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitleEn',
      title: 'Site Title (English)',
      type: 'string',
    }),
    defineField({
      name: 'siteTitleAr',
      title: 'Site Title (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Format: 96560041555 (without +)',
    }),
    defineField({
      name: 'ftuLogo',
      title: 'FTU Adventure Logo',
      type: 'image',
      description: 'White transparent logo',
    }),
    defineField({
      name: 'beyondDestinationLogo',
      title: 'Beyond Destination Logo',
      type: 'image',
      description: 'Purple logo',
    }),
    defineField({
      name: 'heroTitleEn',
      title: 'Hero Title (English)',
      type: 'string',
    }),
    defineField({
      name: 'heroTitleAr',
      title: 'Hero Title (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitleEn',
      title: 'Hero Subtitle (English)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroSubtitleAr',
      title: 'Hero Subtitle (Arabic)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
