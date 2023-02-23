import { Transformer } from '@commercetools-test-data/core';
import type { TAttributeDraft, TAttributeDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TAttributeDraft, TAttributeDraft>('default', {}),
  rest: Transformer<TAttributeDraft, TAttributeDraft>('rest', {}),
  graphql: Transformer<TAttributeDraft, TAttributeDraftGraphql>('graphql', {
    addFields: () => ({ __typename: 'ProductAttributeInput' }),
  }),
};

export default transformers;
