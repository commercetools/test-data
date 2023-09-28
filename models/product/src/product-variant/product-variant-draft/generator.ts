import { Price } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import * as Attribute from '../../attribute';
import { ImageDraft } from '../../image';
import type { TProductVariantDraft } from '../types';

// https://docs.commercetools.com/api/projects/products#productvariantdraft

const generator = Generator<TProductVariantDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    sku: fake((f) => `${f.lorem.word()}-${f.string.alphanumeric(3)}`),
    prices: fake(() => [Price.PriceDraft.random()]),
    attributes: fake(() => [Attribute.AttributeDraft.random()]),
    images: fake(() => [ImageDraft.random()]),
    assets: [],
  },
});

export default generator;
