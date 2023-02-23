import { fake, Generator } from '@commercetools-test-data/core';
import * as Image from '@commercetools-test-data/image';
import * as Price from '@commercetools-test-data/price';
import { TProductVariantDraft } from '../types';

// https://docs.commercetools.com/api/projects/products#productvariantdraft

const generator = Generator<TProductVariantDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    sku: fake((f) => f.random.word()),
    prices: fake(() => [Price.PriceDraft.random()]),
    // TODO: place Attributes here when rebasing
    attributes: [],
    images: fake(() => [Image.random()]),
    assets: [],
  },
});

export default generator;
