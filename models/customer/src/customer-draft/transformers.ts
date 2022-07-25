import { Transformer } from '@commercetools-test-data/core';
import type { TCustomerDraft, TCustomerDraftGraphql } from '../../types';

const transformers = {
  default: Transformer<TCustomerDraft, TCustomerDraft>('default', {
    buildFields: [],
  }),
  rest: Transformer<TCustomerDraft, TCustomerDraft>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TCustomerDraft, TCustomerDraftGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'CustomerDraft',
    }),
  }),
};

export default transformers;
