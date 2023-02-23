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
    price: fake(() => Price.random()),
    // TODO: add attributes and transform to `RawProductAttribute` for gql when necessary
    attributes: [],
    images: fake(() => [Image.random()]),
    assets: [],
    availability: null,
    isMatchingVariant: null,
    scopedPrice: null,
    scopedPriceDiscounted: null,
  },
});

export default generator;
