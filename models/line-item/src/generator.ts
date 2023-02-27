import * as CentPrecisionMoney from '@commercetools-test-data/cent-precision-money';
import * as Channel from '@commercetools-test-data/channel';
import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import * as Price from '@commercetools-test-data/price';
import * as ProductVariant from '@commercetools-test-data/product-variant';
import * as TaxRate from '@commercetools-test-data/tax-rate';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { inventoryMode, lineItemMode, priceMode } from './constants';
import { TLineItem } from './types';

// https://docs.commercetools.com/api/projects/carts#lineitem

const [addedAt, lastModifiedAt] = createRelatedDates();

const generator = Generator<TLineItem>({
  fields: {
    id: fake((f) => f.datatype.uuid()),
    productId: fake((f) => f.datatype.uuid()),
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
      f.datatype.number({
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
