import {
  HighPrecisionMoney,
  Reference,
  THighPrecisionMoney,
  THighPrecisionMoneyGraphql,
  TReferenceGraphql,
} from '@commercetools-test-data/commons';
import { buildField, Transformer } from '@commercetools-test-data/core';
import { ProductDiscount, TProductDiscountGraphql } from '..';
import type {
  TDiscountedProductPriceRest,
  TDiscountedProductPriceGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TDiscountedProductPriceRest,
    TDiscountedProductPriceRest
  >('default', {
    buildFields: ['value', 'discount'],
  }),
  rest: Transformer<TDiscountedProductPriceRest, TDiscountedProductPriceRest>(
    'rest',
    {
      buildFields: ['value', 'discount'],
    }
  ),
  graphql: Transformer<
    TDiscountedProductPriceRest,
    TDiscountedProductPriceGraphql
  >('graphql', {
    buildFields: ['value'],
    replaceFields: ({ fields }) => {
      const restValue = fields.value as THighPrecisionMoney;
      const value = HighPrecisionMoney.random()
        .centAmount(restValue.centAmount)
        .currencyCode(restValue.currencyCode)
        .fractionDigits(restValue.fractionDigits)
        .preciseAmount(restValue.preciseAmount)
        .type(restValue.type)
        .buildGraphql<THighPrecisionMoneyGraphql>();
      const restProductDiscount = buildField(fields.discount, 'rest');
      const graphqlProductDiscount = ProductDiscount.random()
        .id(restProductDiscount.id)
        .buildGraphql<TProductDiscountGraphql>();
      const productDiscountRef = Reference.presets
        .productDiscountReference()
        .id(restProductDiscount.id)
        .buildGraphql<TReferenceGraphql>();

      return {
        ...fields,
        value,
        discount: graphqlProductDiscount,
        discountRef: productDiscountRef,
        __typename: 'DiscountedProductPrice',
      };
    },
  }),
};

export default transformers;
