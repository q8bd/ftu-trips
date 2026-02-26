import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'trip',
  title: 'Trip',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier (e.g., scotland, south-africa)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleAr',
      title: 'Title (Arabic)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitleEn',
      title: 'Subtitle (English)',
      type: 'string',
    }),
    defineField({
      name: 'subtitleAr',
      title: 'Subtitle (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cardImage',
      title: 'Card Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., "12 Days / 11 Nights"',
    }),
    defineField({
      name: 'dates',
      title: 'Dates',
      type: 'string',
      description: 'e.g., "March 20 - 31, 2025"',
    }),
    defineField({
      name: 'itinerary',
      title: 'Itinerary',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'itineraryDay'}]}],
    }),
    defineField({
      name: 'accommodations',
      title: 'Accommodations',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'accommodation'}]}],
    }),
    defineField({
      name: 'importantNotesEn',
      title: 'Important Notes (English)',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'importantNotesAr',
      title: 'Important Notes (Arabic)',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'recommendations',
      title: 'Recommendations',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'recommendation'}]}],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which trips appear on the homepage',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
