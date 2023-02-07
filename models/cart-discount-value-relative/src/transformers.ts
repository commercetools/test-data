import { Transformer } from '@commercetools-test-data/core';
import type {
  TCartDiscountValueRelative,
  TCartDiscountValueRelativeGraphql,
} from './types';

const transformers = {
  default: Transformer<TCartDiscountValueRelative, TCartDiscountValueRelative>(
    'default',
    {
      buildFields: [],
    }
  ),
  rest: Transformer<TCartDiscountValueRelative, TCartDiscountValueRelative>(
    'rest',
    {
      buildFields: [],
    }
  ),
  graphql: Transformer<
    TCartDiscountValueRelative,
    TCartDiscountValueRelativeGraphql
  >('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'CartDiscountValueRelative',
    }),
  }),
};

export default transformers;
