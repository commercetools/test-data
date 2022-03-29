import type { TBuilder } from '@commercetools-test-data/core';
import type {
  TLocalizedString,
  TReference,
  TInitiator,
} from '@commercetools-test-data/commons';

export type TCategoryBuilder = TBuilder<TCategory>;

// https://docs.commercetools.com/api/projects/categories
export type TCategory = {
  id: string;
  version: number;
  key?: string;
  createdAt: string;
  lastModifiedAt: string;
  createdBy: TInitiator;
  lastModifiedBy: TInitiator;
  name: TLocalizedString;
  slug: TLocalizedString;
  description?: TLocalizedString;
  ancestors: TReference<'category'>[];
  parent: TReference<'category'>;
  orderHint: string;
  externalId?: string;
  metaTitle?: TLocalizedString;
  metaDescription?: TLocalizedString;
  metaKeywords?: TLocalizedString;
  // TODO: provide correct type
  custom?: unknown;
  // TODO: provide correct type
  assets: unknown;
};
export type TCreateCategoryBuilder = () => TCategoryBuilder;
export type TCategoryRest = TCategory;
export type TCategoryGraphql = TCategory & {
  __typename: 'Category';
};
