import { Reference, TReferenceGraphql } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import {
  ShippingMethod,
  TShippingMethodGraphql,
} from '@commercetools-test-data/shipping-method';
import {
  TaxCategory,
  TTaxCategoryGraphql,
} from '@commercetools-test-data/tax-category';
import { TTaxedItemPriceGraphql } from '../taxed-item-price/types';
import type { TShippingInfo, TShippingInfoGraphql } from './types';

const buildFields: (keyof TShippingInfo)[] = [
  'taxCategory',
  'shippingMethod',
  'price',
  'shippingRate',
  'taxedPrice',
  'taxRate',
  'deliveries',
  'discountedPrice',
];

const transformers = {
  default: Transformer<TShippingInfo, TShippingInfo>('default', {
    buildFields,
  }),
  rest: Transformer<TShippingInfo, TShippingInfo>('rest', {
    buildFields,
  }),
  graphql: Transformer<TShippingInfo, TShippingInfoGraphql>('graphql', {
    buildFields,
    replaceFields: ({ fields }) => {
      const shippingMethod = fields.shippingMethod
        ? ShippingMethod.random()
            .id(fields.shippingMethod.id)
            .buildGraphql<TShippingMethodGraphql>()
        : undefined;

      const shippingMethodRef = fields.shippingMethod
        ? Reference.presets
            .shippingMethodReference()
            .id(fields.shippingMethod.id)
            .buildGraphql<TReferenceGraphql>()
        : undefined;

      const taxCategory = fields.taxCategory
        ? TaxCategory.random()
            .id(fields.taxCategory.id)
            .buildGraphql<TTaxCategoryGraphql>()
        : undefined;
      const taxCategoryRef = fields.taxCategory
        ? Reference.presets
            .taxCategoryReference()
            .id(fields.taxCategory.id)
            .buildGraphql<TReferenceGraphql>()
        : undefined;
      return {
        ...fields,
        shippingMethod,
        shippingMethodRef,
        taxCategory,
        taxCategoryRef,
        taxedPrice: fields.taxedPrice as TTaxedItemPriceGraphql,
        __typename: 'ShippingInfo',
      };
    },
  }),
};

export default transformers;
