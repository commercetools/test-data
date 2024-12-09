import {
  CentPrecisionMoney,
  Reference,
} from '@commercetools-test-data/commons';
import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import { ShippingRate } from '@commercetools-test-data/shipping-method';
import type { TShippingInfoGraphql, TShippingInfoRest } from './types';

const commonFieldsConfig = {
  deliveries: [],
  discountedPrice: null,
  price: fake(() => CentPrecisionMoney.random()),
  shippingMethod: null,
  shippingMethodName: fake((f) => f.lorem.words(2)),
  shippingMethodState: fake((f) =>
    f.helpers.arrayElement(['DoesNotMatchCart', 'MatchesCart'])
  ),
  shippingRate: fake(() => ShippingRate.random()),
  taxCategory: null,
  taxRate: null,
  taxedPrice: null,
};

export const restFieldsConfig: TModelFieldsConfig<TShippingInfoRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TShippingInfoGraphql> = {
  fields: {
    ...commonFieldsConfig,
    shippingMethodRef: null,
    taxCategoryRef: null,
    __typename: 'ShippingInfo',
  },
  postBuild: (model) => {
    return {
      shippingMethodRef: model.shippingMethod
        ? Reference.presets
            .shippingMethodReference()
            .id(model.shippingMethod.id)
            .buildGraphql()
        : model.shippingMethodRef,
    };
  },
};
