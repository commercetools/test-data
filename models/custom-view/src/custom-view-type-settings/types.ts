import { TBuilder } from '@commercetools-test-data/core';

export type CustomViewSize = 'SMALL' | 'LARGE';

export type TCustomViewTypeSettings = {
  size?: CustomViewSize;
};
export type TCustomViewTypeSettingsGraphql = TCustomViewTypeSettings & {
  __typename: 'CustomViewTypeSettings';
};

export type TCustomViewTypeSettingsBuilder = TBuilder<TCustomViewTypeSettings>;
export type TCreateCustomViewTypeSettingsBuilder =
  () => TCustomViewTypeSettingsBuilder;

export type TCustomViewTypeSettingsDraftBuilder =
  TBuilder<TCustomViewTypeSettings>;
export type TCreateCustomViewTypeSettingsDraftBuilder =
  () => TCustomViewTypeSettingsDraftBuilder;
