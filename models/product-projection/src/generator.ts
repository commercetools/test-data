import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import { Generator, fake, sequence } from '@commercetools-test-data/core';
import { ProductVariant } from '@commercetools-test-data/product';
import { ProductType } from '@commercetools-test-data/product-type';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TProductProjection } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

export default Generator<TProductProjection>({
  fields: {
    id: fake((f) => f.string.uuid()),
    key: fake((f) => f.lorem.words()),
    version: sequence(),
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    productType: fake(() =>
      Reference.random()
        .typeId('product-type')
        .obj(ProductType.random().id('isla-bonita'))
    ),
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
    slug: fake(() => LocalizedString.presets.ofSlugs()),
    categories: [],
    categoryOrderHints: null,
    metaTitle: null,
    metaDescription: null,
    metaKeywords: null,
    searchKeywords: [],
    hasStagedChanges: fake((f) => f.datatype.boolean()),
    published: fake((f) => f.datatype.boolean()),
    masterVariant: fake(() => ProductVariant.random()),
    variants: [],
    taxCategory: null,
    state: null,
    reviewRatingStatistics: null,
    priceMode: null,
  },
});
