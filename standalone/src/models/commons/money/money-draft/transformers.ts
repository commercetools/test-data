import { Transformer } from '../../../../core';
import type { TMoneyDraft, TMoneyDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TMoneyDraft, TMoneyDraft>('default', {
    buildFields: [],
  }),
  rest: Transformer<TMoneyDraft, TMoneyDraft>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TMoneyDraft, TMoneyDraftGraphql>('graphql', {
    buildFields: [],
  }),
};

export default transformers;
