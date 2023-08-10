import { Transformer } from '@commercetools-test-data/core';
import type {
  TProductSelectionSettingDraft,
  TProductSelectionSettingDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TProductSelectionSettingDraft,
    TProductSelectionSettingDraft
  >('default', {
    buildFields: ['productSelection'],
  }),
  rest: Transformer<
    TProductSelectionSettingDraft,
    TProductSelectionSettingDraft
  >('rest', {
    buildFields: ['productSelection'],
  }),

  graphql: Transformer<
    TProductSelectionSettingDraft,
    TProductSelectionSettingDraftGraphql
  >('graphql', {
    buildFields: ['productSelection'],
    addFields: () => ({ __typename: 'ProductSelectionSettingDraft' }),
  }),
};

export default transformers;
