import { Transformer } from '@commercetools-test-data/core';
import type { TZoneRate, TZoneRateGraphql } from './types';

const transformers = {
  default: Transformer<TZoneRate, TZoneRate>('default', {
    buildFields: [],
  }),
  rest: Transformer<TZoneRate, TZoneRate>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TZoneRate, TZoneRateGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'ZoneRate',
    }),
  }),
};

export default transformers;
