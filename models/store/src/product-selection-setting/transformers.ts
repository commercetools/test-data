import { Transformer } from '@commercetools-test-data/core';
import type {
  TProductSelectionSetting,
  TProductSelectionSettingGraphql,
} from './types';

const transformers = {
  default: Transformer<TProductSelectionSetting, TProductSelectionSetting>(
    'default',
    {
      buildFields: ['productSelection'],
    }
  ),
  rest: Transformer<TProductSelectionSetting, TProductSelectionSetting>(
    'rest',
    {
      buildFields: ['productSelection'],
    }
  ),
  graphql: Transformer<
    TProductSelectionSetting,
    TProductSelectionSettingGraphql
  >('graphql', {
    buildFields: ['productSelection'],
  }),
};

export default transformers;
