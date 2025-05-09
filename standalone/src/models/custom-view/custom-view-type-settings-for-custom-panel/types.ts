import { TBuilder } from '../../../core';
import type { TMcSettingsCustomViewTypeSettings } from '../../../graphql-types';

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
