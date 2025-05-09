import { Transformer } from '../../../core';
import type {
  TCartDiscountValueAbsolute,
  TCartDiscountValueAbsoluteCartGraphql,
  TCartDiscountValueAbsoluteGraphql,
} from './types';

const transformers = {
  default: Transformer<TCartDiscountValueAbsolute, TCartDiscountValueAbsolute>(
    'default',
    {
      buildFields: ['money'],
    }
  ),
  rest: Transformer<TCartDiscountValueAbsolute, TCartDiscountValueAbsolute>(
    'rest',
    {
      buildFields: ['money'],
    }
  ),
  graphql: Transformer<
    TCartDiscountValueAbsolute,
    TCartDiscountValueAbsoluteGraphql | TCartDiscountValueAbsoluteCartGraphql
  >('graphql', {
    buildFields: ['money'],
    addFields: ({ fields }) => ({
      __typename: fields.applicationMode
        ? 'AbsoluteCartDiscountValue'
        : 'AbsoluteDiscountValue',
    }),
  }),
};

export default transformers;
