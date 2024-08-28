import type { Product, ProductDraft } from '@commercetools/platform-sdk';
import type {
  TLocalizedStringDraftGraphql,
  TReferenceGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TProductTypeGraphql } from '@commercetools-test-data/product-type';
import type { TTaxCategoryGraphql } from '@commercetools-test-data/tax-category';
import type { TStateGraphql } from '../../../state/src';

export type TProduct = Product & {
  skus: Array<String>;
};

export type TProductRest = Omit<TProduct, 'skus'>;

export type TProductGraphql = Omit<
  TProduct,
  'productType' | 'state' | 'taxCategory'
> & {
  productType: TProductTypeGraphql;
  productTypeRef: TReferenceGraphql;
  state?: TStateGraphql;
  stateRef?: TReferenceGraphql;
  taxCategory?: TTaxCategoryGraphql;
  taxCategoryRef?: TReferenceGraphql;
  // TODO: add productSelectionRefs
  __typename: 'Product';
};

export type TProductDraft = ProductDraft;
export type TProductDraftGraphql = Omit<
  TProductDraft,
  | 'name'
  | 'description'
  | 'slug'
  | 'metaTitle'
  | 'metaDescription'
  | 'metaKeywords'
> & {
  name: TLocalizedStringDraftGraphql;
  slug: TLocalizedStringDraftGraphql;
  description?: TLocalizedStringDraftGraphql | null;
  metaTitle?: TLocalizedStringDraftGraphql | null;
  metaDescription?: TLocalizedStringDraftGraphql | null;
  metaKeywords?: TLocalizedStringDraftGraphql | null;
};

export type TProductBuilder = TBuilder<TProduct>;
export type TCreateProductBuilder = () => TProductBuilder;

export type TProductDraftBuilder = TBuilder<TProductDraft>;
export type TCreateProductDraftBuilder = () => TProductDraftBuilder;

export type TProductBuilderGraphql = TBuilder<TProductGraphql>;
export type TCreateProductBuilderGraphql = () => TProductBuilderGraphql;
