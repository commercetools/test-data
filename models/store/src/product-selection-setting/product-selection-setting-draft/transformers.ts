import { Transformer } from '@commercetools-test-data/core';
import type { TProductSelectionSettingDraft } from '../types';

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
  // ProductSelectionSettingDraft/ProductSelectionSettingInput does not exist in a graphql format
};

export default transformers;
