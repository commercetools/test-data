import * as Attribute from '@commercetools-test-data/attribute';
import { fake, Generator } from '@commercetools-test-data/core';
import * as Image from '@commercetools-test-data/image';
import * as Price from '@commercetools-test-data/price';
import { TProductVariant } from './types';

// https://docs.commercetools.com/api/projects/products#productvariant

const generator = Generator<TProductVariant>({
  fields: {
    id: fake((f) => f.datatype.uuid()),
    key: fake((f) => f.lorem.slug(2)),
    sku: fake((f) => f.random.word()),
    prices: fake(() => [Price.random()]),
    price: null,
    attributes: fake(() => [Attribute.random()]),
    images: fake(() => [Image.random()]),
    assets: [],
    availability: null,
    isMatchingVariant: fake((f) => f.datatype.boolean()),
    scopedPrice: null,
    scopedPriceDiscounted: null,
  },
});

export default generator;
