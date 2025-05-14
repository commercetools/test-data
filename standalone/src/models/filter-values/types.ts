import type { TBuilder } from '@/core';
import { TMcSettingsFilterValues } from '@/graphql-types';

export type TFilterValues = Exclude<TMcSettingsFilterValues, '__typename'>;

export type TFilterValuesGraphql = TFilterValues & {
  __typename: 'FilterValues';
};

export type TFilterValuesBuilder = TBuilder<TFilterValues>;

export type TCreateFilterValuesBuilder = () => TFilterValuesBuilder;
