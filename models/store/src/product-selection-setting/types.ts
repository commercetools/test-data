import type {
  ProductSelectionSetting,
  ProductSelectionSettingDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

//ProductSelectionSettingsDraft
export type TProductSelectionSettingDraft = ProductSelectionSettingDraft;
export type TProductSelectionSettingDraftBuilder =
  TBuilder<TProductSelectionSettingDraft>;
export type TCreateProductSelectionSettingDraftBuilder =
  () => TProductSelectionSettingDraftBuilder;
export type TProductSelectionSettingDraftGraphql = TProductSelectionSetting & {
  __typename: 'ProductSelectionSettingDraft';
};

//ProductSelectionSettings
export type TProductSelectionSettingRest = ProductSelectionSetting;
export type TProductSelectionSetting = ProductSelectionSetting;
export type TProductSelectionSettingBuilder =
  TBuilder<TProductSelectionSetting>;
export type TCreateProductSelectionSettingBuilder =
  () => TProductSelectionSettingBuilder;
export type TProductSelectionSettingGraphql = TProductSelectionSetting & {
  __typename: 'ProductSelectionSetting';
};
