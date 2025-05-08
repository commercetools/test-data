import { Transformer } from '../../../../core';
import type { TZoneRateDraft, TZoneRateDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TZoneRateDraft, TZoneRateDraft>('default', {
    buildFields: ['zone', 'shippingRates'],
  }),
  rest: Transformer<TZoneRateDraft, TZoneRateDraft>('rest', {
    buildFields: ['zone', 'shippingRates'],
  }),
  graphql: Transformer<TZoneRateDraft, TZoneRateDraftGraphql>('graphql', {
    buildFields: ['zone', 'shippingRates'],
  }),
};

export default transformers;
