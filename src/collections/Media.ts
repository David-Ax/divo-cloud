import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Bild',
    plural: 'Bilder',
  },
  access: {
    read: async ({ req }) => {
      const user = req.user
      return user?.role === 'viewer' || user?.role === 'admin'
    },
    create: ({ req }) => {
      const user = req.user
      return user?.role === 'admin'
    },
    update: ({ req }) => {
      const user = req.user
      return user?.role === 'admin'
    },
    delete: ({ req }) => {
      const user = req.user
      return user?.role === 'admin'
    },
  },
  fields: [
    {
      name: 'rating',
      label: 'Bewertung',
      type: 'select',
      hasMany: false,
      admin: {
        isClearable: true,
        isSortable: true,
      },
      options: [
        {
          label: 'Ausgezeichnet',
          value: 'excellent',
        },
        {
          label: 'Sehr Gut',
          value: 'very_good',
        },
        {
          label: 'Gut',
          value: 'good',
        },
        {
          label: 'Verwendbar',
          value: 'usable',
        },
        {
          label: 'Schwach',
          value: 'poor',
        },
        {
          label: 'Schlecht',
          value: 'bad',
        },
        {
          label: 'Unbrauchbar',
          value: 'unusable',
        },
      ],
    },
    {
      name: 'note',
      label: 'Anmerkung',
      type: 'textarea',
    },
  ],
  upload: true,
}
