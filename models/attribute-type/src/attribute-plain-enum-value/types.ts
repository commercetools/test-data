import { AttributePlainEnumValue } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TAttributePlainEnumValue = AttributePlainEnumValue;

export type TAttributePlainEnumValueGraphql = TAttributePlainEnumValue & {
  __typename: 'AttributePlainEnumValue';
};

export type TAttributePlainEnumValueBuilder =
  TBuilder<TAttributePlainEnumValue>;
export type TCreateAttributePlainEnumValueBuilder =
  () => TAttributePlainEnumValueBuilder;
