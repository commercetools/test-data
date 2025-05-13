import { type TModelFieldsConfig, fake, sequence } from '@/core';
import { LocalizedString, Reference } from '@/models/commons';
import { ProductVariant } from '@/models/product';
import { ProductType } from '@/models/product-type';
import { createRelatedDates } from '@/utils';
import type {
  TProductProjectionGraphql,
  TProductProjectionRest,
} from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  fields: {
    id: fake((f) => f.string.uuid()),
    key: fake((f) => f.lorem.words()),
    version: sequence(),
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    productType: fake(() => ProductType.random()),
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
};

export const restFieldsConfig: TModelFieldsConfig<TProductProjectionRest> = {
  fields: {
    ...commonFieldsConfig.fields,
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
    slug: fake(() => LocalizedString.presets.ofSlugs()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TProductProjectionGraphql> =
  {
    fields: {
      ...commonFieldsConfig.fields,
      __typename: 'ProductProjection',
      allVariants: [],
      categoriesRef: [],
      categoryOrderHints: [],
      description: null,
      descriptionAllLocales: fake(() => LocalizedString.random()),
      metaDescriptionAllLocales: null,
      metaKeywordsAllLocales: null,
      metaTitleAllLocales: null,
      name: null,
      nameAllLocales: fake(() => LocalizedString.random()),
      productTypeRef: null,
      slug: null,
      slugAllLocales: fake(() => LocalizedString.presets.ofSlugs()),
      stateRef: null,
      taxCategoryRef: null,
    },
    postBuild: (model) => {
      const categoriesRef = model.categories.map((category) =>
        Reference.presets.categoryReference().id(category.id).buildGraphql()
      );
      const description = model.descriptionAllLocales
        ? LocalizedString.resolveGraphqlDefaultLocaleValue(
            model.descriptionAllLocales
          )
        : null;
      const metaDescription = model.metaDescriptionAllLocales
        ? LocalizedString.resolveGraphqlDefaultLocaleValue(
            model.metaDescriptionAllLocales
          )
        : null;
      const metaKeywords = model.metaKeywordsAllLocales
        ? LocalizedString.resolveGraphqlDefaultLocaleValue(
            model.metaKeywordsAllLocales
          )
        : null;
      const metaTitle = model.metaTitleAllLocales
        ? LocalizedString.resolveGraphqlDefaultLocaleValue(
            model.metaTitleAllLocales
          )
        : null;
      const name = model.nameAllLocales
        ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
        : null;
      const productTypeRef = model.productType
        ? Reference.presets
            .productTypeReference()
            .id(model.productType.id)
            .buildGraphql()
        : undefined;
      const slug = model.slugAllLocales
        ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.slugAllLocales)
        : null;
      const stateRef = model.state
        ? Reference.presets.stateReference().id(model.state.id).buildGraphql()
        : null;
      const taxCategoryRef = model.taxCategory
        ? Reference.presets
            .taxCategoryReference()
            .id(model.taxCategory.id)
            .buildGraphql()
        : null;

      return {
        categoriesRef,
        description,
        metaDescription,
        metaKeywords,
        metaTitle,
        name,
        productTypeRef,
        slug,
        stateRef,
        taxCategoryRef,
      };
    },
  };
