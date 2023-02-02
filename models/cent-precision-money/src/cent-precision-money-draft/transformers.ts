import { Transformer } from '@commercetools-test-data/core';
import type {
  TCentPrecisionMoneyDraft,
  TCentPrecisionMoneyDraftGraphql,
} from './types';

const transformers = {
  default: Transformer<TCentPrecisionMoneyDraft, TCentPrecisionMoneyDraft>(
    'default',
    { buildFields: [] }
  ),
  rest: Transformer<TCentPrecisionMoneyDraft, TCentPrecisionMoneyDraft>(
    'rest',
    { buildFields: [] }
  ),
  graphql: Transformer<
    TCentPrecisionMoneyDraft,
    TCentPrecisionMoneyDraftGraphql
  >('graphql', {
    buildFields: [],
    addFields: () => ({ __typename: 'MoneyInput' }),
  }),
};

export default transformers;
