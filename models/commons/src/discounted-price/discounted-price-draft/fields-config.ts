import { fake, TModelFieldsConfig } from '@commercetools-test-data/core';
import { ProductDiscount } from '@commercetools-test-data/product-discount';
import * as Money from '../../money';
import { ReferenceDraft } from '../../reference';
import type {
  TDiscountedPriceDraftRest,
  TDiscountedPriceDraftGraphql,
} from '../types';

// https://docs.commercetools.com/api/types#discountedpricedraft
/**
 * value - Reference to Money
 * discount - Reference to a ProductDiscount Reference Object {typeId, id}
 */
const commonFieldsConfig = {
  value: fake(() => Money.random()),
};

export const restFieldsConfig: TModelFieldsConfig<TDiscountedPriceDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    discount: fake(() => ReferenceDraft.presets.productDiscountReference()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountedPriceDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      discount: fake(() => ProductDiscount.ProductDiscountDraft.random()),
      __typename: 'DiscountedProductPriceValue',
    },
  };
