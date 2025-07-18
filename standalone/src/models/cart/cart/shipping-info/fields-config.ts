import { fake, type TModelFieldsConfig } from '@/core';
import { CentPrecisionMoney, Reference } from '@/models/commons';
import { ShippingRate } from '@/models/shipping-method';
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
      ...model,
      shippingMethodRef: model.shippingMethod
        ? Reference.presets
            .shippingMethodReference()
            .id(model.shippingMethod.id)
            .buildGraphql()
        : model.shippingMethodRef,
    };
  },
};
