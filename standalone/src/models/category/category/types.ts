import type { Category, CategoryDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpCategory,
  TCtpCategoryDraft,
  TCtpCategorySearch,
} from '@/graphql-types';

/**
 * @deprecated Use `TCategoryDraftRest` or `TCategoryDraftGraphql` instead.
 */
export type TCategoryDraft = CategoryDraft;

/**
 * @deprecated Use `TCategoryRest` or `TCategoryGraphql` instead.
 */
export type TCategory = Category;

// REST types

export type TCategoryDraftRest = CategoryDraft;
export type TCategoryTypeRest = Category;

// GraphQL types
export type TCategoryTypeGraphql = TCtpCategory;
export type TCategoryDraftTypeGraphql = TCtpCategoryDraft;
export type TCategorySearchGraphql = TCtpCategorySearch;

// builders types
export type TCreateCategoryTypeBuilder<
  TCategoryTypeModel extends
    | TCategoryDraft
    | TCategory
    | TCategoryDraftRest
    | TCategoryTypeRest
    | TCategoryTypeGraphql
    | TCategoryDraftTypeGraphql
    | TCategorySearchGraphql,
> = () => TBuilder<TCategoryTypeModel>;
