import type {
  ProductSelection,
  ProductSelectionSetting,
  ProductSelectionSettingDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';

//ProductSelectionSettingsDraft
export type TProductSelectionSettingDraft = ProductSelectionSettingDraft;
export type TProductSelectionSettingDraftBuilder =
  TBuilder<TProductSelectionSettingDraft>;
export type TCreateProductSelectionSettingDraftBuilder =
  () => TProductSelectionSettingDraftBuilder;
export type TProductSelectionSettingDraftGraphql = TProductSelectionSetting;

//ProductSelectionSettings
export type TProductSelectionSettingRest = ProductSelectionSetting;
export type TProductSelectionSettingBuilder =
  TBuilder<TProductSelectionSetting>;
export type TCreateProductSelectionSettingBuilder =
  () => TProductSelectionSettingBuilder;
export type TProductSelectionSettingGraphql = TProductSelectionSetting & {
  __typename: 'ProductSelectionSetting';
};

//Default shape
export type TProductSelectionSetting = Omit<
  ProductSelectionSetting,
  'productSelection'
> & {
  productSelection: ProductSelection;
};
