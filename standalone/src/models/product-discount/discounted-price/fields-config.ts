import { ProductDiscount } from '..';
import { fake, TModelFieldsConfig } from '../../../core';
import {
  Money,
  ReferenceGraphql,
  ReferenceRest,
} from '../../commons';
import type { TDiscountedPriceGraphql, TDiscountedPriceRest } from './types';

// https://docs.commercetools.com/api/types#discountedprice
/**
 * value - Reference to Money
 * discount - Reference to a ProductDiscount Reference Object {typeId, id}
 */
const commonFieldsConfig = {
  value: fake(() => Money.random()),
};

export const restFieldsConfig: TModelFieldsConfig<TDiscountedPriceRest> = {
  fields: {
    ...commonFieldsConfig,
    discount: fake(() => ReferenceRest.presets.productDiscountReference()),
  },
};

/**
 * discountRef - Reference to a ProductDiscount Reference Object {typeId, id}
 */
export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountedPriceGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'DiscountedProductPriceValue',
      discount: fake(() => ProductDiscount.random()),
      discountRef: fake(() =>
        ReferenceGraphql.presets.productDiscountReference()
      ),
    },
    postBuild: (model) => {
      if (model.discount) {
        model.discountRef = ReferenceGraphql.presets
          .productDiscountReference()
          .id(model.discount.id)
          .buildGraphql();
      }

      return model;
    },
  };
