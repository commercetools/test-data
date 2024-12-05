import { CentPrecisionMoney } from '@commercetools-test-data/commons';
import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import { ShippingRate } from '@commercetools-test-data/shipping-method';
import type { TShippingInfoGraphql, TShippingInfoRest } from './types';

// deliveries: Array<TCtpDelivery>;
// discountedPrice?: Maybe<TCtpDiscountedLineItemPrice>;
// price: TCtpMoney;
// shippingMethod?: Maybe<TCtpShippingMethod>;
// shippingMethodName: Scalars['String']['output'];
// shippingMethodRef?: Maybe<TCtpReference>;
// shippingMethodState: TCtpShippingMethodState;
// shippingRate: TCtpShippingRate;
// taxCategory?: Maybe<TCtpTaxCategory>;
// taxCategoryRef?: Maybe<TCtpReference>;
// taxRate?: Maybe<TCtpTaxRate>;
// taxedPrice?: Maybe<TCtpTaxedItemPrice>;

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
};
