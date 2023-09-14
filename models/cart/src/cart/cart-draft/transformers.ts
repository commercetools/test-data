import { Transformer } from '@commercetools-test-data/core';
import type { TCartDraft, TCartDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TCartDraft, TCartDraft>('default', {
    buildFields: [
      'customerGroup',
      'customLineItems',
      'businessUnit',
      'lineItems',
      'shippingAddress',
      'billingAddress',
      'shippingMethod',
      'store',
    ],
  }),
  rest: Transformer<TCartDraft, TCartDraft>('rest', {
    buildFields: [
      'customerGroup',
      'customLineItems',
      'businessUnit',
      'lineItems',
      'shippingAddress',
      'billingAddress',
      'shippingMethod',
      'store',
    ],
  }),
  graphql: Transformer<TCartDraft, TCartDraftGraphql>('graphql', {
    buildFields: [
      'customerGroup',
      'businessUnit',
      'lineItems',
      'shippingAddress',
      'billingAddress',
      'shippingMethod',
      'store',
    ],
  }),
};

export default transformers;
