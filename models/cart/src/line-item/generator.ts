import * as Channel from '@commercetools-test-data/channel';
import {
  CentPrecisionMoney,
  LocalizedString,
  Reference,
  Price,
} from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { ProductVariant } from '@commercetools-test-data/product-variant';
import { TaxRate } from '@commercetools-test-data/tax-category';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { inventoryMode, lineItemMode, priceMode } from './constants';
import { TLineItem } from './types';

// https://docs.commercetools.com/api/projects/carts#lineitem

const [addedAt, lastModifiedAt] = createRelatedDates();

const generator = Generator<TLineItem>({
  fields: {
    id: fake((f) => f.string.uuid()),
    productId: fake((f) => f.string.uuid()),
    productKey: fake((f) => f.lorem.slug(2)),
    name: fake(() => LocalizedString.random()),
    productSlug: fake(() => LocalizedString.presets.ofSlugs()),
    productType: fake(() => Reference.random().typeId('product-type')),
    variant: fake(() => ProductVariant.random()),
    price: fake(() => Price.random()),
    taxedPrice: null,
    taxedPricePortions: [],
    totalPrice: fake(() => CentPrecisionMoney.random()),
    quantity: fake((f) =>
      f.number.int({
        min: 1,
      })
    ),
    addedAt: fake(addedAt),
    state: [],
    taxRate: fake(() => TaxRate.random()),
    perMethodTaxRate: [],
    supplyChannel: fake(() => Channel.random()),
    distributionChannel: fake(() => Channel.random()),
    discountedPricePerQuantity: [],
    priceMode: oneOf(...Object.values(priceMode)),
    lineItemMode: oneOf(...Object.values(lineItemMode)),
    custom: null,
    inventoryMode: oneOf(...Object.values(inventoryMode)),
    shippingDetails: null,
    lastModifiedAt: fake(lastModifiedAt),
  },
});

export default generator;
