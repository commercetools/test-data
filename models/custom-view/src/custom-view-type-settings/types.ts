import { TBuilder } from '@commercetools-test-data/core';

export type CustomViewSize = 'SMALL' | 'LARGE';

export type CustomViewTypeSettings = {
  size?: CustomViewSize;
};

export type CustomViewTypeSettingsDraft = CustomViewTypeSettings;

export type TCustomViewTypeSettings = CustomViewTypeSettings;
export type TCustomViewTypeSettingsDraft = CustomViewTypeSettings;

export type TCustomViewTypeSettingsBuilder = TBuilder<CustomViewTypeSettings>;
export type TCreateCustomViewTypeSettingsBuilder =
  () => TCustomViewTypeSettingsBuilder;

export type TCustomViewTypeSettingsDraftBuilder =
  TBuilder<CustomViewTypeSettings>;
export type TCreateCustomViewTypeSettingsDraftBuilder =
  () => TCustomViewTypeSettingsDraftBuilder;
