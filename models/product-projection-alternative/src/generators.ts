import {
  LocalizedField,
  LocalizedString,
  Reference,
} from '@commercetools-test-data/commons';
import {
  Generator,
  fake,
  sequence,
  nestedModel,
} from '@commercetools-test-data/core';
import { ProductVariant } from '@commercetools-test-data/product';
import { ProductType } from '@commercetools-test-data/product-type';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TProductProjectionGraphql, TProductProjectionRest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsInitializers = {
  id: fake((f) => f.string.uuid()),
  key: fake((f) => f.lorem.words()),
  version: sequence(),
  createdAt: fake(getOlderDate),
  lastModifiedAt: fake(getNewerDate),
  categories: nestedModel(() => []),
  searchKeywords: [],
  hasStagedChanges: fake((f) => f.datatype.boolean()),
  published: fake((f) => f.datatype.boolean()),
  masterVariant: nestedModel(() => ProductVariant.random()),
  variants: nestedModel(() => []),
  taxCategory: nestedModel(() => null),
  state: nestedModel(() => null),
  reviewRatingStatistics: null,
  priceMode: null,
};

export const restGenerator = Generator<TProductProjectionRest>({
  fields: {
    ...commonFieldsInitializers,
    productType: nestedModel(() =>
      Reference.random().typeId('product-type').obj(ProductType.random())
    ),
    name: nestedModel(() => LocalizedString.random()),
    description: nestedModel(() => LocalizedString.random()),
    slug: nestedModel(() => LocalizedString.presets.ofSlugs()),
    metaTitle: nestedModel(() => null),
    metaDescription: nestedModel(() => null),
    metaKeywords: nestedModel(() => null),
    categoryOrderHints: null,
  },
});

export const graphqlGenerator = Generator<TProductProjectionGraphql>({
  fields: {
    ...commonFieldsInitializers,
    productType: nestedModel(() => ProductType.random()),
    productTypeRef: nestedModel(() =>
      Reference.random().typeId('product-type')
    ),
    name: fake((f) => f.lorem.words(3)),
    nameAllLocales: nestedModel(() => [LocalizedField.random()]),
    description: fake((f) => f.lorem.words(3)),
    descriptionAllLocales: nestedModel(() => [LocalizedField.random()]),
    slug: fake((f) => f.lorem.words(3)),
    slugAllLocales: nestedModel(() => [LocalizedField.random()]),
    metaTitle: null,
    metaTitleAllLocales: nestedModel(() => null),
    metaDescription: null,
    metaDescriptionAllLocales: nestedModel(() => null),
    metaKeywords: null,
    metaKeywordsAllLocales: nestedModel(() => null),
    categoryOrderHints: [],
    categoriesRef: nestedModel(() => []),
    stateRef: nestedModel(() => null),
    taxCategoryRef: nestedModel(() => null),
    __typename: 'ProductProjection',
  },
});
