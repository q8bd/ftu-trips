import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'itineraryDay',
  title: 'Itinerary Day',
  type: 'document',
  fields: [
    defineField({
      name: 'dayNumber',
      title: 'Day Number',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
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
      name: 'descriptionEn',
      title: 'Description (English)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'descriptionAr',
      title: 'Description (Arabic)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'activitiesEn',
      title: 'Activities (English)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'activitiesAr',
      title: 'Activities (Arabic)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'isFreeDay',
      title: 'Is Free Day?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'image',
      title: 'Day Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      day: 'dayNumber',
      titleEn: 'titleEn',
      media: 'image',
    },
    prepare({day, titleEn, media}) {
      return {
        title: `Day <LaTex>${day}: $</LaTex>{titleEn}`,
        media,
      }
    },
  },
})
