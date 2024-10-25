import { Transformer } from '@commercetools-test-data/core';
import {
  TCartDiscountTotalPriceTarget,
  TCartDiscountTotalPriceTargetGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCartDiscountTotalPriceTarget,
    TCartDiscountTotalPriceTarget
  >('default', {}),
  rest: Transformer<
    TCartDiscountTotalPriceTarget,
    TCartDiscountTotalPriceTarget
  >('rest', {}),
  graphql: Transformer<
    TCartDiscountTotalPriceTarget,
    TCartDiscountTotalPriceTargetGraphql
  >('graphql', {
    addFields: () => ({
      __typename: 'CartDiscountTotalPriceTarget',
    }),
  }),
};

export default transformers;
