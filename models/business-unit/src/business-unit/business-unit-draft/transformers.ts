import { Transformer } from '@commercetools-test-data/core';
import type { TBusinessUnitDraft, TBusinessUnitDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TBusinessUnitDraft, TBusinessUnitDraft>('default', {
    buildFields: ['addresses'],
  }),
  rest: Transformer<TBusinessUnitDraft, TBusinessUnitDraft>('rest', {
    buildFields: ['addresses'],
  }),
  graphql: Transformer<TBusinessUnitDraft, TBusinessUnitDraftGraphql>(
    'graphql',
    { buildFields: [] }
  ),
};

export default transformers;
