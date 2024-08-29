import type { ShippingInfo } from '@commercetools/platform-sdk';
import { CentPrecisionMoney } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { ShippingRate } from '@commercetools-test-data/shipping-method';

// https://docs.commercetools.com/api/projects/carts#shippinginfo

const generator = Generator<ShippingInfo>({
  fields: {
    shippingMethodName: fake((f) => f.lorem.words(2)),
    price: fake(() => CentPrecisionMoney.random()),
    shippingRate: fake(() => ShippingRate.random()),
    taxedPrice: null,
    taxRate: null,
    taxCategory: null,
    shippingMethod: null,
    deliveries: [],
    discountedPrice: null,
    shippingMethodState: fake((f) =>
      f.helpers.arrayElement(['MatchesCart', 'DoesNotMatchCart'])
    ),
  },
});

export default generator;
