import { TBuilder } from '@commercetools-test-data/core';

export type CustomViewSize = 'SMALL' | 'LARGE';

export type TCustomViewTypeSettingsForCustomPanel = {
  size: CustomViewSize;
};
export type TCustomViewTypeSettingsForCustomPanelGraphql =
  TCustomViewTypeSettingsForCustomPanel & {
    __typename: 'CustomViewTypeSettings';
  };

export type TCustomViewTypeSettingsForCustomPanelBuilder =
  TBuilder<TCustomViewTypeSettingsForCustomPanel>;
export type TCreateCustomViewTypeSettingsForCustomPanelBuilder =
  () => TCustomViewTypeSettingsForCustomPanelBuilder;
