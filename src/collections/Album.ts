import type { CollectionConfig } from 'payload'

export const Album: CollectionConfig = {
  slug: 'album',
  labels: {
    singular: 'Album',
    plural: 'Alben',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },

  fields: [
    {
      name: 'title',
      label: 'Titel',
      type: 'text',
      required: true,
    },
    {
      name: 'password',
      label: 'Passwort',
      type: 'text',
      required: true,
      admin: {
        description: 'Passwort zum Zugriff auf das Page (z.B. für Kunden)',
      },
    },
    {
      name: 'shootDate',
      label: 'Fototermin-Datum',
      type: 'date',
      defaultValue: () => new Date(),
      admin: {
        date: {
          displayFormat: 'dd.MM.yyyy',
        },
      },
      required: true,
    },
    {
      name: 'location',
      label: 'Ort des Shootings',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Beschreibung',
      type: 'textarea',
      admin: {
        description: 'Kurze Beschreibung zum Page oder Shooting',
      },
    },
    {
      name: 'images',
      label: 'Bilder',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      required: true,
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
  ],
}
