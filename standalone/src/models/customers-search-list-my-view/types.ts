import { TBuilder } from '../../core';
import type { TMcSettingsCustomersSearchListMyView } from '../../graphql-types';

export type TCustomersSearchListMyView = TMcSettingsCustomersSearchListMyView;

export type TCustomersSearchListMyViewBuilder =
  TBuilder<TCustomersSearchListMyView>;
export type TCreateCustomersSearchListMyView =
  () => TCustomersSearchListMyViewBuilder;
