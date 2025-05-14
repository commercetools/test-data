import { Transformer } from '@/core';
import { LocalizedString } from '@/models/commons';
import type { TProductSelection, TProductSelectionGraphql } from './types';

const transformers = {
  default: Transformer<TProductSelection, TProductSelection>('default', {
    buildFields: ['createdBy', 'lastModifiedBy', 'name'],
  }),
  rest: Transformer<TProductSelection, TProductSelection>('rest', {
    buildFields: ['createdBy', 'lastModifiedBy', 'name'],
  }),

  graphql: Transformer<TProductSelection, TProductSelectionGraphql>('graphql', {
    buildFields: ['createdBy', 'lastModifiedBy'],
    removeFields: ['name'],
    addFields: ({ fields }) => ({
      nameAllLocales: LocalizedString.toLocalizedField(fields.name),
      productRefs: null,
      __typename: 'ProductSelection',
    }),
  }),
};

export default transformers;
