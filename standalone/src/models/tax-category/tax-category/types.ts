import type {
  TaxCategory,
  TaxCategoryDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';

export type TTaxCategory = TaxCategory;
export type TTaxCategoryDraft = TaxCategoryDraft;

export type TTaxCategoryGraphql = TTaxCategory & {
  __typename: 'TaxCategory';
};
export type TTaxCategoryDraftGraphql = TTaxCategoryDraft;

export type TTaxCategoryBuilder = TBuilder<TTaxCategory>;
export type TTaxCategoryDraftBuilder = TBuilder<TTaxCategoryDraft>;
export type TCreateTaxCategoryBuilder = () => TTaxCategoryBuilder;
export type TCreateTaxCategoryDraftBuilder = () => TTaxCategoryDraftBuilder;
