import type { CustomFieldBooleanType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TCustomFieldBooleanType = CustomFieldBooleanType;
export type TCustomFieldBooleanTypeDraft = CustomFieldBooleanType;

export type TCustomFieldBooleanTypeGraphql = CustomFieldBooleanType & {
  __typename: 'BooleanCustomFieldType';
};
export type TCustomFieldBooleanTypeDraftGraphql = {
  boolean: {
    dummy: string | null;
  };
};

export type TCustomFieldBooleanTypeBuilder = TBuilder<TCustomFieldBooleanType>;
export type TCustomFieldBooleanTypeDraftBuilder =
  TBuilder<TCustomFieldBooleanTypeDraft>;

export type TCreateCustomFieldBooleanTypeBuilder =
  () => TCustomFieldBooleanTypeBuilder;
export type TCreateCustomFieldBooleanTypeDraftBuilder =
  () => TCustomFieldBooleanTypeDraftBuilder;
