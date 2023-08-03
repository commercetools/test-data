import { Transformer } from '@commercetools-test-data/core';
import type { TBusinessUnitDraft } from '../types';

const transformers = {
  default: Transformer<TBusinessUnitDraft, TBusinessUnitDraft>('default', {}),
  rest: Transformer<TBusinessUnitDraft, TBusinessUnitDraft>('rest', {}),
  // TODO: add graphql
  // graphql: Transformer<TBusinessUnitDraft, TBusinessUnitDraftGraphql>('graphql', {}),
};

export default transformers;
