import type { CollectionConfig } from 'payload'

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
      name: 'album',
      label: 'Alben',
      type: 'relationship', // Beziehungstyp ändern
      relationTo: 'album', // Verknüpfung zur 'album'-Collection herstellen
      hasMany: true,
      admin: {
        isClearable: true,
        isSortable: true,
      },
    },
  ],
}
