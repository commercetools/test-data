import { Transformer } from '@commercetools-test-data/core';
import type {
  TProductSelectionDraft,
  TProductSelectionDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TProductSelectionDraft, TProductSelectionDraft>(
    'default',
    {
      buildFields: ['name'],
    }
  ),
  rest: Transformer<TProductSelectionDraft, TProductSelectionDraft>('rest', {
    buildFields: ['name'],
  }),

  graphql: Transformer<TProductSelectionDraft, TProductSelectionDraftGraphql>(
    'graphql',
    {
      removeFields: ['name', 'type'],
      addFields: ({ fields }) => ({
        nameAllLocales: buildField(fields.name, 'graphql', {
          fieldToBuild: 'name',
        }),
        //todo: ProductRefs
        __typename: 'ProductSelection',
      }),
    }
  ),
};

export default transformers;
