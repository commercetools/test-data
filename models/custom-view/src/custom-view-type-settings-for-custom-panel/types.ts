import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomViewTypeSettings } from '@commercetools-test-data/graphql-types';

export type TCustomViewTypeSettingsForCustomPanelGraphql =
  TMcSettingsCustomViewTypeSettings;

export type TCustomViewTypeSettingsForCustomPanel = Omit<
  TCustomViewTypeSettingsForCustomPanelGraphql,
  '__typename'
>;

export type TCustomViewTypeSettingsForCustomPanelBuilder =
  TBuilder<TCustomViewTypeSettingsForCustomPanel>;
export type TCreateCustomViewTypeSettingsForCustomPanelBuilder =
  () => TCustomViewTypeSettingsForCustomPanelBuilder;
