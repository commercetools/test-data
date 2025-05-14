import { Transformer } from '@/core';
import { Reference } from '@/models/commons';

import type {
  TProductSelectionSettingRest,
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

  // Rest references productSelectionId, while graphql can access both the productSelectionReference and productSelection object.
  rest: Transformer<TProductSelectionSetting, TProductSelectionSettingRest>(
    'rest',
    {
      buildFields: ['productSelection'],
      replaceFields: ({ fields }) => ({
        ...fields,
        productSelection: Reference.random()
          .id(fields.productSelection.id)
          .typeId('product-selection')
          .buildRest(),
      }),
    }
  ),

  graphql: Transformer<
    TProductSelectionSetting,
    TProductSelectionSettingGraphql
  >('graphql', {
    buildFields: ['productSelection'],
    addFields: ({ fields }) => ({
      productSelectionRef: fields.productSelection
        ? Reference.random()
            .id(fields.productSelection.id)
            .typeId('product-selection')
            .buildGraphql()
        : null,
      __typename: 'ProductSelectionSetting',
    }),
  }),
};

export default transformers;
