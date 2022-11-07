import type {
  CustomFieldLocalizedEnumValue,
  LocalizedString,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TLocalizedEnumValue = CustomFieldLocalizedEnumValue;

export type TLocalizedEnumValueGraphql = {
  label: string;
  labelAllLocales: LocalizedString;
  __typename: 'LocalizedEnumValue';
};

export type TLocalizedEnumValueBuilder = TBuilder<TLocalizedEnumValue>;
export type TCreateLocalizedEnumValueBuilder = () => TLocalizedEnumValueBuilder;
