import { Transformer } from '../../../core';
import {
  TProjectCustomLimitsProjection,
  TProjectCustomLimitsProjectionGraphql,
} from './types';

const buildFields: (keyof TProjectCustomLimitsProjection)[] = [
  'customers',
  'customerGroups',
  'zones',
  'taxCategories',
  'shippingMethods',
  'productDiscounts',
  'cartDiscounts',
  'stores',
  'shoppingLists',
  'carts',
  'businessUnits',
];

const transformers = {
  default: Transformer<
    TProjectCustomLimitsProjection,
    TProjectCustomLimitsProjection
  >('default', {
    buildFields,
  }),
  rest: Transformer<
    TProjectCustomLimitsProjection,
    TProjectCustomLimitsProjection
  >('rest', {
    buildFields,
  }),
  graphql: Transformer<
    TProjectCustomLimitsProjection,
    TProjectCustomLimitsProjectionGraphql
  >('graphql', {
    buildFields,
    addFields: () => ({
      __typename: 'ProjectCustomLimitsProjection',
    }),
  }),
};

export default transformers;
