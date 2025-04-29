import type {
  CategoryReference,
  Category as TCtpCategory,
} from '@commercetools/platform-sdk';
import { Category } from '@commercetools-test-data/category';
import {
  LocalizedString,
  type TReferenceGraphql,
} from '@commercetools-test-data/commons';
import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import { ProductVariantGraphql, ProductVariantRest } from '../product-variant';
import { CategoryOrderHintGraphql } from './category-order-hint';
import { SearchKeywordsGraphql, SearchKeywordsRest } from './search-keywords';
import type { TProductDataGraphql, TProductDataRest } from './types';

export const restFieldsConfig: TModelFieldsConfig<TProductDataRest> = {
  fields: {
    name: fake(() => LocalizedString.random()),
    categories: fake(() => [Category.random()]),
    categoryOrderHints: fake((f) => ({
      [f.string.uuid()]: String(Math.random()),
    })),
    description: fake(() => LocalizedString.random()),
    slug: fake(() => LocalizedString.random()),
    metaTitle: fake(() => LocalizedString.random()),
    metaDescription: fake(() => LocalizedString.random()),
    metaKeywords: fake(() => LocalizedString.random()),
    masterVariant: fake(() => ProductVariantRest.random()),
    variants: fake(() => [ProductVariantRest.random()]),
    searchKeywords: fake(() => SearchKeywordsRest.random()),
  },
  postBuild: (model) => {
    return {
      categories: model.categories.map<CategoryReference>((category) => {
        const expandedCategory = category as unknown as TCtpCategory;
        return {
          id: expandedCategory.id,
          typeId: 'category',
          obj: expandedCategory,
        };
      }),
    };
  },
};
export const graphqlFieldsConfig: TModelFieldsConfig<TProductDataGraphql> = {
  fields: {
    __typename: 'ProductData',
    allVariants: fake(() => [ProductVariantGraphql.random()]),
    categories: fake(() => [Category.random()]),
    categoriesRef: null, // computed
    categoryOrderHint: null, // computed
    categoryOrderHints: fake(() => [CategoryOrderHintGraphql.random()]),
    description: null, // computed
    descriptionAllLocales: fake(() => LocalizedString.random()),
    masterVariant: fake(() => ProductVariantGraphql.random()),
    metaDescription: null, // computed
    metaDescriptionAllLocales: fake(() => LocalizedString.random()),
    metaKeywords: null, // computed
    metaKeywordsAllLocales: fake(() => LocalizedString.random()),
    metaTitle: null, // computed
    metaTitleAllLocales: fake(() => LocalizedString.random()),
    name: null, // computed
    nameAllLocales: fake(() => LocalizedString.random()),
    searchKeyword: null, // computed
    searchKeywords: fake(() => [SearchKeywordsGraphql.random()]),
    skus: fake((f) => [`${f.lorem.word()}-${f.string.alphanumeric(3)}`]),
    slug: null, // computed
    slugAllLocales: fake(() => LocalizedString.random()),
    variant: fake(() => ProductVariantGraphql.random()),
    variants: fake(() => [ProductVariantGraphql.random()]),
  },
  postBuild: (model) => {
    const slug = model.slugAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.slugAllLocales)
      : undefined;
    const name = model.nameAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(model.nameAllLocales)
      : undefined;
    const description = model.descriptionAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(
          model.descriptionAllLocales
        )
      : undefined;
    const metaDescription = model.metaDescriptionAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(
          model.metaDescriptionAllLocales
        )
      : undefined;
    const metaKeywords = model.metaKeywordsAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(
          model.metaKeywordsAllLocales
        )
      : undefined;
    const metaTitle = model.metaTitleAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(
          model.metaTitleAllLocales
        )
      : undefined;
    const categoriesRef = model.categories.map<TReferenceGraphql<'category'>>(
      (category) => ({
        id: category.id,
        typeId: 'category',
        __typename: 'Reference',
      })
    );
    const [categoryOrderHint] = model.categoryOrderHints.map(
      (hint) => hint.orderHint
    );
    const [searchKeyword] = model.searchKeywords.map(
      (keyword) => keyword.searchKeywords
    );
    return {
      slug,
      name,
      description,
      metaDescription,
      metaKeywords,
      metaTitle,
      categoriesRef,
      categoryOrderHint,
      searchKeyword,
    };
  },
};
