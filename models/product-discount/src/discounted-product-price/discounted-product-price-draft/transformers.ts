import {
  HighPrecisionMoneyDraft,
  type THighPrecisionMoneyDraft,
  type THighPrecisionMoneyDraftGraphql,
} from '@commercetools-test-data/commons';
import { buildField, Transformer } from '@commercetools-test-data/core';
import { ProductDiscount, type TProductDiscountDraftGraphql } from '../..';
import type {
  TDiscountedProductPriceDraft,
  TDiscountedProductPriceDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TDiscountedProductPriceDraft,
    TDiscountedProductPriceDraft
  >('default', {
    buildFields: ['value', 'discount'],
  }),
  rest: Transformer<TDiscountedProductPriceDraft, TDiscountedProductPriceDraft>(
    'rest',
    {
      buildFields: ['value', 'discount'],
    }
  ),
  graphql: Transformer<
    TDiscountedProductPriceDraft,
    TDiscountedProductPriceDraftGraphql
  >('graphql', {
    buildFields: ['value'],
    replaceFields: ({ fields }) => {
      const restValue = fields.value as THighPrecisionMoneyDraft;
      const value = HighPrecisionMoneyDraft.random()
        .centAmount(restValue.centAmount)
        .currencyCode(restValue.currencyCode)
        .fractionDigits(restValue.fractionDigits)
        .preciseAmount(restValue.preciseAmount)
        .type(restValue.type)
        .buildGraphql<THighPrecisionMoneyDraftGraphql>();
      const restProductDiscount = buildField(fields.discount, 'rest');
      const graphqlProductDiscount = ProductDiscount.random()
        .id(restProductDiscount.id)
        .buildGraphql<TProductDiscountDraftGraphql>();
      return {
        ...fields,
        value,
        discount: graphqlProductDiscount,
        __typename: 'DiscountedProductPriceDraft',
      };
    },
  }),
};

export default transformers;
