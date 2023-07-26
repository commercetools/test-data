import type {
  ProductSelectionSetting,
  ProductSelectionSettingDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TProductSelectionSetting = ProductSelectionSetting;
export type TProductSelectionSettingDraft = ProductSelectionSettingDraft;

export type TProductSelectionSettingGraphql = TProductSelectionSetting & {
  __typename: 'TaxRate';
};
// ProductSelectionSettingDraft/ProductSelectionSettingInput does not exist in a graphql format

export type TProductSelectionSettingBuilder =
  TBuilder<TProductSelectionSetting>;
export type TProductSelectionSettingDraftBuilder =
  TBuilder<TProductSelectionSettingDraft>;

export type TCreateProductSelectionSettingBuilder =
  () => TProductSelectionSettingBuilder;
export type TCreateProductSelectionSettingDraftBuilder =
  () => TProductSelectionSettingDraftBuilder;
