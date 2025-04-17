import { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Benutzerkonto',
    plural: 'Benutzerkonten',
  },
  access: {
    read: ({ req }) => {
      const user = req.user
      return user?.role === 'admin'
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
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'role',
      label: 'Rolle',
      type: 'select',
      required: true,
      defaultValue: 'viewer',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Viewer',
          value: 'viewer',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
