import type {
  ProductSelectionSetting,
  ProductSelectionSettingDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpProductSelectionSetting,
  TCtpProductSelectionSettingDraft,
} from '@/graphql-types';

//ProductSelectionSettingsDraft
export type TProductSelectionSettingDraftRest = ProductSelectionSettingDraft;
export type TProductSelectionSettingDraftGraphql =
  TCtpProductSelectionSettingDraft;

/**
 * @deprecated Use `TProductSelectionSettingDraftGraphql` instead
 */
export type TProductSelectionSettingDraft = ProductSelectionSettingDraft;

export type TCreateProductSelectionSettingDraftBuilder<
  TProductSelectionSettingDraftModel extends
    | TProductSelectionSettingDraftRest
    | TProductSelectionSettingDraftGraphql,
> = () => TBuilder<TProductSelectionSettingDraftModel>;

//ProductSelectionSettings
export type TProductSelectionSettingRest = ProductSelectionSetting;
export type TProductSelectionSettingGraphql = TCtpProductSelectionSetting;

/**
 * @deprecated Use `TProductSelectionSettingRest` or `TProductSelectionSettingGraphql` instead
 */

export type TProductSelectionSetting = TProductSelectionSettingRest;

export type TCreateProductSelectionSettingBuilder<
  TProductSelectionSettingModel extends
    | TProductSelectionSettingRest
    | TProductSelectionSettingGraphql,
> = () => TBuilder<TProductSelectionSettingModel>;
