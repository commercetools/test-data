import { Transformer } from '@commercetools-test-data/core';
import type { TCartDraft, TCartDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TCartDraft, TCartDraft>('default', { buildFields: [] }),
  rest: Transformer<TCartDraft, TCartDraft>('rest', { buildFields: [] }),
  graphql: Transformer<TCartDraft, TCartDraftGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({ __typename: 'MoneyInput' }),
  }),
};

export default transformers;
