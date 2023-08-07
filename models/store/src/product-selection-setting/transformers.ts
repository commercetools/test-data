import { Reference } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type {
  TProductSelectionSettingRest,
  TProductSelectionSetting,
  TProductSelectionSettingGraphql,
} from './types';

//TODO: correct replaceFields for rest
//TODO: what are we doing for default??
//TODO: fix test for default
//TODO: comment? For consistency, the shape of the default matches that of rest.
//TODO: graphql spec...missing properties from productSelection grap

// Default/Rest solely use productSelectionId, while graphql uses both the productSelectionReference and productSelection object.
const transformers = {
  default: Transformer<TProductSelectionSetting, TProductSelectionSetting>(
    'default',
    {
      buildFields: ['productSelection'],
    }
  ),

  rest: Transformer<TProductSelectionSetting, TProductSelectionSettingRest>(
    'rest',
    {
      buildFields: ['productSelection'],
      replaceFields: ({ fields }) => ({
        ...fields,
        productSelection: fields.productSelection
          ? Reference.random()
              .id(fields.productSelection.id)
              .typeId('product-selection')
              .buildRest()
          : undefined,
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
