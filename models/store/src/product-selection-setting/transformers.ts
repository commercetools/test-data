import { Transformer } from '@commercetools-test-data/core';
import type {
  TProductSelectionSetting,
  TProductSelectionSettingGraphql,
} from './types';

const transformers = {
  default: Transformer<TProductSelectionSetting, TProductSelectionSetting>(
    'default',
    {
      buildFields: [],
    }
  ),
  rest: Transformer<TProductSelectionSetting, TProductSelectionSetting>(
    'rest',
    {
      buildFields: [],
    }
  ),
  graphql: Transformer<
    TProductSelectionSetting,
    TProductSelectionSettingGraphql
  >('graphql', {
    buildFields: [],
  }),
};

export default transformers;
