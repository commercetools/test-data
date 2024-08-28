import type { CustomFieldSetType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCustomFieldSetType = CustomFieldSetType;
export type TCustomFieldSetTypeDraft = CustomFieldSetType;

export type TCustomFieldSetTypeGraphql = TCustomFieldSetType & {
  __typename: 'SetCustomFieldType';
};
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
