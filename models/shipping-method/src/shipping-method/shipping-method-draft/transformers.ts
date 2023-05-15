import { Transformer } from '@commercetools-test-data/core';
import type {
  TShippingMethodDraft,
  TShippingMethodDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TShippingMethodDraft, TShippingMethodDraft>('default', {
    buildFields: [
      'localizedName',
      'localizedDescription',
      'taxCategory',
      'zoneRates',
      'custom',
    ],
  }),
  rest: Transformer<TShippingMethodDraft, TShippingMethodDraft>('rest', {
    buildFields: [
      'localizedName',
      'localizedDescription',
      'taxCategory',
      'zoneRates',
      'custom',
    ],
  }),
  graphql: Transformer<TShippingMethodDraft, TShippingMethodDraftGraphql>(
    'graphql',
    {
      buildFields: [
        'localizedName',
        'localizedDescription',
        'taxCategory',
        'zoneRates',
        'custom',
      ],
    }
  ),
};

export default transformers;
