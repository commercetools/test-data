import { Transformer } from '@commercetools-test-data/core';
import type {
  TCustomLineItemDraft,
  TCustomLineItemDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TCustomLineItemDraft, TCustomLineItemDraft>('default', {
    buildFields: ['money'],
  }),
  rest: Transformer<TCustomLineItemDraft, TCustomLineItemDraft>('rest', {
    buildFields: ['money'],
  }),
  //scaffolding only
  graphql: Transformer<TCustomLineItemDraft, TCustomLineItemDraftGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'CustomLineItemDraft',
      }),
    }
  ),
};

export default transformers;