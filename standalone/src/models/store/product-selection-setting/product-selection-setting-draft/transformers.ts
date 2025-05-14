import { Transformer } from '@/core';
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
  }),
};

export default transformers;
