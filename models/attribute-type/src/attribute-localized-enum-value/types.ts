import { AttributeLocalizedEnumValue } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TAttributeLocalizedEnumValue = AttributeLocalizedEnumValue;

export type TAttributeLocalizedEnumValueGraphql =
  TAttributeLocalizedEnumValue & {
    __typename: 'AttributeLocalizedEnumValue';
  };

export type TAttributeLocalizedEnumValueBuilder =
  TBuilder<TAttributeLocalizedEnumValue>;
export type TCreateAttributeLocalizedEnumValueBuilder =
  () => TAttributeLocalizedEnumValueBuilder;
