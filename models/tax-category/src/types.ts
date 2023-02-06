import type { TBuilder } from '@commercetools-test-data/core';
import type {
  TaxCategory,
  TaxCategoryDraft,
} from '@commercetools/platform-sdk';

export type TTaxCategory = TaxCategory;
export type TTaxCategoryDraft = TaxCategoryDraft;

export type TTaxCategoryGraphql = TTaxCategory & {
  __typename: 'TaxCategory';
};
export type TTaxCategoryDraftGraphql = TTaxCategoryDraft & {
  __typename: 'TaxCategoryDraft';
};

export type TTaxCategoryBuilder = TBuilder<TTaxCategory>;
export type TTaxCategoryDraftBuilder = TBuilder<TTaxCategoryDraft>;
export type TCreateTaxCategoryBuilder = () => TTaxCategoryBuilder;
export type TCreateTaxCategoryDraftBuilder = () => TTaxCategoryDraftBuilder;
