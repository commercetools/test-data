import {
  LocalizedField,
  LocalizedString,
  Reference,
} from '@commercetools-test-data/commons';
import {
  TModelFieldsConfig,
  fake,
  sequence,
} from '@commercetools-test-data/core';
import { ProductVariant } from '@commercetools-test-data/product';
import { ProductType } from '@commercetools-test-data/product-type';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TProductProjectionGraphql, TProductProjectionRest } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
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
  taxCategory: null,
  state: null,
  reviewRatingStatistics: null,
  priceMode: null,
};

export const restFieldsConfig: TModelFieldsConfig<TProductProjectionRest> = {
  fields: {
    ...commonFieldsConfig,
    productType: fake(() =>
      Reference.random().typeId('product-type').obj(ProductType.random())
    ),
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
    slug: fake(() => LocalizedString.presets.ofSlugs()),
    metaTitle: null,
    metaDescription: null,
    metaKeywords: null,
    categoryOrderHints: null,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TProductProjectionGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      productType: fake(() => ProductType.random()),
      productTypeRef: fake(() => Reference.random().typeId('product-type')),
      name: fake((f) => f.lorem.words(3)),
      nameAllLocales: fake(() => [LocalizedField.random()]),
      description: fake((f) => f.lorem.words(3)),
      descriptionAllLocales: fake(() => [LocalizedField.random()]),
      slug: fake((f) => f.lorem.words(3)),
      slugAllLocales: fake(() => [LocalizedField.random()]),
      metaTitle: null,
      metaTitleAllLocales: null,
      metaDescription: null,
      metaDescriptionAllLocales: null,
      metaKeywords: null,
      metaKeywordsAllLocales: null,
      categoryOrderHints: [],
      categoriesRef: [],
      stateRef: null,
      taxCategoryRef: null,
      __typename: 'ProductProjection',
    },
    postBuild: (result) => {
      return {
        name: LocalizedString.resolveGraphqlDefaultLocaleValue(
          result.nameAllLocales
        ),
        description: LocalizedString.resolveGraphqlDefaultLocaleValue(
          result.descriptionAllLocales
        ),
      };
    },
  };
