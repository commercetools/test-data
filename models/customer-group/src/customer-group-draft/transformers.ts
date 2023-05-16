import { Transformer } from '@commercetools-test-data/core';
import type { TCustomerGroupDraft, TCustomerGroupDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TCustomerGroupDraft, TCustomerGroupDraft>('default', {
    buildFields: [],
  }),
  rest: Transformer<TCustomerGroupDraft, TCustomerGroupDraft>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TCustomerGroupDraft, TCustomerGroupDraftGraphql>(
    'graphql',
    {
      buildFields: [],
    }
  ),
};

export default transformers;
