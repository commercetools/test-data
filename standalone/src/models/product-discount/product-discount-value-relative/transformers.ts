import { Transformer } from '../../../core';
import type {
  TProductDiscountValueRelative,
  TProductDiscountValueRelativeGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TProductDiscountValueRelative,
    TProductDiscountValueRelative
  >('default', {
    buildFields: [],
  }),
  rest: Transformer<
    TProductDiscountValueRelative,
    TProductDiscountValueRelative
  >('rest', {
    buildFields: [],
  }),
  graphql: Transformer<
    TProductDiscountValueRelative,
    TProductDiscountValueRelativeGraphql
  >('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'RelativeDiscountValue',
    }),
  }),
};

export default transformers;
