import { Transformer } from '@commercetools-test-data/core';
import type { TOrderFromCartDraft, TOrderFromCartDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TOrderFromCartDraft, TOrderFromCartDraft>('default', {
    buildFields: [],
  }),
  rest: Transformer<TOrderFromCartDraft, TOrderFromCartDraft>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TOrderFromCartDraft, TOrderFromCartDraftGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({ __typename: 'MoneyInput' }),
    }
  ),
};

export default transformers;
