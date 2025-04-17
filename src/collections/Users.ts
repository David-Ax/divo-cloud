import { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Benutzerkonto',
    plural: 'Benutzerkonten',
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
