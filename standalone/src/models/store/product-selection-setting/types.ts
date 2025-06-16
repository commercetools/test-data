import type {
  ProductSelectionSetting,
  ProductSelectionSettingDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpProductSelectionSetting,
  TCtpProductSelectionSettingDraft,
} from '@/graphql-types';

/**
 * @deprecated Use `TProductSelectionSettingDraftGraphql` instead
 */
export type TProductSelectionSettingDraft = ProductSelectionSettingDraft;

/**
 * @deprecated Use `TProductSelectionSettingRest` or `TProductSelectionSettingGraphql` instead
 */
export type TProductSelectionSetting = TProductSelectionSettingRest;

// REST types
export type TProductSelectionSettingRest = ProductSelectionSetting;
export type TProductSelectionSettingDraftRest = ProductSelectionSettingDraft;

// GraphQL types
export type TProductSelectionSettingGraphql = TCtpProductSelectionSetting;
export type TProductSelectionSettingDraftGraphql =
  TCtpProductSelectionSettingDraft;

export type TCreateProductSelectionSettingBuilder<
  TProductSelectionSettingModel extends
    | TProductSelectionSettingRest
    | TProductSelectionSettingGraphql
    | TProductSelectionSettingDraftRest
    | TProductSelectionSettingDraftGraphql,
> = () => TBuilder<TProductSelectionSettingModel>;
