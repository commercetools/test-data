import { Transformer } from '@commercetools-test-data/core';
import type { TZoneRate, TZoneRateGraphql } from './types';

const transformers = {
  default: Transformer<TZoneRate, TZoneRate>('default', {
    buildFields: ['zone', 'shippingRates'],
  }),
  rest: Transformer<TZoneRate, TZoneRate>('rest', {
    buildFields: ['zone', 'shippingRates'],
  }),
  graphql: Transformer<TZoneRate, TZoneRateGraphql>('graphql', {
    buildFields: ['zone', 'shippingRates'],
    addFields: () => ({
      __typename: 'ZoneRate',
    }),
  }),
};

export default transformers;
