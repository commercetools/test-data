import { AttributeLocalizedEnumType } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import {
  TAttributeLocalizedEnumValueDraftGraphql,
  TAttributeLocalizedEnumValueGraphql,
} from '../attribute-localized-enum-value';

export type TAttributeLocalizedEnumType = AttributeLocalizedEnumType;
export type TAttributeLocalizedEnumTypeDraft = AttributeLocalizedEnumType;

export type TAttributeLocalizedEnumTypeGraphql = Omit<
  TAttributeLocalizedEnumType,
  'values'
> & {
  values: {
    results: Array<TAttributeLocalizedEnumValueGraphql>;
    __typename: 'LocalizableEnumValueTypeResult';
  };
  __typename: 'LocalizableEnumAttributeDefinitionType';
};

export type TAttributeLocalizedEnumTypeDraftGraphql = {
  lenum: {
    values: Array<TAttributeLocalizedEnumValueDraftGraphql>;
  };
};

export type TAttributeLocalizedEnumTypeBuilder =
  TBuilder<TAttributeLocalizedEnumType>;
export type TAttributeLocalizedEnumTypeDraftBuilder =
  TBuilder<TAttributeLocalizedEnumTypeDraft>;

export type TCreateAttributeLocalizedEnumTypeBuilder =
  () => TAttributeLocalizedEnumTypeBuilder;
export type TCreateAttributeLocalizedEnumTypeDraftBuilder =
  () => TAttributeLocalizedEnumTypeDraftBuilder;
