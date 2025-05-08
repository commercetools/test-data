import { fake, type TModelFieldsConfig } from '../../../core';
import { Category } from '../../category';
import {
  LocalizedString,
  ReferenceRest,
  type TReferenceGraphql,
  type TLocalizedStringGraphql,
} from '../../commons';
import { ProductVariantGraphql, ProductVariantRest } from '../product-variant';
import {
  CategoryOrderHintGraphql,
  CategoryOrderHintRest,
} from './category-order-hint';
import { SearchKeywordsGraphql, SearchKeywordsRest } from './search-keywords';
import type { TProductDataGraphql, TProductDataRest } from './types';

export const restFieldsConfig: TModelFieldsConfig<TProductDataRest> = {
  fields: {
    name: fake(() => LocalizedString.random()),
    categories: fake(() => [
      ReferenceRest.random().typeId('category').obj(Category.random()),
    ]),
    categoryOrderHints: fake(() => CategoryOrderHintRest.random()),
    description: fake(() => LocalizedString.random()),
    slug: fake(() => LocalizedString.random()),
    metaTitle: fake(() => LocalizedString.random()),
    metaDescription: fake(() => LocalizedString.random()),
    metaKeywords: fake(() => LocalizedString.random()),
    masterVariant: fake(() => ProductVariantRest.random()),
    variants: fake(() => [ProductVariantRest.random()]),
    searchKeywords: fake(() => SearchKeywordsRest.random()),
  },
};
export const graphqlFieldsConfig: TModelFieldsConfig<TProductDataGraphql> = {
  fields: {
    __typename: 'ProductData',
    allVariants: fake(() => [ProductVariantGraphql.random()]),
    attributesRaw: fake(() => []),
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
  postBuild: (model, context) => {
    // The compatibility model is defined out of the REST one so it might happen that we
    // have a slug (and others) populated with the actual GraphQL value which should go in the *AllLocales fields.
    // (we can remove this once the compatibility mode is removed)
    const slugAllLocales =
      context?.isCompatMode && model.slug
        ? (model.slug as unknown as TLocalizedStringGraphql)
        : model.slugAllLocales;
    const nameAllLocales =
      context?.isCompatMode && model.name
        ? (model.name as unknown as TLocalizedStringGraphql)
        : model.nameAllLocales;
    const descriptionAllLocales =
      context?.isCompatMode && model.description
        ? (model.description as unknown as TLocalizedStringGraphql)
        : model.descriptionAllLocales;
    const metaDescriptionAllLocales =
      context?.isCompatMode && model.metaDescription
        ? (model.metaDescription as unknown as TLocalizedStringGraphql)
        : model.metaDescriptionAllLocales;
    const metaKeywordsAllLocales =
      context?.isCompatMode && model.metaKeywords
        ? (model.metaKeywords as unknown as TLocalizedStringGraphql)
        : model.metaKeywordsAllLocales;
    const metaTitleAllLocales =
      context?.isCompatMode && model.metaTitle
        ? (model.metaTitle as unknown as TLocalizedStringGraphql)
        : model.metaTitleAllLocales;

    const slug = slugAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(slugAllLocales)
      : undefined;
    const name = nameAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(nameAllLocales)
      : undefined;
    const description = descriptionAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(descriptionAllLocales)
      : undefined;
    const metaDescription = metaDescriptionAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(
          metaDescriptionAllLocales
        )
      : undefined;
    const metaKeywords = metaKeywordsAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(metaKeywordsAllLocales)
      : undefined;
    const metaTitle = metaTitleAllLocales
      ? LocalizedString.resolveGraphqlDefaultLocaleValue(metaTitleAllLocales)
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
      slugAllLocales,
      nameAllLocales,
      descriptionAllLocales,
      metaDescriptionAllLocales,
      metaKeywordsAllLocales,
      metaTitleAllLocales,
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
