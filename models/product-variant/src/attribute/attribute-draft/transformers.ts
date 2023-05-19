import { Transformer } from '@commercetools-test-data/core';
import type { TAttributeDraft, TAttributeDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TAttributeDraft, TAttributeDraft>('default', {}),
  rest: Transformer<TAttributeDraft, TAttributeDraft>('rest', {}),
  graphql: Transformer<TAttributeDraft, TAttributeDraftGraphql>('graphql', {
    replaceFields: ({ fields }) => ({
      ...fields,
      // Unlike the HTTP API, the GraphQL API only accepts strings for `value`.
      value: JSON.stringify(fields.value),
    }),
  }),
};

export default transformers;
