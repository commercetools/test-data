import type { AttributeEnumType } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import {
  TAttributePlainEnumValueDraftGraphql,
  TAttributePlainEnumValue,
} from '../attribute-plain-enum-value';

export type TAttributeEnumType = AttributeEnumType;
export type TAttributeEnumTypeDraft = AttributeEnumType;

export type TAttributeEnumTypeGraphql = Omit<TAttributeEnumType, 'values'> & {
  values: {
    results: Array<TAttributePlainEnumValue>;
    __typename: 'PlainEnumValueResult';
  };
  __typename: 'EnumAttributeDefinitionType';
};
export type TAttributeEnumTypeDraftGraphql = {
  enum: { values: Array<TAttributePlainEnumValueDraftGraphql> };
};

export type TAttributeEnumTypeBuilder = TBuilder<TAttributeEnumType>;
export type TAttributeEnumTypeDraftBuilder = TBuilder<TAttributeEnumTypeDraft>;

export type TCreateAttributeEnumTypeBuilder = () => TAttributeEnumTypeBuilder;
export type TCreateAttributeEnumTypeDraftBuilder =
  () => TAttributeEnumTypeDraftBuilder;
