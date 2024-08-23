import {
  LocalizedField,
  LocalizedString,
  Reference,
} from '@commercetools-test-data/commons';
import { Generator, fake, sequence } from '@commercetools-test-data/core';
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
  categories: [],
  searchKeywords: [],
  hasStagedChanges: fake((f) => f.datatype.boolean()),
  published: fake((f) => f.datatype.boolean()),
  masterVariant: fake(() => ProductVariant.random()),
  variants: [],
};

export const restGenerator = Generator<TProductProjectionRest>({
  fields: {
    ...commonFieldsInitializers,
    productType: fake(() =>
      Reference.random().typeId('product-type').obj(ProductType.random())
    ),
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
    slug: fake(() => LocalizedString.presets.ofSlugs()),
  },
});

export const graphqlGenerator = Generator<TProductProjectionGraphql>({
  fields: {
    ...commonFieldsInitializers,
    productType: fake(() => ProductType.random()),
    productTypeRef: fake(() => Reference.random().typeId('product-type')),
    name: fake((f) => f.lorem.words(3)),
    nameAllLocales: fake(() => [LocalizedField.random()]),
    description: fake((f) => f.lorem.words(3)),
    descriptionAllLocales: fake(() => [LocalizedField.random()]),
    slug: fake((f) => f.lorem.words(3)),
    slugAllLocales: fake(() => [LocalizedField.random()]),
    categoriesRef: [],
    categoryOrderHints: [],
    __typename: 'ProductProjection',
  },
});
