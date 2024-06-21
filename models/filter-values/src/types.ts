import type { TBuilder } from '@commercetools-test-data/core';
import { TMcSettingsFilterValues } from '@commercetools-test-data/graphql-types';

export type TFilterValues = Exclude<TMcSettingsFilterValues, '__typename'>;

export type TFilterValuesGraphql = TFilterValues & {
  __typename: 'FilterValues';
};

export type TFilterValuesBuilder = TBuilder<TFilterValues>;

export type TCreateFilterValuesBuilder = () => TFilterValuesBuilder;
