import type { CollectionConfig } from 'payload'

export const Album: CollectionConfig = {
  slug: 'album',
  labels: {
    singular: 'Album',
    plural: 'Alben',
  },
  access: {
    read: async ({ req }) => {
      const user = req.user

      // Wenn kein User eingeloggt ist, kein Zugriff
      if (!user) return false

      // Admins haben immer Zugriff
      if (user.role === 'admin') return true

      // Für Viewer: Nur Alben, denen sie zugewiesen sind
      return {
        assignedUser: {
          equals: user.id,
        },
      }
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
      name: 'assignedUser',
      label: 'Zugewiesener Benutzer',
      type: 'relationship',
      hasMany: true,
      relationTo: 'users',
      required: true,
      access: {
        read: ({ req }) => req.user?.role === 'admin',
        update: ({ req }) => req.user?.role === 'admin',
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
