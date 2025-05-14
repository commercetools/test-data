import { Transformer } from '@/core';
import type {
  THighPrecisionMoneyDraft,
  THighPrecisionMoneyDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<THighPrecisionMoneyDraft, THighPrecisionMoneyDraft>(
    'default',
    { buildFields: [] }
  ),
  rest: Transformer<THighPrecisionMoneyDraft, THighPrecisionMoneyDraft>(
    'rest',
    { buildFields: [] }
  ),
  graphql: Transformer<
    THighPrecisionMoneyDraft,
    THighPrecisionMoneyDraftGraphql
  >('graphql', {
    buildFields: [],
  }),
};

export default transformers;
