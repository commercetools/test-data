import { Transformer } from '@commercetools-test-data/core';
import type { TZoneRateDraft, TZoneRateDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TZoneRateDraft, TZoneRateDraft>('default', {
    buildFields: [],
  }),
  rest: Transformer<TZoneRateDraft, TZoneRateDraft>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TZoneRateDraft, TZoneRateDraftGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({ __typename: 'ZoneRateDraft' }),
  }),
};

export default transformers;
