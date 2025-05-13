import { CustomFieldSetType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpSetType } from '@/graphql-types';

export type TCustomFieldSetType = CustomFieldSetType;
export type TCustomFieldSetTypeDraft = CustomFieldSetType;

export type TCustomFieldSetTypeGraphql = TCtpSetType;
export type TCustomFieldSetTypeDraftGraphql = {
  set: {
    elementType: TCustomFieldSetTypeGraphql['elementType'];
  };
};

export type TCustomFieldSetTypeBuilder = TBuilder<TCustomFieldSetType>;
export type TCustomFieldSetTypeDraftBuilder =
  TBuilder<TCustomFieldSetTypeDraft>;

export type TCreateCustomFieldSetTypeBuilder = () => TCustomFieldSetTypeBuilder;
export type TCreateCustomFieldSetTypeDraftBuilder =
  () => TCustomFieldSetTypeDraftBuilder;
