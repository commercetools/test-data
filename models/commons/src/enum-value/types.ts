import type { CustomFieldEnumValue } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TEnumValue = CustomFieldEnumValue;

export type TEnumValueGraphql = TEnumValue & {
  __typename: 'EnumValue';
};
export type TEnumValueBuilder = TBuilder<TEnumValue>;
export type TCreateEnumValueBuilder = () => TEnumValueBuilder;
