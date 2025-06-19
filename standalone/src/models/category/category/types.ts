import type { Category, CategoryDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpCategory, TCtpCategoryDraft } from '@/graphql-types';

/**
 * @deprecated Use `TCategoryRest` or `TCategoryGraphql` instead.
 */
export type TCategory = Category;

/**
 * @deprecated Use `TCategoryDraftRest` or `TCategoryDraftGraphql` instead.
 */
export type TCategoryDraft = CategoryDraft;

// REST types
export type TCategoryRest = Category;
export type TCategoryDraftRest = CategoryDraft;

// GraphQL types
export type TCategoryGraphql = TCtpCategory;
export type TCategoryDraftGraphql = TCtpCategoryDraft;

// builders types
export type TCreateCategoryBuilder<
  TCategoryModel extends
    | TCategoryDraft
    | TCategory
    | TCategoryDraftRest
    | TCategoryRest
    | TCategoryGraphql
    | TCategoryDraftGraphql,
> = () => TBuilder<TCategoryModel>;
