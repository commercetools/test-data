import { Price } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import * as Attribute from '../attribute';
import * as Image from '../image';
import type { TProductVariant } from './types';

// https://docs.commercetools.com/api/projects/products#productvariant

const generator = Generator<TProductVariant>({
  fields: {
    id: fake((f) => f.datatype.uuid()),
    key: fake((f) => f.lorem.slug(2)),
    sku: fake((f) => `${f.random.word()}-${f.random.alphaNumeric(3)}`),
    prices: fake(() => [Price.random()]),
    price: null,
    attributes: fake(() => [Attribute.random()]),
    images: fake(() => [Image.random()]),
    assets: [],
    availability: null,
    isMatchingVariant: fake(() => false),
    scopedPrice: null,
    scopedPriceDiscounted: null,
  },
});

export default generator;
