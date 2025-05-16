import { Transformer } from '@/core';
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
      __typename: 'RelativeDiscountValue',
    }),
  }),
};

export default transformers;
