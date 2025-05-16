import { Transformer } from '@/core';
import type {
  TCartDiscountShippingCostTarget,
  TCartDiscountShippingCostTargetGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCartDiscountShippingCostTarget,
    TCartDiscountShippingCostTarget
  >('default', {}),
  rest: Transformer<
    TCartDiscountShippingCostTarget,
    TCartDiscountShippingCostTarget
  >('rest', {}),
  graphql: Transformer<
    TCartDiscountShippingCostTarget,
    TCartDiscountShippingCostTargetGraphql
  >('graphql', {
    addFields: () => ({
      __typename: 'ShippingTarget',
    }),
  }),
};

export default transformers;
