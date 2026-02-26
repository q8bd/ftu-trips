import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'recommendation',
  title: 'Recommendation',
  type: 'document',
  fields: [
    defineField({
      name: 'nameEn',
      title: 'Name (English)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nameAr',
      title: 'Name (Arabic)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Restaurant', value: 'restaurant'},
          {title: 'Cafe', value: 'cafe'},
          {title: 'Market', value: 'market'},
          {title: 'Activity', value: 'activity'},
          {title: 'Shopping', value: 'shopping'},
          {title: 'Attraction', value: 'attraction'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Description (English)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'descriptionAr',
      title: 'Description (Arabic)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'locationEn',
      title: 'Location (English)',
      type: 'string',
    }),
    defineField({
      name: 'locationAr',
      title: 'Location (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram Handle',
      type: 'string',
      description: 'e.g., @restaurantname',
    }),
  ],
  preview: {
    select: {
      nameEn: 'nameEn',
      category: 'category',
      media: 'image',
    },
    prepare({nameEn, category, media}) {
      return {
        title: nameEn,
        subtitle: category,
        media,
      }
    },
  },
})
