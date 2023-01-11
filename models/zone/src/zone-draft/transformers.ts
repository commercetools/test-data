import { Transformer } from '@commercetools-test-data/core';
import type { TZoneDraft, TZoneDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TZoneDraft, TZoneDraft>('default', {
    buildFields: [],
  }),
  rest: Transformer<TZoneDraft, TZoneDraft>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TZoneDraft, TZoneDraftGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'ZoneDraft',
    }),
  }),
};

export default transformers;
