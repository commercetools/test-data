import { Transformer } from '@commercetools-test-data/core';
import type { TCartDraft, TCartDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TCartDraft, TCartDraft>('default', {
    buildFields: [
      'customerGroup',
      'businessUnit',
      'lineItems',
      'shippingAddress',
      'billingAddress',
      'shippingMethod',
    ],
  }),
  rest: Transformer<TCartDraft, TCartDraft>('rest', {
    buildFields: [
      'customerGroup',
      'businessUnit',
      'lineItems',
      'shippingAddress',
      'billingAddress',
      'shippingMethod',
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
    ],
    addFields: () => ({ __typename: 'CartDraft' }),
  }),
};

export default transformers;
