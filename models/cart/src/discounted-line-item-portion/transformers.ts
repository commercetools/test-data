import {
  CartDiscount,
  TCartDiscountGraphql,
} from '@commercetools-test-data/cart-discount';
import { Reference, TReferenceGraphql } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import {
  TDiscountedLineItemPortion,
  TDiscountedLineItemPortionRest,
  TDiscountedLineItemPortionGraphql,
} from './types';

const buildFields: (keyof TDiscountedLineItemPortion)[] = [
  'discount',
  'discountedAmount',
];

const transformers = {
  default: Transformer<TDiscountedLineItemPortion, TDiscountedLineItemPortion>(
    'default',
    {
      buildFields,
    }
  ),
  rest: Transformer<TDiscountedLineItemPortion, TDiscountedLineItemPortionRest>(
    'rest',
    {
      buildFields,
    }
  ),
  graphql: Transformer<
    TDiscountedLineItemPortion,
    TDiscountedLineItemPortionGraphql
  >('graphql', {
    buildFields,
    replaceFields: ({ fields }) => {
      const discount = CartDiscount.random()
        .id(fields.discount.id)
        .buildGraphql<TCartDiscountGraphql>();
      const discountRef = Reference.presets
        .cartDiscountReference()
        .id(fields.discount.id)
        .buildGraphql<TReferenceGraphql>();

      return {
        ...fields,
        discount,
        discountRef,
        __typename: 'DiscountedLineItemPortion',
      };
    },
  }),
};

export default transformers;
