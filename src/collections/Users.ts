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
  fields: [],
}
