import { TLocalizedStringGraphql } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomersSearchListMyView } from '@commercetools-test-data/graphql-types';

export type TCustomersSearchListMyView =
  TMcSettingsCustomersSearchListMyView & {
    name: string;
  };

export type TCustomersSearchListMyViewGraphql = Omit<
  TCustomersSearchListMyView,
  'nameAllLocales'
> & {
  nameAllLocales: TLocalizedStringGraphql | null;
  __typename: 'CustomersSearchListMyView';
};

export type TCustomersSearchListMyViewBuilder =
  TBuilder<TCustomersSearchListMyView>;
export type TCreateCustomersSearchListMyView =
  () => TCustomersSearchListMyViewBuilder;
