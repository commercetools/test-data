import { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomersSearchListMyView } from '@commercetools-test-data/graphql-types';

export type TCustomersSearchListMyView = TMcSettingsCustomersSearchListMyView;

export type TCustomersSearchListMyViewBuilder =
  TBuilder<TCustomersSearchListMyView>;
export type TCreateCustomersSearchListMyView =
  () => TCustomersSearchListMyViewBuilder;
